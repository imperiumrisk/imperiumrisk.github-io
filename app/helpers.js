const factorsToProportions = (factors) => {
	output = [];
	// First we calculate inherent risk
	ir_severity = 0;
	weightings.severity.forEach( row => {
		if(row.label == "Background Risk") {
			ir_severity += row.weight
		} else {
			factor = factors.find( elem => elem.label==row.label )
			if(factor && !factor.is_control) {
				ir_severity += row.weight * factor.val;
			}
		}
	});
	// Next residual risk
	// We actuall do the ratings based on their maximum
	rr_severity = ir_severity
	weightings.severity.forEach( row => {
		// We don't worry about background risk as it won't be an input factor
		factor = controlList.find( elem => elem.label == row.label );
		if(factor) {
			rr_severity += row.weight * factor.max;
		}
	})
	// Now the IRF weightings
	weightings.severity.forEach( row => {
		if(row.label == "Background Risk") {
			output.push({label: "Background Risk", proportion:  (row.weight/ir_severity)*100.0, is_control: false});
		} else {
			factor = factors.find( elem => elem.label==row.label );
			if(factor && !factor.is_control) {
				output.push({label: row.label, proportion: ((factor.val*row.weight)/ir_severity)*100.0, is_control: false});
			}
		}
	});
	// Now the control weightings
	weightings.severity.forEach( row => {
		// We don't worry about background risk as it won't be an input factor
		factor = controlList.find( elem => elem.label==row.label );
		factorInList = factors.find(elem => elem.label==row.label );
		if(factor && factorInList) {
			bottomProp = ((factor.max*row.weight)/(rr_severity-ir_severity));
			if(bottomProp == 0) {
				topProp = 0
			} else {
				topProp = (factorInList.val / factor.max)*bottomProp;
			}
			output.push({label: row.label, top_proportion: topProp*100.0, bottom_proportion: bottomProp*100.0, is_control: true});
		}
	});
	return output;
}

const getSeverity = (inputs) => {
	severity = 0;
	weightings.severity.forEach( row => {
		if(row.label == "Background Risk") {
			severity += row.weight
		} else {
			input = inputs.find( elem => elem.label==row.label )
			if(input) {
				severity += row.weight * input.val;
			}
		}
	})
	return Math.exp(severity);
}

const poissonPMF = (lambda, k) => {
	kfac = 1;
	for(i=1; i<=k; i++) {
		kfac = kfac * i;
	}
	return (Math.pow(lambda, k) * Math.exp(-lambda))/(kfac);
}

const getLikelihood = (inputs) => {
	poisson = 0;
	weightings.poisson.forEach( row => {
		if(row.label == "Background Risk") {
			poisson += row.weight
		} else {
			input = inputs.find( elem => elem.label==row.label )
			if(input) {
				poisson += row.weight * input.val;
			}
		}
	});
	// We now need to turn Poisson into expected time between severe events
	epsilon = 0.0001;
	q = 0;
	i = 1;
	err = epsilon + 1;
	while(err > epsilon){
		qold = q;
		q += poissonPMF(poisson, i)*(1-Math.pow(0.95,i));
		err = Math.abs(q-qold);
		i=i+1;
	}
	// return q;
	expec = 0;
	i = 1;
	err = epsilon + 1;
	while(err > epsilon) {
		expecold=expec;
		expec += i * Math.pow(1-q, i-1) * q;
		err = Math.abs(expec-expecold);
		i=i+1;
	}
	return expec;
}

const severityLikelihoodToPlacement = (severity, likelihood) => {
	if(severity < 200000) {
		severityPlace = 0;
	} else if (severity < 1000000) {
		severityPlace = 1;
	} else if (severity < 5000000) {
		severityPlace = 2;
	} else if (severity < 50000000) {
		severityPlace = 3;
	} else {
		severityPlace = 4;
	}
	if (likelihood < 4) {
		likelihoodPlace = 0;
	} else if (likelihood < 12) {
		likelihoodPlace = 1;
	} else if (likelihood < 40) {
		likelihoodPlace = 2;
	} else if (likelihood < 80) {
		likelihoodPlace = 3;
	} else {
		likelihoodPlace = 4;
	}
	gridPlacement = 5*likelihoodPlace + severityPlace;
	return gridPlacement;
}

const resetIrfValues = () => {
	irfList.forEach( factor => {
		slider = document.getElementById(factor.slider_id);
		slider.value = factor.init;
		factor.current = factor.init;
	})
	updateView();
	// Don't refresh the page
	return false;
}

const resetControlValues = () => {
	controlList.forEach( factor => {
		checkbox = document.getElementById(factor.checkbox_id);
		checkbox.checked = false;
		factor.current = factor.init;
	})
	updateView();
	// Don't refresh the page
	return false;
}

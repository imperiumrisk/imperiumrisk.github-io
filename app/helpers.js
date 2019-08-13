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

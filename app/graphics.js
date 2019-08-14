const removeOldSquares = () => {
	squareIDList.forEach( id => {
		oldSquare = document.getElementById(id);
		if(oldSquare) {
			oldSquare.parentNode.removeChild(oldSquare);
		}
	});
}

const addSquare = (placement, squareClass, squareID, text) => {
	document.getElementById("rating_square_"+placement).innerHTML += `<div class='rating_placement ${squareClass}' id='${squareID}'>${text}</div>`
}

const showSquares = (periodName, factorFunction) => {
	residualFactors = factorFunction(true);
	residualSeverity = getSeverity(residualFactors);
	residualLikelihood = getLikelihood(residualFactors);
	residualPlacement = severityLikelihoodToPlacement(residualSeverity, residualLikelihood);
	addSquare(residualPlacement, `${periodName}_square`, `${periodName}_rr_square`, 'RR');
	inherentFactors = factorFunction(false);
	inherentSeverity = getSeverity(inherentFactors);
	inherentLikelihood = getLikelihood(inherentFactors);
	inherentPlacement = severityLikelihoodToPlacement(inherentSeverity, inherentLikelihood);
	addSquare(inherentPlacement, `${periodName}_square`, `${periodName}_ir_square`, 'IR');
}

const showProportions = (factorFunction) => {
	allFactors = factorFunction(true);
	proportionList = factorsToProportions(allFactors);
	irfPropHolder = document.getElementById("irf_proportions");
	controlPropHolder = document.getElementById("control_proportions");
	irfHTML = "";
	controlHTML = "";
	proportionList.forEach( prop => {
		if(prop.is_control){
			controlHTML += `<div>${prop.label} ::: ${Math.round(prop.top_proportion)}/${Math.round(prop.bottom_proportion)}</div>`;
		} else {
			irfHTML += `<div>${prop.label} ::: ${Math.round(prop.proportion)}</div>`;
		}
	})
	irfPropHolder.innerHTML = irfHTML;
	controlPropHolder.innerHTML = controlHTML;
}

const updateView = () => {
	removeOldSquares();
	if(document.getElementById("whatif_checkbox").checked) {
		showSquares('whatif', getWhatIfFactors);
		showProportions(getWhatIfFactors);
	}
	if(document.getElementById("current_checkbox").checked) {
		showSquares('current', getCurrentFactors);
	}
	if(document.getElementById("last_month_checkbox").checked) {
		showSquares('last_month', getLastMonthFactors);
	}
	if(document.getElementById("last_year_checkbox").checked) {
		showSquares('last_year', getLastYearFactors);
	}
	if(document.getElementById("predicted_checkbox").checked) {
		showSquares('predicted', getPredictedFactors);
	}
}


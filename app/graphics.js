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
const removeOldSquares = () => {
	squareIDList.forEach( id => {
		oldSquare = document.getElementById(id);
		if(oldSquare) {
			oldSquare.parentNode.removeChild(oldSquare);
		}
	});
}

const updateView = () => {
	removeOldSquares();
	if(document.getElementById("whatif_checkbox").checked) {
		showSquares('whatif', getWhatIfFactors);
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


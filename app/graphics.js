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

const updateProportions = (factorFunction) => {
	allFactors = factorFunction(true);
	proportionList = factorsToProportions(allFactors);
	irfPropHolder = document.getElementById("irf_proportions");
	controlPropHolder = document.getElementById("control_proportions");
	irfHTML = "";
	controlHTML = "";
	proportionList.forEach( prop => {
		if(prop.is_control){
			if(!prop.bottom_proportion==0){
				controlHTML += `<div class="proportion_oblong">
									<div class="proportion_label"><span>${prop.label}<span></div>
									<div class="proportion_frac">
										<div>${Math.round(prop.top_proportion)}</div>
										<div>${Math.round(prop.bottom_proportion)}</div>
									</div>
								</div>`;
			}
		} else {
			if(!prop.proportion==0) {
				irfHTML += `<div class="proportion_oblong">
								<div class="proportion_label"><span>${prop.label}</span></div>
								<div class="proportion_int">${Math.round(prop.proportion)}</div>
							</div>`;
			}
		}
	})
	irfPropHolder.innerHTML = irfHTML;
	controlPropHolder.innerHTML = controlHTML;
}

const updateView = () => {
	removeOldSquares();
	if(document.getElementById("whatif_checkbox").checked) {
		showSquares('whatif', getWhatIfFactors);
		updateProportions(getWhatIfFactors);
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


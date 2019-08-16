const removeOldSquares = () => {
	squareIDList.forEach( id => {
		oldSquare = document.getElementById(id);
		if(oldSquare) {
			oldSquare.parentNode.removeChild(oldSquare);
		}
	});
}

const addSquare = (placement, squareClass, squareID, text, tooltip) => {
	document.getElementById("rating_square_"+placement).innerHTML += `<div class='rating_placement ${squareClass}' id='${squareID}'>${text}<div class='tooltip'>${tooltip}</div></div>`
	//document.getElementById("rating_square_"+placement).innerHTML += `<div class='rating_placement ${squareClass}' id='${squareID}'>${text}</div>`
}

const showSquares = (periodName, factorFunction) => {
	residualFactors = factorFunction(true);
	residualSeverity = getSeverity(residualFactors);
	residualLikelihood = getLikelihood(residualFactors);
	residualPlacement = severityLikelihoodToPlacement(residualSeverity, residualLikelihood);
	residualTooltip = getSquareTooltip(residualSeverity, residualLikelihood);
	addSquare(residualPlacement, `${periodName}_square`, `${periodName}_rr_square`, 'RR', residualTooltip);
	inherentFactors = factorFunction(false);
	inherentSeverity = getSeverity(inherentFactors);
	inherentLikelihood = getLikelihood(inherentFactors);
	inherentPlacement = severityLikelihoodToPlacement(inherentSeverity, inherentLikelihood);
	inherentTooltip = getSquareTooltip(inherentSeverity, inherentLikelihood);
	addSquare(inherentPlacement, `${periodName}_square`, `${periodName}_ir_square`, 'IR', inherentTooltip);
}

const updateProportions = (factorFunction) => {
	allFactors = factorFunction(true);
	proportionList = factorsToProportions(allFactors);
	irfPropHolder = document.getElementById("irf_proportions");
	controlPropHolder = document.getElementById("control_proportions");
	irfHTML = "";
	controlHTML = "";
	// First we find the maximum rated IRF for colouring
	max = 0
	proportionList.forEach( prop => {
		if (prop.proportion > max) {
			max = prop.proportion;
		}
	});
	proportionList.forEach( prop => {
		if(prop.is_control){
			// If the factor is 0 in the model then display in grey
			if(!prop.bottom_proportion==0){
				fraction = prop.top_proportion/prop.bottom_proportion;
			} else {
				fraction = 0;
			}
			//  Get the right colour class based on the fraction
			if(prop.bottom_proportion<5) {
				propColor = "prop_grey";
			} else if(fraction >= 0.9){
				propColor = "prop_green";
			} else if (fraction >= 0.5) {
				propColor = "prop_amber";
			} else {
				propColor = "prop_red";
			}
			controlHTML += `<div class="proportion_oblong">
								<div class="proportion_label"><span>${prop.label}<span></div>
								<div class="proportion_frac ${propColor}">
									<div>${Math.round(prop.top_proportion)}</div>
									<div>${Math.round(prop.bottom_proportion)}</div>
								</div>
								<div class="tooltip">${getProportionTooltip(prop.label, true)}</div>
							</div>`;
		} else {
			fraction = prop.proportion / max;
			// If factor is insignificant then colour in grey
			if (prop.proportion==0) {
				propColor = "prop_grey";
			} else if(fraction >= 0.7){
				propColor = "prop_red";
			} else if (fraction >= 0.4) {
				propColor = "prop_amber";
			} else {
				propColor = "prop_green";
			}
			if(prop.label == "Background Risk") {
				tooltip = "";
			} else {
				tooltip = `<div class="tooltip">${getProportionTooltip(prop.label, false)}</div>`;
			}
			irfHTML += `<div class="proportion_oblong">
							<div class="proportion_label"><span>${prop.label}</span></div>
							<div class="proportion_int ${propColor}">${Math.round(prop.proportion)}</div>
							${tooltip}
						</div>`;
		}
	})
	irfPropHolder.innerHTML = irfHTML;
	controlPropHolder.innerHTML = controlHTML;
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
	updateProportions(getWhatIfFactors);
}


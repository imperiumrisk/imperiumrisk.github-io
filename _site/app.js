// Modified from https://www.w3schools.com/howto/howto_js_rangeslider.asp

irfList = [
	{label: "Trade Count", slider_id: "tradeCountSlider", output_id: "tradeCountOutput", min: 1000000, max: 2000000, step: 1000, init: 1500000, current: 1500000},
	{label: "Trade Notional", slider_id: "tradeNotionalSlider", output_id: "tradeNotionalOutput", min: 0, max: 1, step: 0.1, init: 0.5, current: 0.5},
	{label: "IT Complexity", slider_id: "itComplexitySlider", output_id: "itComplexityOutput", min: 0, max: 1, step: 0.1, init: 0.5, current: 0.5},
	{label: "F2B Complexity", slider_id: "f2bComplexitySlider", output_id: "f2bComplexityOutput", min: 0, max: 1, step: 0.1, init: 0.5, current: 0.5},
	{label: "Product Complexity", slider_id: "productComplexitySlider", output_id: "productComplexityOutput", min: 0, max: 1, step: 0.1, init: 0.5, current: 0.5},
	{label: "Regional Complexity", slider_id: "regionalComplexitySlider", output_id: "regionalComplexityOutput", min: 0, max: 1, step: 0.1, init: 0.5, current: 0.5}
];

controlList = [
	{label: "MiFiD Training", checkbox_id: "fixMifidTraining", current: 0.6, init: 0.6, max: 1},
	{label: "MiFiD Rule Verification", checkbox_id: "fixMifidRuleVerification", current: 0.6 , init: 0.6, max: 1},
	{label: "External Oversight", checkbox_id: "fixExternalOversight", current: 0, init: 0, max: 1},
	{label: "EOD Monitoring", checkbox_id: "fixEodMonitoring", current: 0, init: 0, max: 1},
	{label: "Control 5", checkbox_id: "fixControl5", current: 0.4, init: 0.4, max: 1},
	{label: "Control 6", checkbox_id: "fixControl6", current: 0.2, init: 0.2, max: 1},
	{label: "Control 7", checkbox_id: "fixControl7", current: 0.8, init: 0.8, max: 1},
	{label: "Control 8", checkbox_id: "fixControl8", current: 0.1, init: 0.1, max: 1},
	{label: "Control 9", checkbox_id: "fixControl9", current: 0, init: 0, max: 1},
	{label: "Control 10", checkbox_id: "fixControl10", current: 0.3, init: 0.3, max: 1}
]

weightings = {
	severity:[
		{label: "Background Risk", weight: 7.51670372},
		{label: "Trade Count", weight: 0.00000286649389},
		{label: "Trade Notional", weight: 2.17873435},
		{label: "IT Complexity", weight: 2.38515466},
		{label: "F2B Complexity", weight: 3.56041172},
		{label: "Product Complexity", weight: 2.27354505},
		{label: "Regional Complexity", weight: 0},
		{label: "MiFiD Training", weight: -0.66462414},
		{label: "MiFiD Rule Verification", weight: -1.43725215},
		{label: "External Oversight", weight: -0.28821563},
		{label: "EOD Monitoring", weight: -0.01972361},
		{label: "Control 5", weight: 0},
		{label: "Control 6", weight: -0.21025528 },
		{label: "Control 7", weight: -0.13522333},
		{label: "Control 8", weight: 0},
		{label: "Control 9", weight: -0.34237199},
		{label: "Control 10", weight: 0}
	],
	poisson:[
		{label: "Background Risk", weight: -0.093366761},
		{label: "Trade Count", weight: 0.000002367030616},
		{label: "Trade Notional", weight: 0.909604716},
		{label: "IT Complexity", weight: 0.026013415},
		{label: "F2B Complexity", weight: 2.416220199},
		{label: "Product Complexity", weight: 0},
		{label: "Regional Complexity", weight: 0},
		{label: "MiFiD Training", weight: -0.6},
		{label: "MiFiD Rule Verification", weight: -1.0},
		{label: "External Oversight", weight: -0.2},
		{label: "EOD Monitoring", weight: -0.1},
		{label: "Control 5", weight: 0},
		{label: "Control 6", weight: -0.030591819},
		{label: "Control 7", weight: -0.1},
		{label: "Control 8", weight: 0},
		{label: "Control 9", weight: -0.2},
		{label: "Control 10", weight: 0}
	]
}

grid_green = "grid_green";
grid_orange = "grid_orange";
grid_red = "grid_red";
gridColours = [grid_green, grid_orange, grid_red, grid_red, grid_red,
			grid_green, grid_orange, grid_red, grid_red, grid_red,
			grid_green, grid_green, grid_orange, grid_red, grid_red, 
			grid_green, grid_green, grid_green, grid_orange, grid_red,
			grid_green, grid_green, grid_green, grid_green, grid_orange];

// Colour in the grid
var gridChildren = Array.prototype.slice.call(document.getElementById("rating_grid").children);
i=0;
gridChildren.forEach( square => {
	if(square.classList.contains("rating_square")) {
		square.classList.add(gridColours[i]);
		square.id="rating_square_"+i;
		i+=1;
	}
});


// Add Inherent Risk Factor HTML
irfWhatIfHTML = "";
irfList.forEach( row => {
	irfWhatIfHTML +=  `<div class='slider-group'>
						<label>${row.label}</label>
						<div class='slider-value' id='${row.output_id}'>
							${row.init}
						</div>
						<div class='slidecontainer'>
							<input type='range' min='${row.min}' max='${row.max}' value='${row.init}' step='${row.step}' class='slider' id='${row.slider_id}'>
						</div>
					</div>`
});
document.getElementById("whatif_factor_form_group").innerHTML += irfWhatIfHTML;

// Add event listeners so that output readout updates
irfList.forEach( row => {
	var slider = document.getElementById(row.slider_id);
	var output = document.getElementById(row.output_id);
	output.innerHTML = slider.value; // Display the default slider value

	// Update the current slider value (each time you drag the slider handle)
	slider.oninput = () => {
		output.innerHTML = slider.value;
		row.current = slider.value;
		updateView();
	}
});

// Add control factor HTML
controlWhatIfHTML = ""
controlList.forEach( row => {
	controlWhatIfHTML += `<div class='check-group'>
								<input type='checkbox' name='${row.checkbox_id}' id='${row.checkbox_id}'>
								<label for='current'>${row.label}</label>
						  </div>`
});
document.getElementById("whatif_control_form_group").innerHTML += controlWhatIfHTML;

// Add event listeners for control fixes
controlList.forEach( row => {
	var check = document.getElementById(row.checkbox_id);
	check.addEventListener("change", () => {
		if (check.checked) {
			row.current = row.max;
		} else {
			row.current = row.init;
		}
		updateView();
	});
});


const getCurrentFactors = () => {
	returnList = [];
	irfList.forEach( row => {
		returnList.push({label: row.label, val : parseFloat(row.current)});
	});
	controlList.forEach( row => {
		returnList.push({label: row.label, val: parseFloat(row.current)});
	});
	return returnList;
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

const updateView = () => {
	factors = getCurrentFactors();
	severity = getSeverity(factors);
	likelihood = getLikelihood(factors);
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
	// First let's remove the old rating
	oldSquare = document.getElementById("rr_square");
	if(oldSquare){
		oldSquare.parentNode.removeChild(oldSquare);
	}
	// We have the placement now we just need to add the actual square
	document.getElementById("rating_square_"+gridPlacement).innerHTML = "<div id='rr_square'>RR</div>"
}

// Finally update the view
updateView();

// Populate the risk list
riskSelect = document.getElementById("risk_select");
buSelect = document.getElementById("bu_select");
riskListHTML = "";
getRiskList().forEach( risk => {
	riskListHTML += `<option value="${risk.id}">${risk.title}</option>`;
});
riskSelect.innerHTML += riskListHTML;
buListHTML = "";
getBuList().forEach( bu => {
	buListHTML += `<option value="${bu.id}">${bu.title}</option>`;
});
buSelect.innerHTML += buListHTML;
// Get the initial selected risk/bu combo
var SELECTED_RISK = riskSelect.value;
var SELECTED_BU = buSelect.value;
// Add event listeners on the risk/bu selectors
// TODO: Redraw What If interface on new selection
riskSelect.addEventListener("change", () => {
	SELECTED_RISK = riskSelect.value;
	updateView();
	resetIrfValues();
	resetControlValues();
	setupFactors();
});
buSelect.addEventListener("change", () => {
	SELECTED_BU = buSelect.value;
	updateView();
	resetIrfValues();
	resetControlValues();
	setupFactors();
});

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

function setupFactors() {
	// Add Inherent Risk Factor (What If) HTML
	irfWhatIfHTML = "";
	getIRFData(SELECTED_RISK,SELECTED_BU).forEach( row => {
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
	// Now we add the reset button
	irfResetButton = "<div class='button_wrapper'><button id='irf_reset_button' onclick='resetIrfValues()' type='button'>Reset</button></div>";
	irfWhatIfHTML += irfResetButton;
	document.getElementById("whatif_factor_form_group").innerHTML = irfWhatIfHTML;

	// Add event listeners so that output of sliders updates
	getIRFData(SELECTED_RISK,SELECTED_BU).forEach( row => {
		var slider = document.getElementById(row.slider_id);
		var output = document.getElementById(row.output_id);
		output.innerHTML = parseFloat(slider.value).toLocaleString(); // Display the default slider value

		// Update the current slider value (each time you drag the slider handle)
		slider.oninput = () => {
			output.innerHTML = parseFloat(slider.value).toLocaleString();
			setIrfValue(SELECTED_RISK, SELECTED_BU, row.label, parseFloat(slider.value));
			updateView();
		}
	});

	// Add control factor What If HTML
	controlWhatIfHTML = ""
	getControlData(SELECTED_RISK,SELECTED_BU).forEach( row => {
		controlWhatIfHTML += `<div class='check-group'>
									<input type='checkbox' name='${row.checkbox_id}' id='${row.checkbox_id}'>
									<label for='current'>${row.label}</label>
							  </div>`
	});
	controlResetButton = "<div class='button_wrapper'><button id='control_reset_button' onclick='resetControlValues()' type='button'>Reset</button></div>";
	controlWhatIfHTML += controlResetButton;
	document.getElementById("whatif_control_form_group").innerHTML = controlWhatIfHTML;

	// Add event listeners for control fixes
	getControlData(SELECTED_RISK,SELECTED_BU).forEach( row => {
		var check = document.getElementById(row.checkbox_id);
		check.addEventListener("change", () => {
			if (check.checked) {
				setControlValue(SELECTED_RISK, SELECTED_BU, row.label,row.max);
			} else {
				setControlValue(SELECTED_RISK, SELECTED_BU, row.label,row.init);
			}
			updateView();
		});
	});
}
setupFactors();

// Add event listeners for period form
periodFormIDs.forEach( id => {
	document.getElementById(id).addEventListener("change", updateView);
});

// Finally update the view
updateView();

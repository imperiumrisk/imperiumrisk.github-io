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


// Add Inherent Risk Factor (What If) HTML
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

// Add event listeners so that output of sliders updates
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

// Add control factor What If HTML
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


// Add event listeners for period form
periodFormIDs.forEach( id => {
	document.getElementById(id).addEventListener("change", updateView);
});

// Finally update the view
updateView();

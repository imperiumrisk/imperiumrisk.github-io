// Helper function that returns the navigation slider
const returnNavSlider = () => {
	selected = document.getElementById("selected_nav");
	nav_slider.style.top = selected.offsetTop+"px";
}

// Get all the elemnts we need
nav_slider = document.getElementById("nav_slider");
// Return the nav slider at the start
returnNavSlider();
// Make it visible
nav_slider.classList.add("visible");
// Activate transitions on the slider
setTimeout(() => {
	nav_slider.classList.add("transitions_active");
}, 500);

sidenav_ul = document.getElementById("sidenav_ul");
listItems = Array.prototype.slice.call(sidenav_ul.children);

// Add events when hovering over item
listItems.forEach( item => {
	item.addEventListener("mouseover", () => {
		nav_slider.style.top = item.offsetTop+"px";
	});
});
// Add events when not hovering
listItems.forEach( item => {
	item.addEventListener("mouseout", returnNavSlider);
});


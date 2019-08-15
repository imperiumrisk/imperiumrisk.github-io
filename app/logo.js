function toggleBars() {
	var barContainer = document.getElementById("bar_container");
	var children = Array.prototype.slice.call(barContainer.children);
	children.forEach( child => {
		if(child.classList.contains("show")) {
			child.classList.remove("show");
		} else {
			child.classList.add("show");
		}
	});
}

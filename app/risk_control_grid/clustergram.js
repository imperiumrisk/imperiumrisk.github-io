let width = 100;
let height = 100;
let axisStartRow = 3;
let axisStartColumn = 5;
let axisPercent = 13;
let HIGH_NUMBER = 1000;
let corner, rowLabels, columnLabels, centralNodes, rowBreadcrumb, columnBreadcrumb;
let rowDepth = 0;
let columnDepth = 0;
let rowTree = [{id: 0, y0: axisPercent, y1:height}];
let columnTree = [{id: 0, x0: axisPercent, x1: width}];
constructTreeJSONs();
let x = d3.scaleLinear().domain([axisPercent, width]).range([axisPercent, width]);
let y = d3.scaleLinear().domain([axisPercent, height]).range([axisPercent, height]);
let dataMode = "applicability";

const cornerHTML =
	`<svg height="100%" width="100%">
    <line x1="0%" y1="100%" x2="100%" y2="0%" style="stroke:rgb(73,80,105);stroke-width:1"></line>
    <line x1="50%" y1="50%" x2="100%" y2="100%" style="stroke:rgb(73,80,105);stroke-width:1"></line></svg>`

getData().then( data => {
	let chart = d3.select("#d3_root");
	let numRows = data.rows.length;
	let numColumns = data.columns.length;
	
	columnNodeData = columnNodeProducer(data.columns, axisPercent, width, axisPercent, [0]);
	rowNodeData = rowNodeProducer(data.rows, axisPercent, height, axisPercent, [0]);
	centralNodeData = centralNodeProducer(data.links, data.rows, data.columns, rowNodeData, columnNodeData);

	corner = chart
		.append("div")
		.html(cornerHTML)
		.style("top", (0)+"%")
		.style("height", (axisPercent)+"%")
		.style("left", (0)+"%")
		.style("width", (axisPercent)+"%")
		.style("z-index", 2*HIGH_NUMBER)

	rowBreadcrumb = chart
		.append("div")
		.style("top", (axisPercent)+"%")
		.style("height", (100-axisPercent)+"%")
		.style("left", "0%")
		.style("width", (axisStartRow)+"%")
		.style("z-index", 2*HIGH_NUMBER)

	columnBreadcrumb = chart
		.append("div")
		.style("top", "0%")
		.style("height", (axisStartColumn)+"%")
		.style("left", (axisPercent)+"%")
		.style("width", (100 - axisPercent)+"%")
		.style("z-index", 2*HIGH_NUMBER)

	rowLabels = chart
		.selectAll(".node")
		.data(rowNodeData)
		.enter()
		.append("div")
		.attr("title", d =>
			d.children 
			? d.title + " ("+d.children.toString()+")"
				: d.title
		)
		.html(d =>
			d.children 
			? d.title + " <br/>("+d.children.toString()+")"
				: d.title
		)
		.style("top", d => y(d.y0)+"%")
		.style("height", d => (y(d.y1) - y(d.y0))+"%")
		.style("left",  d => (axisStartRow)+"%")
		.style("width", d => (axisPercent-axisStartRow)+"%")
		.style("z-index", d => 2*HIGH_NUMBER - d.depth)

	columnLabels = chart
		.selectAll(".node")
		.data(columnNodeData)
		.enter()
		.append("div")
		.attr("title", d =>
			d.children 
			? d.title + " ("+d.children.toString()+")"
				: d.title
		)
		.html(d =>
			d.children 
			? d.title + " <br/>("+d.children.toString()+")"
				: d.title
		)
		.style("top", d => (axisStartColumn)+"%")
		.style("height",  d => (axisPercent - axisStartColumn)+"%")
		.style("left",  d => x(d.x0)+"%")
		.style("width", d => (x(d.x1) - x(d.x0))+"%")
		.style("z-index", d => 2*HIGH_NUMBER - d.depth)

	centralNodes = chart
		.selectAll(".node")
		.data(centralNodeData)
		.enter()
		.append("div")
		.html(getCentralNodeHTML)
		.style("top", d => y(d.y0)+"%")
		.style("height",  d => (y(d.y1) - y(d.y0))+"%")
		.style("left",  d => x(d.x0)+"%")
		.style("width", d => (x(d.x1) - x(d.x0))+"%")
		.style("z-index", d =>  HIGH_NUMBER-d.depth)

	// Finally add styling and click events
	// First the corner handler
	corner
		.attr("class", d => "node corner")
		.on("click", function() {
			boundingRect = this.getBoundingClientRect();
			var coordinates= d3.mouse(this);
			// Turn coords into percent
			coordinates[0] = coordinates[0] / boundingRect.width;
			coordinates[1] = coordinates[1] / boundingRect.height;
			if (coordinates[0] + coordinates[1] <= 1) {
				unzoom();
			} else if (coordinates[0] > coordinates[1]) {
				unzoomColumn();
			} else {
				unzoomRow();
			}
		});
	rowBreadcrumb
		.attr("class", d => "node row_breadcrumb")
		.on("click", unzoomRow)
	columnBreadcrumb
		.attr("class", d => "node column_breadcrumb")
		.on("click", unzoomColumn)
	// Now handlers for axses and central nodes
	rowLabels
		.attr("class", d =>"node axis "+getVisibilityClass(d)+" "+getDepthClass(d))
		.on("click",zoomRow);
	columnLabels
		.attr("class", d => "node axis "+getVisibilityClass(d)+" "+getDepthClass(d))
		.on("click",zoomColumn);
	centralNodes
		.attr("class", d => "node "+getVisibilityClass(d)+" "+getDepthClass(d))
		.on("click",zoom);
})

const getCentralNodeHTML = (d) => {
	if(dataMode==="applicability") {
		if(!d.children) {
			if(d.values.applicability === 1) {
				return "&#10004;"
			} else {
				return ""
			}
		} else {
			return d.values.applicability
		}
	} else {
		return d.values[dataMode].toFixed(3);
	}
}

// Datamode selector listener
document.getElementById("dataModeSelector").addEventListener("change", e => {
	dataMode = e.target.value;
	// Redraw nodes
	centralNodes.html(getCentralNodeHTML);
});

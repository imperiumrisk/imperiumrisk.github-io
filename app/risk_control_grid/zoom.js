const zoom = (d, unzooming) => {
	x.domain([d.x0, d.x1])
	y.domain([d.y0,d.y1])
	let t = d3.transition()
		.duration(300)
		.ease(d3.easeCubicOut);
	let animateRows = true;
	let animateColumns = true;
	if(rowTree[rowDepth].y0 !== d.y0 || rowTree[rowDepth].y1 !== d.y1) {
		if(unzooming!==-1) {
			if(d.row.children) {
				rowDepth++;
				rowTree.push(d.row);
			} else {
				animateRows = false;
			}
		} else {
			rowDepth--;
			rowTree.pop();
		}
	}
	if(columnTree[columnDepth].x0 !== d.x0 || columnTree[columnDepth].x1 !== d.x1) {
		if(unzooming!==-1) {
			if (d.column.children) {
				columnDepth++;
				columnTree.push(d.column);
			} else {
				animateColumns = false;
			}
		} else {
			columnDepth--;
			columnTree.pop();
		}
	}
	constructTreeJSONs();
	updateBreadcrumbs();
	if(animateRows) {
		rowLabels
			.transition(t)
			.style("top", d => y(d.y0)+"%")
			.style("height",  d => (y(d.y1) - y(d.y0))+"%")
			.attr("class", d =>"node axis "+getVisibilityClass(d)+" "+getDepthClass(d));
	}
	if(animateColumns) {
		columnLabels
			.transition(t)
			.style("left",  d => x(d.x0)+"%")
			.style("width", d => (x(d.x1) - x(d.x0))+"%")
			.attr("class", d =>"node axis "+getVisibilityClass(d)+" "+getDepthClass(d));
	}
	if(animateRows && animateColumns) {
		centralNodes
			.transition(t)
			.style("top", d => y(d.y0)+"%")
			.style("height",  d => (y(d.y1) - y(d.y0))+"%")
			.style("left",  d => x(d.x0)+"%")
			.style("width", d => (x(d.x1) - x(d.x0))+"%")
			.attr("class", d =>"node "+getVisibilityClass(d));
	} else if(animateRows) {
		centralNodes
			.transition(t)
			.style("top", d => y(d.y0)+"%")
			.style("height",  d => (y(d.y1) - y(d.y0))+"%")
			.attr("class", d =>"node "+getVisibilityClass(d));
	} else if(animateColumns) {
		centralNodes
			.transition(t)
			.style("left",  d => x(d.x0)+"%")
			.style("width", d => (x(d.x1) - x(d.x0))+"%")
			.attr("class", d =>"node "+getVisibilityClass(d));
	}
}

const zoomRow = (d, unzooming) => {
	y.domain([d.y0,d.y1])

	let t = d3.transition()
		.duration(300)
		.ease(d3.easeCubicOut);

	let animate = true;

	if(rowTree[rowDepth].y0 !== d.y0 || rowTree[rowDepth].y1 !== d.y1) {
		if(unzooming!==-1) {
			if(d.children) {
				rowDepth++;
				rowTree.push(d);
			} else {
				animate = false;
			}
		} else {
			rowDepth--;
			rowTree.pop();
		}
	}
	constructTreeJSONs();
	updateBreadcrumbs();

	if(animate) {
		rowLabels
			.transition(t)
			.style("top", d => y(d.y0)+"%")
			.style("height",  d => (y(d.y1) - y(d.y0))+"%")
			.attr("class", d =>"node axis "+getVisibilityClass(d)+" "+getDepthClass(d));
		centralNodes
			.transition(t)
			.style("top", d => y(d.y0)+"%")
			.style("height",  d => (y(d.y1) - y(d.y0))+"%")
			.attr("class", d =>"node "+getVisibilityClass(d));
		columnLabels
			.transition(t)
			.attr("class", d =>"node axis "+getVisibilityClass(d)+" "+getDepthClass(d));
	}
}

const zoomColumn = (d, unzooming) => {
	x.domain([d.x0, d.x1])

	let t = d3.transition()
		.duration(300)
		.ease(d3.easeCubicOut);

	let animate = true;

	if(columnTree[columnDepth].x0 !== d.x0 || columnTree[columnDepth].x1 !== d.x1) {
		if(unzooming!==-1) {
			if(d.children) {
				columnDepth++;
				columnTree.push(d);
			} else {
				animate = false;
			}
		} else {
			columnDepth--;
			columnTree.pop();
		}
	}
	constructTreeJSONs();
	updateBreadcrumbs();

	if (animate) {
		columnLabels
			.transition(t)
			.style("left",  d => x(d.x0)+"%")
			.style("width", d => (x(d.x1) - x(d.x0))+"%")
			.attr("class", d =>"node axis "+getVisibilityClass(d)+" "+getDepthClass(d));
		centralNodes
			.transition(t)
			.style("left",  d => x(d.x0)+"%")
			.style("width", d => (x(d.x1) - x(d.x0))+"%")
			.attr("class", d =>"node "+getVisibilityClass(d));
		rowLabels
			.transition(t)
			.attr("class", d =>"node axis "+getVisibilityClass(d)+" "+getDepthClass(d));
	}
}

const unzoomRow = () => {
	d = rowTree[rowTree.length-2];
	if(d) {
		zoomRow(d, -1);
	}
}

const unzoomColumn = () => {
	d = columnTree[columnTree.length-2];
	if(d) {
		zoomColumn(d, -1);
	}
}

const unzoom = () => {
	d = {};
	columnD = columnTree[columnTree.length - 2];
	rowD = rowTree[rowTree.length - 2];
	if(!rowD) {
		rowD = rowTree[0]
	}
	if(!columnD) {
		columnD = columnTree[0];
	}
	d.x0 = columnD.x0;
	d.x1 = columnD.x1;
	d.y0 = rowD.y0;
	d.y1 = rowD.y1;
	zoom(d, -1);
}

const getVisibilityClass = (d) => {
	visible = true;
	if(d.rowTree && (rowTreeJSON!== JSON.stringify(d.rowTree))){
		visible = false
	} else if ( d.columnTree && (columnTreeJSON!== JSON.stringify(d.columnTree))){
		visible = false;
	}
	if(visible) {
		return "visible_node"
	} else {
		return "hidden_node"
	}
}

const getDepthClass = (d) => {
	return "depth_"+d.depth.toString();
}

const constructTreeJSONs = () => {
	rowTreeIDs = [];
	rowTree.forEach(row => {
		rowTreeIDs.push(row.id);
	})
	columnTreeIDs = [];
	columnTree.forEach(column => {
		columnTreeIDs.push(column.id);
	})
	rowTreeJSON = JSON.stringify(rowTreeIDs);
	columnTreeJSON = JSON.stringify(columnTreeIDs);
}

const updateBreadcrumbs = () => {
	let rowString = "";
	let columnString = "";
	let first = true;
	rowTree.forEach(row => {
		if(!first) {
			rowString = rowString + " > "+row.title;
		} else {
			first = false;
		}
	});
	first = true;
	columnTree.forEach(column => {
		if(!first) {
			columnString = columnString + " > "+column.title;
		} else {
			first = false;
		}
	});
	rowBreadcrumb.html(rowString);
	columnBreadcrumb.html(columnString);
}

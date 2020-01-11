const rowNodeProducer = (data, y0, y1, width, tree) => {
	let divisionSize = (y1-y0)/data.length;
	let output = [];
	let base = y0;
	data.forEach( row => {
		output.push({
			id: row.id,
			y0: base,
			y1: base + divisionSize,
			x0: 0,
			x1: width,
			title: row.title,
			children: row.children ? row.children.length : false,
			rowTree: tree,
			depth: tree.length
		})
		if(row.children){
			output = output.concat(rowNodeProducer(
				row.children,
				base, base+divisionSize,
				width,
				tree.concat([row.id])
			))
		}
		base += divisionSize;
	})
	return output;
}

const columnNodeProducer = (data, x0, x1, height, tree) => {
	let divisionSize = (x1-x0)/data.length;
	let output = [];
	let base = x0;
	data.forEach( column => {
		output.push({
			id: column.id,
			x0: base,
			x1: base + divisionSize,
			y0: 0,
			y1: height,
			title: column.title,
			children: column.children ? column.children.length : false,
			columnTree: tree,
			depth: tree.length
		})
		if(column.children){
			output = output.concat(columnNodeProducer(
				column.children,
				base,
				base+divisionSize,
				height,
				tree.concat([column.id])
			))
		}
		base += divisionSize;
	})
	return output;
}


const produceChildrenList = (data) => {
	let output = [];
	if(data) {
		data.forEach(datum => {
			if(datum.children) {
				output = output.concat(produceChildrenList(datum.children));
			} else {
				output.push(datum.id);
			}
		})
	}
	return output;
}

const centralNodeProducer = (links, row_data, column_data, rowNodes, columnNodes) => {
	let outputNodes = [];
	let workingRowTree = {};
	let workingColumnTree = {};
	let first = true;
	let columnIDs, rowIDs;
	let count;
	rowNodes.forEach( row_node => {
		columnNodes.forEach( column_node => {
			// Init
			workingColumnTree = column_data;
			workingRowTree = row_data;
			columnIDs = [];
			rowIDs = [];
			// Compute columnIDs;
			shiftedColumnTree = column_node.columnTree.slice(0);
			shiftedColumnTree.shift();
			shiftedColumnTree.forEach( elem => {
				workingColumnTree = workingColumnTree.find( row => row.id === elem );
				workingColumnTree = workingColumnTree.children;
			})
			workingColumnTree = workingColumnTree.find( elem => elem.id == column_node.id);
			if(workingColumnTree && workingColumnTree.children) {
				columnIDs = produceChildrenList(workingColumnTree.children);
			} else {
				columnIDs = [column_node.id];
			}
			// Compute rowIDs
			shiftedRowTree = row_node.rowTree.slice(0);
			shiftedRowTree.shift();
			shiftedRowTree.forEach( elem => {
				workingRowTree = workingRowTree.find( row => row.id === elem );
				workingRowTree = workingRowTree.children;
			})
			workingRowTree = workingRowTree.find( elem => elem.id == row_node.id);
			if(workingRowTree && workingRowTree.children) {
				rowIDs = produceChildrenList(workingRowTree.children);
			} else {
				rowIDs = [row_node.id];
			}
			// Aggregate links 
			applicabilityCount = 0;
			count = 0;
			control_rating = 0;
			KCI = 0;
			links.forEach(link => {
				if(rowIDs.includes(link[0]) && columnIDs.includes(link[1]) ){
					count++;
					control_rating += link[2].control_rating;
					KCI += link[2].KCI;
					if(link[2].applicability) {
						applicabilityCount++;
					}
				}
			})
			// Average relavent values
			control_rating = control_rating / count;
			KCI = KCI / count;
			values = {
				applicability: applicabilityCount,
				control_rating: control_rating,
				KCI: KCI
			}
			outputNodes.push({
				x0: column_node.x0,
				x1: column_node.x1,
				y0: row_node.y0,
				y1: row_node.y1,
				row: row_node,
				column: column_node,
				rowTree: row_node.rowTree,
				columnTree: column_node.columnTree,
				depth: column_node.columnTree.length + row_node.rowTree.length,
				values: values,
				children: row_node.children || column_node.children
			})
		})
	})
	return outputNodes;
}

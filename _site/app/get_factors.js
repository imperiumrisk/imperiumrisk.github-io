const getWhatIfFactors = (get_controls) => {
	returnList = [];
	irfList.forEach( row => {
		returnList.push({label: row.label, val : parseFloat(row.current)});
	});
	if(get_controls){
		controlList.forEach( row => {
			returnList.push({label: row.label, val: parseFloat(row.current)});
		});
	} else {
		controlList.forEach( row => {
			returnList.push({label: row.label, val: 0});
		});
	}
	return returnList;
}

const getCurrentFactors = (get_controls) => {
	returnList = [];
	irfList.forEach( row => {
		returnList.push({label: row.label, val : parseFloat(row.init)});
	});
	if(get_controls){
		controlList.forEach( row => {
			returnList.push({label: row.label, val: parseFloat(row.init)});
		});
	} else {
		controlList.forEach( row => {
			returnList.push({label: row.label, val: 0});
		});
	}
	return returnList;
}

const getLastMonthFactors = (get_controls) => {
	returnList = [];
	irfList.forEach( row => {
		returnList.push({label: row.label, val : parseFloat(row.last_month)});
	});
	if(get_controls){
		controlList.forEach( row => {
			returnList.push({label: row.label, val: parseFloat(row.last_month)});
		});
	} else {
		controlList.forEach( row => {
			returnList.push({label: row.label, val: 0});
		});
	}
	return returnList;
}

const getLastYearFactors = (get_controls) => {
	returnList = [];
	irfList.forEach( row => {
		returnList.push({label: row.label, val : parseFloat(row.last_year)});
	});
	if(get_controls){
		controlList.forEach( row => {
			returnList.push({label: row.label, val: parseFloat(row.last_year)});
		});
	} else {
		controlList.forEach( row => {
			returnList.push({label: row.label, val: 0});
		});
	}
	return returnList;
}

const getPredictedFactors = (get_controls) => {
	returnList = [];
	irfList.forEach( row => {
		returnList.push({label: row.label, val : parseFloat(row.predicted)});
	});
	if(get_controls){
		controlList.forEach( row => {
			returnList.push({label: row.label, val: parseFloat(row.predicted)});
		});
	} else {
		controlList.forEach( row => {
			returnList.push({label: row.label, val: 0});
		});
	}
	return returnList;
}


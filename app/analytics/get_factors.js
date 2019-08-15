const getWhatIfFactors = (get_controls) => {
	returnList = [];
	getIRFData(SELECTED_RISK,SELECTED_BU).forEach( row => {
		returnList.push({label: row.label, val : parseFloat(row.current), is_control: false});
	});
	if(get_controls){
		getControlData(SELECTED_RISK,SELECTED_BU).forEach( row => {
			returnList.push({label: row.label, val: parseFloat(row.current), is_control: true});
		});
	} else {
		getControlData(SELECTED_RISK,SELECTED_BU).forEach( row => {
			returnList.push({label: row.label, val: 0, is_control: true});
		});
	}
	return returnList;
}

const getCurrentFactors = (get_controls) => {
	returnList = [];
	getIRFData(SELECTED_RISK,SELECTED_BU).forEach( row => {
		returnList.push({label: row.label, val : parseFloat(row.init), is_control: false});
	});
	if(get_controls){
		getControlData(SELECTED_RISK,SELECTED_BU).forEach( row => {
			returnList.push({label: row.label, val: parseFloat(row.init), is_control: true});
		});
	} else {
		getControlData(SELECTED_RISK,SELECTED_BU).forEach( row => {
			returnList.push({label: row.label, val: 0, is_control: true});
		});
	}
	return returnList;
}

const getLastMonthFactors = (get_controls) => {
	returnList = [];
	getIRFData(SELECTED_RISK,SELECTED_BU).forEach( row => {
		returnList.push({label: row.label, val : parseFloat(row.last_month), is_control: false});
	});
	if(get_controls){
		getControlData(SELECTED_RISK,SELECTED_BU).forEach( row => {
			returnList.push({label: row.label, val: parseFloat(row.last_month), is_control: true});
		});
	} else {
		getControlData(SELECTED_RISK,SELECTED_BU).forEach( row => {
			returnList.push({label: row.label, val: 0, is_control: true});
		});
	}
	return returnList;
}

const getLastYearFactors = (get_controls) => {
	returnList = [];
	getIRFData(SELECTED_RISK,SELECTED_BU).forEach( row => {
		returnList.push({label: row.label, val : parseFloat(row.last_year), is_control: false});
	});
	if(get_controls){
		getControlData(SELECTED_RISK,SELECTED_BU).forEach( row => {
			returnList.push({label: row.label, val: parseFloat(row.last_year), is_control: true});
		});
	} else {
		getControlData(SELECTED_RISK,SELECTED_BU).forEach( row => {
			returnList.push({label: row.label, val: 0, is_control: true});
		});
	}
	return returnList;
}

const getPredictedFactors = (get_controls) => {
	returnList = [];
	getIRFData(SELECTED_RISK,SELECTED_BU).forEach( row => {
		returnList.push({label: row.label, val : parseFloat(row.predicted), is_control: false});
	});
	if(get_controls){
		getControlData(SELECTED_RISK,SELECTED_BU).forEach( row => {
			returnList.push({label: row.label, val: parseFloat(row.predicted), is_control: true});
		});
	} else {
		getControlData(SELECTED_RISK,SELECTED_BU).forEach( row => {
			returnList.push({label: row.label, val: 0, is_control: true});
		});
	}
	return returnList;
}

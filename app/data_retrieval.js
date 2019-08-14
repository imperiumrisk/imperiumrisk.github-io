const getIRFData = (risk, bu) => {
	return irfList;
}

const getControlData = (risk, bu) => {
	return controlList;
}

const getWeightingData = (risk, bu) => {
	return weightings;
}

const getRiskList = () => {
	return riskList;
}

const getBuList = () => {
	return buList;
}

const setIrfValue = (label, value) => {
	irfList.forEach( row => {
		if(row.label == label) {
			row.current = value;
		}
	});
}

const setControlValue = (label, value) => {
	controlList.forEach( row => {
		if(row.label == label) {
			row.current = value;
		}
	});
}

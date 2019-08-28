const getIRFData = (risk, bu) => {
	return irfList.find(row=>row.risk_id==risk).data;
}

const getControlData = (risk, bu) => {
	return controlList.find(row=>row.risk_id==risk).data;
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

const setIrfValue = (risk, bu, label, value) => {
	irfList.find(row => row.risk_id==risk).data.forEach( row => {
		if(row.label == label) {
			row.current = value;
		}
	});
}

const setControlValue = (risk, bu, label, value) => {
	controlList.find(row => row.risk_id==risk).data.forEach( row => {
		if(row.label == label) {
			row.current = value;
		}
	});
}

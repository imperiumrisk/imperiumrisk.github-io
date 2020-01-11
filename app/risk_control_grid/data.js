const getData = () => {
	let payload = {
		rows: [],
		columns: [],
		links: []
	};
	promises = [];
	promises[0] = fetch('/app/risk_control_grid/rowData.json')
		.then( res => res.json() )
	promises[1] = fetch('/app/risk_control_grid/columnData.json')
		.then( res => res.json() )
	promises[2] = fetch('/app/risk_control_grid/linkData.json')
		.then( res => res.json() )

	return Promise.all(promises)
		.then(data => {
			payload.rows = data[0];
			payload.columns = data[1];
			payload.links = data[2];
			return payload;
		})

}

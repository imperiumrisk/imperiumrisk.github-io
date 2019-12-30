const rowData = [
	{
		id: 0,
		title: "Fraud Risk",
		children: [
			{id: 0, title: "Risk 1", children: [
				{id: 0, title: "Control 1"},
				{id: 1, title: "Control 2"}
			]},
			{id: 1, title: "Risk 2", children: [
				{id: 2, title: "Control 3"},
				{id: 3, title: "Control 4"}
			]},
			{id: 2, title: "Risk 3", children: [
				{id: 4, title: "Control 5"},
				{id: 5, title: "Control 6"}
			]},
		]
	},
	{
		id: 1,
		title: "Cyber Risk",
		children: [
			{id: 3, title: "Risk 4", children: [
				{id: 6, title: "Control 7"},
				{id: 7, title: "Control 8"}
			]},
			{id: 4, title: "Risk 5", children: [
				{id: 8, title: "Control 9"},
				{id: 9, title: "Control 10"}
			]},
			{id: 5, title: "Risk 6", children: [
				{id: 10, title: "Control 11"},
				{id: 11, title: "Control 12"}
			]},
		]
	},
	{
		id: 2,
		title: "Client Risk",
		children: [
			{id: 6, title: "Risk 7", children: [
				{id: 12, title: "Control 13"},
				{id: 13, title: "Control 14"}
			]},
			{id: 7, title: "Risk 8", children: [
				{id: 14, title: "Control 15"},
				{id: 15, title: "Control 16"}
			]},
			{id: 8, title: "Risk 9", children: [
				{id: 16, title: "Control 17"},
				{id: 17, title: "Control 18"}
			]},
		]
	}
];

const columnData = [
	{
		id: 0,
		title: "Division 1",
		children: [
			{id: 0, title: "BU 1"},
			{id: 1, title: "BU 2"},
			{id: 2, title: "BU 3"},
		]
	},
	{
		id: 1,
		title: "Division 2",
		children: [
			{id: 3, title: "BU 4"},
			{id: 4, title: "BU 5"},
			{id: 5, title: "BU 6"},
		]
	},
	{
		id: 2,
		title: "Division 3",
		children: [
			{id: 6, title: "BU 7"},
			{id: 7, title: "BU 8"},
		]
	}
];

const linkData = [
	[0, 0], [0, 1], [0, 2],[0,7],
	[1, 1],
	[2, 1], [2, 2],
	[3, 1], [3, 2], [3, 6], [3, 7], [3, 8],
	[4, 1], [4, 2], [4, 6], [4, 7], [4, 8],
	[5, 1], [5, 2], [5, 6], [5, 7], [5, 8],
	[6, 5], [6, 6], [6, 7], [6, 8],
	[7, 5], [7, 6], [7, 7], [7, 8],
	[8, 5], [8, 6], [8, 7],
	[9, 3], [9, 7], [8, 2],
	[10, 0], [10, 4], [10, 5], [10, 7],
	[11, 1], [11, 2], [11, 6],
	[14, 4], [14, 5], [14, 7],
	[15, 4], [15, 5], [15, 7],
	[16, 0], [16, 1], [16, 2],
	[17, 3], [17, 4], [17, 5]

];

const getData = () => {
	let payload = {
		rows: rowData,
		columns: columnData,
		links: linkData
	};
	return new Promise((resolve, reject) => {
		resolve(payload);
	});
}

//getData().then( payload => console.log(payload));

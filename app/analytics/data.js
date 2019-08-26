const riskList = [
	{id: 1, title: "Risk 1"},
	{id: 2, title: "Risk 2"},
	{id: 3, title: "Risk 3"},
	{id: 4, title: "Risk 4"},
	{id: 5, title: "Risk 5"}
]

const buList = [
	{id: 1, title: "Business Unit 1"},
	{id: 2, title: "Business Unit 2"},
	{id: 3, title: "Business Unit 3"},
	{id: 4, title: "Business Unit 4"},
	{id: 5, title: "Business Unit 5"}
]

const irfList = [
	{label: "Trade Count", slider_id: "tradeCountSlider", output_id: "tradeCountOutput", min: 750000, max: 2000000, step: 1000, init: 1200000, current: 1200000, last_month: 1000000, last_year: 750000, predicted: 1800000},
	{label: "Trade Notional", slider_id: "tradeNotionalSlider", output_id: "tradeNotionalOutput", min: 0.1, max: 1, step: 0.1, init: 0.6, current: 0.6, last_month: 0.6, last_year: 0.6, predicted: 0.5},
	{label: "IT Complexity", slider_id: "itComplexitySlider", output_id: "itComplexityOutput", min: 0.1, max: 1, step: 0.1, init: 0.5, current: 0.5, last_month: 0.4, last_year:0.4, predicted: 0.8},
	{label: "F2B Complexity", slider_id: "f2bComplexitySlider", output_id: "f2bComplexityOutput", min: 0.1, max: 1, step: 0.1, init: 0.4, current: 0.4, last_month: 0.2, last_year: 0.2, predicted: 0.8},
	{label: "Product Complexity", slider_id: "productComplexitySlider", output_id: "productComplexityOutput", min: 0.1, max: 1, step: 0.1, init: 0.3, current: 0.3, last_month: 0.5, last_year: 0.5, predicted: 1},
	{label: "Regional Complexity", slider_id: "regionalComplexitySlider", output_id: "regionalComplexityOutput", min: 0.1, max: 1, step: 0.1, init: 0.5, current: 0.5, last_month: 0.5, last_year: 0.5, predicted: 0.5}
];

const controlList = [
	{label: "MiFiD Training", checkbox_id: "fixMifidTraining", current: 0.6, init: 0.6, max: 1, last_month: 0.6, last_year: 0, predicted: 0.6},
	{label: "MiFiD Rule Verification", checkbox_id: "fixMifidRuleVerification", current: 0.6 , init: 0.6, max: 1, last_month: 0.6, last_year: 0.6, predicted:0.7},
	{label: "External Oversight", checkbox_id: "fixExternalOversight", current: 0, init: 0, max: 1, last_month: 0, last_year: 0, predicted: 1},
	{label: "EOD Monitoring", checkbox_id: "fixEodMonitoring", current: 0, init: 0, max: 1, last_month: 0, last_year:1, predicted: 0},
	{label: "Control 5", checkbox_id: "fixControl5", current: 0.4, init: 0.4, max: 1, last_month: 0.3, last_year: 0, predicted: 0.8},
	{label: "Control 6", checkbox_id: "fixControl6", current: 0.2, init: 0.2, max: 1, last_month: 0, last_year: 0, predicted: 0.5},
	{label: "Control 7", checkbox_id: "fixControl7", current: 0.8, init: 0.8, max: 1, last_month: 0.7, last_year: 0.6, predicted: 0.8},
	{label: "Control 8", checkbox_id: "fixControl8", current: 0.1, init: 0.1, max: 1, last_month: 0, last_year: 0, predicted: 0},
	{label: "Control 9", checkbox_id: "fixControl9", current: 0, init: 0, max: 1, last_month: 0, last_year: 0, predicted: 0.1},
	{label: "Control 10", checkbox_id: "fixControl10", current: 0.3, init: 0.3, max: 1, last_month: 0.8, last_year: 0.8, predicted: 0.2}
]

const weightings = {
	severity:[
		{label: "Background Risk", weight: 7.51670372},
		{label: "Trade Count", weight: 0.00000286649389},
		{label: "Trade Notional", weight: 2.17873435},
		{label: "IT Complexity", weight: 2.38515466},
		{label: "F2B Complexity", weight: 3.56041172},
		{label: "Product Complexity", weight: 2.27354505},
		{label: "Regional Complexity", weight: 0},
		{label: "MiFiD Training", weight: -0.66462414},
		{label: "MiFiD Rule Verification", weight: -1.43725215},
		{label: "External Oversight", weight: -0.28821563},
		{label: "EOD Monitoring", weight: -0.01972361},
		{label: "Control 5", weight: 0},
		{label: "Control 6", weight: -0.21025528 },
		{label: "Control 7", weight: -0.13522333},
		{label: "Control 8", weight: 0},
		{label: "Control 9", weight: -0.34237199},
		{label: "Control 10", weight: 0}
	],
	poisson:[
		{label: "Background Risk", weight: -0.093366761},
		{label: "Trade Count", weight: 0.000002367030616},
		{label: "Trade Notional", weight: 0.909604716},
		{label: "IT Complexity", weight: 0.026013415},
		{label: "F2B Complexity", weight: 2.416220199},
		{label: "Product Complexity", weight: 0},
		{label: "Regional Complexity", weight: 0},
		{label: "MiFiD Training", weight: -0.6},
		{label: "MiFiD Rule Verification", weight: -0.8},
		{label: "External Oversight", weight: -0.2},
		{label: "EOD Monitoring", weight: -0.1},
		{label: "Control 5", weight: 0},
		{label: "Control 6", weight: -0.030591819},
		{label: "Control 7", weight: -0.05},
		{label: "Control 8", weight: 0},
		{label: "Control 9", weight: -0.2},
		{label: "Control 10", weight: 0}
	]
}

const grid_green = "grid_green";
const grid_orange = "grid_amber";
const grid_red = "grid_red";
const gridColours = [grid_green, grid_orange, grid_red, grid_red, grid_red,
			grid_green, grid_orange, grid_red, grid_red, grid_red,
			grid_green, grid_green, grid_orange, grid_red, grid_red, 
			grid_green, grid_green, grid_green, grid_orange, grid_red,
			grid_green, grid_green, grid_green, grid_green, grid_orange];

const periodFormIDs = ["current_checkbox",
				"last_month_checkbox",
				"last_year_checkbox",
				"predicted_checkbox",
				"whatif_checkbox"];

const squareIDList = ["whatif_rr_square", "whatif_ir_square",
					"current_rr_square", "current_ir_square",
					"last_month_rr_square", "last_month_ir_square",
					"last_year_rr_square", "last_year_ir_square",
					"predicted_rr_square", "predicted_ir_square"];


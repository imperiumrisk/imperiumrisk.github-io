const riskList = [
	{id: 1, title: "Financial Crime"},
	{id: 2, title: "Reporting Failure"},
	{id: 3, title: "Cyber Risk"},
]

const buList = [
	{id: 1, title: "Business Unit 1"},
	{id: 2, title: "Business Unit 2"},
	{id: 3, title: "Business Unit 3"},
	{id: 4, title: "Business Unit 4"},
	{id: 5, title: "Business Unit 5"}
]

const irfList = [
	{
		risk_id: 1,
		data: [
			{label: "Regional Complexity", slider_id: "regionalComplexitySlider", output_id: "regionalComplexityOut", min:0.1,  max:1, step: 0.1, init: 0.9, current: 0.9, last_month: 0.4, last_year: 0.4, predicted: 0.7},
			{label: "Clients", slider_id: "clientsSlider", output_id: "clientsOut", min: 0.1, max: 1, step: 0.1, init: 0.6, current: 0.6, last_month: 0.6, last_year: 0.6, predicted: 0.5},
			{label: "Product Complexity (1)", slider_id: "prodComp1Slider", output_id: "prodComp1Out", min: 0.1, max: 1, step: 0.1, init: 0.5, current: 0.5, last_month: 0.4, last_year:0.4, predicted: 0.2},
			{label: "Revenes with Watch List Countries", slider_id: "revenuesSlider", output_id: "revenuesOut", min: 0.1, max: 1, step: 0.1, init: 0.4, current: 0.4, last_month: 0.2, last_year: 0.2, predicted: 0.5},
			{label: "Benchmarks Traded", slider_id: "benchmarksSlider", output_id: "benchmarksOut", min: 0.1, max: 1, step: 0.1, init: 0.3, current: 0.3, last_month: 0.5, last_year: 0.5, predicted: 1},
			{label: "Trade Notional", slider_id: "tradeNotionalSlider", output_id: "tradeNotionalOut", min: 0.1, max: 1, step: 0.1, init: 0.5, current: 0.5, last_month: 0.5, last_year: 0.5, predicted: 0.5},
			{label: "Employees (1)", slider_id: "employees1Slider", output_id: "employees1Out", min: 0.1, max: 1, step: 0.1, init: 0.3, current: 0.3, last_month: 0.5, last_year: 0.5, predicted: 1},
			{label: "Product Complexity (2)", slider_id: "prodComp2Slider", output_id: "prodComp2Out", min: 0.1, max: 1, step: 0.1, init: 0.3, current: 0.3, last_month: 0.5, last_year: 0.5, predicted: 0.8},
			{label: "Emails from External Parties", slider_id: "emailsSlider", output_id: "emailsOut", min: 0.1, max: 1, step: 0.1, init: 0.3, current: 0.3, last_month: 0.5, last_year: 0.5, predicted: 0.8},
			{label: "Client Facing Applications", slider_id: "clientFacingSlider", output_id: "clientFacingOut", min: 0.1, max: 1, step: 0.1, init: 0.3, current: 0.3, last_month: 0.5, last_year: 0.5, predicted: 0.2},
			{label: "Employees (2)", slider_id: "employees2Slider", output_id: "employees2Out", min: 0.1, max: 1, step: 0.1, init: 0.3, current: 0.3, last_month: 0.5, last_year: 0.5, predicted: 1}
		]
	},
	{
		risk_id: 2,
		data: [
			{label: "Trade Count", slider_id: "tradeCountSlider", output_id: "tradeCountOutput", min: 750000, max: 2000000, step: 1000, init: 1200000, current: 1200000, last_month: 1000000, last_year: 750000, predicted: 1800000},
			{label: "Trade Notional", slider_id: "tradeNotionalSlider", output_id: "tradeNotionalOutput", min: 0.1, max: 1, step: 0.1, init: 0.6, current: 0.6, last_month: 0.6, last_year: 0.6, predicted: 0.5},
			{label: "IT Complexity", slider_id: "itComplexitySlider", output_id: "itComplexityOutput", min: 0.1, max: 1, step: 0.1, init: 0.5, current: 0.5, last_month: 0.4, last_year:0.4, predicted: 0.8},
			{label: "F2B Complexity", slider_id: "f2bComplexitySlider", output_id: "f2bComplexityOutput", min: 0.1, max: 1, step: 0.1, init: 0.4, current: 0.4, last_month: 0.2, last_year: 0.2, predicted: 0.8},
			{label: "Product Complexity", slider_id: "productComplexitySlider", output_id: "productComplexityOutput", min: 0.1, max: 1, step: 0.1, init: 0.3, current: 0.3, last_month: 0.5, last_year: 0.5, predicted: 1},
			{label: "Regional Complexity", slider_id: "regionalComplexitySlider", output_id: "regionalComplexityOutput", min: 0.1, max: 1, step: 0.1, init: 0.5, current: 0.5, last_month: 0.5, last_year: 0.5, predicted: 0.5}
		]
	},
	{
		risk_id: 3,
		data: [
			{label: "Application Complexity", slider_id: "appCompSlider", output_id: "appCompOut", min:0.1,  max:1, step: 0.1, init: 0.4, current: 0.4, last_month: 0.4, last_year: 0.4, predicted: 0.4},
			{label: "Employees", slider_id: "employees1Slider", output_id: "employees1Out", min: 0.1, max: 1, step: 0.1, init: 0.6, current: 0.6, last_month: 0.6, last_year: 0.6, predicted: 0.5},
			{label: "Client Facing Applications", slider_id: "clientFacingAppSlider", output_id: "clientFacingAppOut", min: 0.1, max: 1, step: 0.1, init: 0.5, current: 0.5, last_month: 0.4, last_year:0.4, predicted: 0.8},
			{label: "Production Changes", slider_id: "productionChangesSlider", output_id: "productionChangesOut", min: 0.1, max: 1, step: 0.1, init: 0.4, current: 0.4, last_month: 0.2, last_year: 0.2, predicted: 0.8},
			{label: "Emails from External Parties", slider_id: "externalEmailsSlider", output_id: "externalEmailsOut", min: 0.1, max: 1, step: 0.1, init: 0.3, current: 0.3, last_month: 0.5, last_year: 0.5, predicted: 1},
			{label: "Employees", slider_id: "emloyees2Slider", output_id: "employees2Out", min: 0.1, max: 1, step: 0.1, init: 0.5, current: 0.5, last_month: 0.5, last_year: 0.5, predicted: 0.5},
			{label: "Database Complexity", slider_id: "dbCompSlider", output_id: "dbCompOut", min: 0.1, max: 1, step: 0.1, init: 0.5, current: 0.5, last_month: 0.5, last_year: 0.5, predicted: 0.5},
			{label: "Payments", slider_id: "paymentsSlider", output_id: "paymentsOut", min: 0.1, max: 1, step: 0.1, init: 0.5, current: 0.5, last_month: 0.5, last_year: 0.5, predicted: 0.5},
			{label: "Operations Team", slider_id: "opTeamSlider", output_id: "opTeamOut", min: 0.1, max: 1, step: 0.1, init: 0.5, current: 0.5, last_month: 0.5, last_year: 0.5, predicted: 0.5},
			{label: "Regional Complexity", slider_id: "regComplexSilder", output_id: "regComplexOut", min: 0.1, max: 1, step: 0.1, init: 0.5, current: 0.5, last_month: 0.5, last_year: 0.5, predicted: 0.5},
			{label: "Payment System Complexity", slider_id: "paySysCompSlider", output_id: "paySysCompOut", min: 0.1, max: 1, step: 0.1, init: 0.5, current: 0.5, last_month: 0.5, last_year: 0.5, predicted: 0.5}
		]
	}
]

const controlList = [
	{
		risk_id: 1,
		data: [
			{
				label: "AML Training",
				checkbox_id: "fixAMLTraining",
				current: 0.6,
				init: 0.6,
				max: 1,
				last_month: 0.6,
				last_year: 0,
				predicted: 0.6,
				scenario: "Client Money Laundering",
				type:"indirect_preventative"
			},
			{
				label: "Segreg. of Duties Monitoring",
				checkbox_id: "fixSegDutiesMonitor",
				current: 0.6 ,
				init: 0.6,
				max: 1,
				last_month: 0.6,
				last_year: 0.6,
				predicted:0.7,
				scenario: "Client Money Laundering",
				type:"indirect_preventative"
			},
			{
				label: "AML Governance",
				checkbox_id: "fixAMLGov",
				current: 0,
				init: 0,
				max: 1,
				last_month: 0,
				last_year: 0,
				predicted: 1,
				scenario: "Client Money Laundering",
				type:"indirect_preventative"
			},
			{
				label: "KYC Controls", checkbox_id: "fixKYCControl",
				current: 0.2,
				init: 0.2,
				max: 1,
				last_month: 0,
				last_year: 0,
				predicted: 0.5,
				scenario: "Client Money Laundering",
				type:"direct_preventative"
			},
			{
				label: "Customer DD Practice",
				checkbox_id: "fixCustomerDD",
				current: 0.8,
				init: 0.8,
				max: 1,
				last_month: 0.7,
				last_year: 0.6,
				predicted: 0.8,
				scenario: "Client Money Laundering",
				type:"direct_preventative"
			},
			{
				label: "SAR Monitoring",
				checkbox_id: "fixSARMonitor",
				current: 0.1,
				init: 0.1,
				max: 1,
				last_month: 0,
				last_year: 0,
				predicted: 0,
				scenario: "Client Money Laundering",
				type:"direct_preventative"
			},
			{
				label: "Suspicious Trade Identification",
				checkbox_id: "fixSuspiciousTrade",
				current: 0,
				init: 0,
				max: 1,
				last_month: 0,
				last_year: 0,
				predicted: 0.1,
				scenario: "Client Money Laundering",
				type:"detective"
			},
			{label: "WatchList Monitoring",
				checkbox_id: "fixWatchlistMonitor",
				current: 0.3,
				init: 0.3,
				max: 1,
				last_month: 0.8,
				last_year: 0.8,
				predicted: 0.2,
				scenario: "Client Money Laundering",
				type:"detective"
			},
			{label: "Client Review",
				checkbox_id: "fixClientReview",
				current: 0.3,
				init: 0.3,
				max: 1,
				last_month: 0.8,
				last_year: 0.8,
				predicted: 0.2,
				scenario: "Client Money Laundering",
				type:"detective"
			},
			{label: "Client Records Controls",
				checkbox_id: "fixClientRecords",
				current: 0.3,
				init: 0.3,
				max: 1,
				last_month: 0.8,
				last_year: 0.8,
				predicted: 0.2,
				scenario: "Client Money Laundering",
				type:"corrective"
			},
			{
				label: "Benchmark Training",
				checkbox_id: "fixBenchTraining",
				current: 0.6,
				init: 0.6,
				max: 1,
				last_month: 0.6,
				last_year: 0,
				predicted: 0.6,
				scenario: "Benchmark Rigging Fraud",
				type:"indirect_preventative"
			},
			{
				label: "Benchmark Governance",
				checkbox_id: "fixBenchGov",
				current: 0.6 ,
				init: 0.6,
				max: 1,
				last_month: 0.6,
				last_year: 0.6,
				predicted:0.7,
				scenario: "Benchmark Rigging Fraud",
				type:"indirect_preventative"
			},
			{
				label: "Benchmark Segregation Of Duties",
				checkbox_id: "fixBenchSeg",
				current: 0,
				init: 0,
				max: 1,
				last_month: 0,
				last_year: 0,
				predicted: 1,
				scenario: "Benchmark Rigging Fraud",
				type:"indirect_preventative"
			},
			{
				label: "Trade Authorisation",
				checkbox_id: "fixTradeAuth",
				current: 0.8,
				init: 0.8,
				max: 1,
				last_month: 0.7,
				last_year: 0.6,
				predicted: 0.8,
				scenario: "Benchmark Rigging Fraud",
				type:"direct_preventative"
			},
			{
				label: "Benchmark Submission Review",
				checkbox_id: "fixBenchSub",
				current: 0.1,
				init: 0.1,
				max: 1,
				last_month: 0,
				last_year: 0,
				predicted: 0,
				scenario: "Benchmark Rigging Fraud",
				type:"direct_preventative"
			},
			{
				label: "Book Access Controls",
				checkbox_id: "fixBookACCOntrol",
				current: 0,
				init: 0,
				max: 1,
				last_month: 0,
				last_year: 0,
				predicted: 0.1,
				scenario: "Benchmark Rigging Fraud",
				type:"direct_preventative"
			},
			{label: "Independent Trade Reviews",
				checkbox_id: "fixIndepTrade",
				current: 0.3,
				init: 0.3,
				max: 1,
				last_month: 0.8,
				last_year: 0.8,
				predicted: 0.2,
				scenario: "Benchmark Rigging Fraud",
				type:"detective"
			},
			{label: "Chat Monitoring",
				checkbox_id: "fixChatMonitoring",
				current: 0.3,
				init: 0.3,
				max: 1,
				last_month: 0.8,
				last_year: 0.8,
				predicted: 0.2,
				scenario: "Benchmark Rigging Fraud",
				type:"detective"
			},
			{
				label: "Phishing Training",
				checkbox_id: "fixPhisingTraining",
				current: 0.6,
				init: 0.6,
				max: 1,
				last_month: 0.6,
				last_year: 0,
				predicted: 0.6,
				scenario: "Customer Data Leak",
				type:"indirect_preventative"
			},
			{
				label: "Access Control",
				checkbox_id: "fixAcControl",
				current: 0.6 ,
				init: 0.6,
				max: 1,
				last_month: 0.6,
				last_year: 0.6,
				predicted:0.7,
				scenario: "Customer Data Leak",
				type:"indirect_preventative"
			},
			{
				label: "Data Security Policy",
				checkbox_id: "fixDataSecurity",
				current: 0,
				init: 0,
				max: 1,
				last_month: 0,
				last_year: 0,
				predicted: 1,
				scenario: "Customer Data Leak",
				type:"indirect_preventative"
			},
			{
				label: "Database Security",
				checkbox_id: "fixDBSecurity",
				current: 0.8,
				init: 0.8,
				max: 1,
				last_month: 0.7,
				last_year: 0.6,
				predicted: 0.8,
				scenario: "Customer Data Leak",
				type:"direct_preventative"
			},
			{
				label: "Database Access Control",
				checkbox_id: "fixDBAccess",
				current: 0.1,
				init: 0.1,
				max: 1,
				last_month: 0,
				last_year: 0,
				predicted: 0,
				scenario: "Customer Data Leak",
				type:"direct_preventative"
			},
			{
				label: "External Email Warning",
				checkbox_id: "fixExternalEmail",
				current: 0,
				init: 0,
				max: 1,
				last_month: 0,
				last_year: 0,
				predicted: 0.1,
				scenario: "Customer Data Leak",
				type:"direct_preventative"
			},
			{label: "Incident Management",
				checkbox_id: "fixIncidentManagment",
				current: 0.3,
				init: 0.3,
				max: 1,
				last_month: 0.8,
				last_year: 0.8,
				predicted: 0.2,
				scenario: "Customer Data Leak",
				type:"detective"
			},
			{label: "Access review",
				checkbox_id: "fixAccessReview",
				current: 0.3,
				init: 0.3,
				max: 1,
				last_month: 0.8,
				last_year: 0.8,
				predicted: 0.2,
				scenario: "Customer Data Leak",
				type:"detective"
			}
		]
	},
	{
		risk_id: 2,
		data: [
			{label: "MiFiD Training", checkbox_id: "fixMifidTraining", current: 0.6, init: 0.6, max: 1, last_month: 0.6, last_year: 0, predicted: 0.6, type:"indirect_preventative"},
			{label: "MiFiD Rule Verification", checkbox_id: "fixMifidRuleVerification", current: 0.6 , init: 0.6, max: 1, last_month: 0.6, last_year: 0.6, predicted:0.7, type: "direct_preventative"},
			{label: "External Oversight", checkbox_id: "fixExternalOversight", current: 0, init: 0, max: 1, last_month: 0, last_year: 0, predicted: 1, type:"detective"},
			{label: "EOD Monitoring", checkbox_id: "fixEodMonitoring", current: 0, init: 0, max: 1, last_month: 0, last_year:1, predicted: 0, type:"detective"},
			{label: "Control 5", checkbox_id: "fixControl5", current: 0.4, init: 0.4, max: 1, last_month: 0.3, last_year: 0, predicted: 0.8, type:"corrective"},
			{label: "Control 6", checkbox_id: "fixControl6", current: 0.2, init: 0.2, max: 1, last_month: 0, last_year: 0, predicted: 0.5, type:"detective"},
			{label: "Control 7", checkbox_id: "fixControl7", current: 0.8, init: 0.8, max: 1, last_month: 0.7, last_year: 0.6, predicted: 0.8, type:"direct_preventative"},
			{label: "Control 8", checkbox_id: "fixControl8", current: 0.1, init: 0.1, max: 1, last_month: 0, last_year: 0, predicted: 0, type:"indirect_preventative"},
			{label: "Control 9", checkbox_id: "fixControl9", current: 0, init: 0, max: 1, last_month: 0, last_year: 0, predicted: 0.1, type:"detective"},
			{label: "Control 10", checkbox_id: "fixControl10", current: 0.3, init: 0.3, max: 1, last_month: 0.8, last_year: 0.8, predicted: 0.2, type:"corrective"}
		]
	},
	{
		risk_id: 3,
		data: [
			{label: "MiFiD Training", checkbox_id: "fixMifidTraining", current: 0.6, init: 0.6, max: 1, last_month: 0.6, last_year: 0, predicted: 0.6, type:"indirect_preventative"},
			{label: "MiFiD Rule Verification", checkbox_id: "fixMifidRuleVerification", current: 0.6 , init: 0.6, max: 1, last_month: 0.6, last_year: 0.6, predicted:0.7, type: "direct_preventative"},
			{label: "External Oversight", checkbox_id: "fixExternalOversight", current: 0, init: 0, max: 1, last_month: 0, last_year: 0, predicted: 1, type:"detective"},
			{label: "EOD Monitoring", checkbox_id: "fixEodMonitoring", current: 0, init: 0, max: 1, last_month: 0, last_year:1, predicted: 0, type:"detective"},
			{label: "Control 5", checkbox_id: "fixControl5", current: 0.4, init: 0.4, max: 1, last_month: 0.3, last_year: 0, predicted: 0.8, type:"corrective"},
			{label: "Control 6", checkbox_id: "fixControl6", current: 0.2, init: 0.2, max: 1, last_month: 0, last_year: 0, predicted: 0.5, type:"detective"},
			{label: "Control 7", checkbox_id: "fixControl7", current: 0.8, init: 0.8, max: 1, last_month: 0.7, last_year: 0.6, predicted: 0.8, type:"direct_preventative"},
			{label: "Control 8", checkbox_id: "fixControl8", current: 0.1, init: 0.1, max: 1, last_month: 0, last_year: 0, predicted: 0, type:"indirect_preventative"},
			{label: "Control 9", checkbox_id: "fixControl9", current: 0, init: 0, max: 1, last_month: 0, last_year: 0, predicted: 0.1, type:"detective"},
			{label: "Control 10", checkbox_id: "fixControl10", current: 0.3, init: 0.3, max: 1, last_month: 0.8, last_year: 0.8, predicted: 0.2, type:"corrective"}
		]
	}
];

const weightings = [
	{
		risk_id: 1,
		data: {
			severity: [
				{label: "Background Risk", weight: 7.1},
				{label: "Regional Complexity", weight: 3.5},
				{label: "Clients", weight: 1.3},
				{label: "Product Complexity (1)", weight: 1.7},
				{label: "Revenes with Watch List Countries", weight: 1.6},
				{label: "Benchmarks Traded", weight: 1.25},
				{label: "Trade Notional", weight: 1.9},
				{label: "Employees (1)", weight: 2.45},
				{label: "Product Complexity (2)", weight: 0},
				{label: "Emails from External Parties", weight: 3.5},
				{label: "Client Facing Applications", weight: 2.6},
				{label: "Employees (2)", weight: 0},
				{label: "AML Training", weight: -1.4},
				{label: "Segreg. of Duties Monitoring", weight: -0.3},
				{label: "AML Governance", weight: 0},
				{label: "KYC Controls", weight: -0.5},
				{label: "Customer DD Practice", weight: -0.6},
				{label: "SAR Monitoring", weight: -0.4},
				{label: "Suspicious Trade Identification", weight: -0.2},
				{label: "WatchList Monitoring", weight: -0.6},
				{label: "Client Review", weight: 0},
				{label: "Client Records Controls", weight: -0.34},
				{label: "Benchmark Training", weight: 0},
				{label: "Benchmark Governance", weight: 0},
				{label: "Benchmark Segregation Of Duties", weight: -1.4},
				{label: "Trade Authorisation", weight: -0.4},
				{label: "Benchmark Submission Review", weight: 0},
				{label: "Book Access Controls", weight: -1.2},
				{label: "Independent Trade Reviews", weight: 0},
				{label: "Chat Monitoring", weight: -0.5},
				{label: "Phishing Training", weight: -0.3},
				{label: "Access Control", weight: -0.4},
				{label: "Data Security Policy", weight: 0},
				{label: "Database Security", weight: 0},
				{label: "Database Access Control", weight: 0},
				{label: "External Email Warning", weight: 0},
				{label: "Incident Management", weight: 0},
				{label: "Access review", weight: 0}
			],
			poisson: [
				{label: "Background Risk", weight: 1.1},
				{label: "Regional Complexity", weight: 1.5},
				{label: "Clients", weight: 1.3},
				{label: "Product Complexity (1)", weight: 0.7},
				{label: "Revenes with Watch List Countries", weight: 1.6},
				{label: "Benchmarks Traded", weight: 0.25},
				{label: "Trade Notional", weight: 0.9},
				{label: "Employees (1)", weight: 1.45},
				{label: "Product Complexity (2)", weight: 0},
				{label: "Emails from External Parties", weight: 3.5},
				{label: "Client Facing Applications", weight: 2.6},
				{label: "Employees (2)", weight: 0},
				{label: "AML Training", weight: -1.4},
				{label: "Segreg. of Duties Monitoring", weight: 0},
				{label: "AML Governance", weight: 0},
				{label: "KYC Controls", weight: -0.5},
				{label: "Customer DD Practice", weight: -0.6},
				{label: "SAR Monitoring", weight: 0},
				{label: "Suspicious Trade Identification", weight: 0},
				{label: "WatchList Monitoring", weight: -0.6},
				{label: "Client Review", weight: 0},
				{label: "Client Records Controls", weight: -0.34},
				{label: "Benchmark Training", weight: 0},
				{label: "Benchmark Governance", weight: 0},
				{label: "Benchmark Segregation Of Duties", weight: -1.4},
				{label: "Trade Authorisation", weight: 0},
				{label: "Benchmark Submission Review", weight: 0},
				{label: "Book Access Controls", weight: -0.4},
				{label: "Independent Trade Reviews", weight: 0},
				{label: "Chat Monitoring", weight: 0},
				{label: "Phishing Training", weight: 0},
				{label: "Access Control", weight: 0},
				{label: "Data Security Policy", weight: 0},
				{label: "Database Security", weight: 0},
				{label: "Database Access Control", weight: 0},
				{label: "External Email Warning", weight: 0},
				{label: "Incident Management", weight: 0},
				{label: "Access review", weight: 0}
			]
		}
	},
	{
		risk_id: 2,
		data: {
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
	}
];

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


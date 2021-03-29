import MUIDataTable from "mui-datatables";

const columns = [
	{
		name: "Code",
		label: "Code",
		options: {
			filter: false,
			sort: true,
		},
	},
	{
		name: "Service",
		label: "Service",
		options: {
			filter: true,
			sort: true,
		},
	},
	{
		name: "Quantity",
		label: "Quantity",
		options: {
			filter: false,
			sort: false,
		},
	},
	{
		name: "Unit",
		label: "Unit",
		options: {
			filter: false,
			sort: false,
		},
	},
	{
		name: "LabourRate",
		label: "Labour Rate (GHc)",
		options: {
			filter: false,
			sort: false,
		},
	},
	{
		name: "Labourer",
		label: "Labourer",
		options: {
			filter: true,
			sort: true,
		},
	},
	{
		name: "Location",
		label: "Location",
		options: {
			filter: true,
			sort: true,
		},
	},
	{
		name: "DigitalAddress",
		label: "Digital Address",
		options: {
			filter: false,
			sort: false,
		},
	},
	{
		name: "Contact",
		label: "Contact",
		options: {
			filter: false,
			sort: false,
		},
	},
	{
		name: "Date",
		label: "Date",
		options: {
			filter: false,
			sort: false,
		},
	},
];

const data = [
	{
		Code: "LAB001",
		Service: "Masonry works",
		Quantity: "1.00",
		Unit: "Day",
		LabourRate: "100.00",
		Labourer: "Agyekum Jnr.",
		Location: "Accra",
		DigitalAddress: "GT-012-3456",
		Contact: "0244 123 456",
		Date: "29-Mar-2021",
	},
];

const options = {
	filterType: "checkbox",
};

function MuitableLabour() {
	return (
		<MUIDataTable
			title={"Labour Costs (All-In-Rate)"}
			data={data}
			columns={columns}
			options={options}
		/>
	);
}

export default MuitableLabour;

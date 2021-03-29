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
		name: "Equipment",
		label: "Equipment",
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
		name: "HiringRate",
		label: "Hiring Rate (GHc)",
		options: {
			filter: false,
			sort: false,
		},
	},
	{
		name: "Renter",
		label: "Renter",
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
		Code: "EQP001",
		Equipment: "Plate Compactor",
		Quantity: "1.00",
		Unit: "Day",
		HiringRate: "100.00",
		Renter: "ABC Rentals Ltd",
		Location: "Accra",
		DigitalAddress: "GT-012-3456",
		Contact: "+ 233 303 100 200",
		Date: "29-Mar-2021",
	},
];

const options = {
	filterType: "checkbox",
};

function MuitableEquipment() {
	return (
		<MUIDataTable
			title={"Equipment Rental list"}
			data={data}
			columns={columns}
			options={options}
		/>
	);
}

export default MuitableEquipment;

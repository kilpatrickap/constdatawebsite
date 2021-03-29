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
		name: "Materials",
		label: "Materials",
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
		name: "BasicPrice",
		label: "Basic Price (GHc)",
		options: {
			filter: false,
			sort: false,
		},
	},
	{
		name: "Supplier",
		label: "Supplier",
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
		Code: "MAT001",
		Materials: "Ghacem Super Strong 42.5R cement (50kg/bag)",
		Quantity: "1.00",
		Unit: "bag",
		BasicPrice: "40.59",
		Supplier: "Ghacem Ltd",
		Location: "Tema",
		DigitalAddress: "GT-026-6671",
		Contact: "+ 233 303 204 225/6",
		Date: "29-Mar-2021",
	},
	{
		Code: "MAT002",
		Materials: "Ghacem Super Strong 32.5R cement (50kg/bag)",
		Quantity: "1.00",
		Unit: "bag",
		BasicPrice: "40.24",
		Supplier: "Ghacem Ltd",
		Location: "Tema",
		DigitalAddress: "GT-026-6671",
		Contact: "+ 233 303 204 225/6",
		Date: "29-Mar-2021",
	},
	{
		Code: "MAT003",
		Materials: "Ghacem Extra 42.5R cement (50kg/bag)",
		Quantity: "1.00",
		Unit: "bag",
		BasicPrice: "41.54",
		Supplier: "Ghacem Ltd",
		Location: "Tema",
		DigitalAddress: "GT-026-6671",
		Contact: "+ 233 303 204 225/6",
		Date: "29-Mar-2021",
	},
	{
		Code: "MAT004",
		Materials: "Ghacem Super Strong 42.5R (Bulk/tonne)",
		Quantity: "1.00",
		Unit: "tonne",
		BasicPrice: "832.49",
		Supplier: "Ghacem Ltd",
		Location: "Tema",
		DigitalAddress: "GT-026-6671",
		Contact: "+ 233 303 204 225/6",
		Date: "29-Mar-2021",
	},
	{
		Code: "MAT005",
		Materials: "Ghacem Super Rapid 32.5R (Bulk/tonne)",
		Quantity: "1.00",
		Unit: "tonne",
		BasicPrice: "825.40",
		Supplier: "Ghacem Ltd",
		Location: "Tema",
		DigitalAddress: "GT-026-6671",
		Contact: "+ 233 303 204 225/6",
		Date: "29-Mar-2021",
	},
	{
		Code: "MAT006",
		Materials: "Ghacem Super Extra 42.5R (Bulk/tonne)",
		Quantity: "1.00",
		Unit: "tonne",
		BasicPrice: "869.60",
		Supplier: "Ghacem Ltd",
		Location: "Accra",
		DigitalAddress: "GT-026-6671",
		Contact: "+ 233 303 204 225/6",
		Date: "29-Mar-2021",
	},
	{
		Code: "MAT007",
		Materials: "Ready-Mix Concrete (C15)",
		Quantity: "1.00",
		Unit: "m3",
		BasicPrice: "500.85",
		Supplier: "Sarcon Ltd",
		Location: "Accra",
		DigitalAddress: "GA-282-6988",
		Contact: "+ 233 302 815 671",
		Date: "29-Mar-2021",
	},
	{
		Code: "MAT008",
		Materials: "Ready-Mix Concrete (C20)",
		Quantity: "1.00",
		Unit: "m3",
		BasicPrice: "610.17",
		Supplier: "Sarcon Ltd",
		Location: "Accra",
		DigitalAddress: "GA-282-6988",
		Contact: "+ 233 302 815 671",
		Date: "29-Mar-2021",
	},
	{
		Code: "MAT009",
		Materials: "Ready-Mix Concrete (C25)",
		Quantity: "1.00",
		Unit: "m3",
		BasicPrice: "676.86",
		Supplier: "Sarcon Ltd",
		Location: "Accra",
		DigitalAddress: "GA-282-6988",
		Contact: "+ 233 302 815 671",
		Date: "29-Mar-2021",
	},
	{
		Code: "MAT0010",
		Materials: "Ready-Mix Concrete (C30)",
		Quantity: "1.00",
		Unit: "m3",
		BasicPrice: "717.02",
		Supplier: "Sarcon Ltd",
		Location: "Accra",
		DigitalAddress: "GA-282-6988",
		Contact: "+ 233 302 815 671",
		Date: "29-Mar-2021",
	},
	{
		Code: "MAT0011",
		Materials: "Ready-Mix Concrete (C35)",
		Quantity: "1.00",
		Unit: "m3",
		BasicPrice: "739.47",
		Supplier: "Sarcon Ltd",
		Location: "Accra",
		DigitalAddress: "GA-282-6988",
		Contact: "+ 233 302 815 671",
		Date: "29-Mar-2021",
	},
	{
		Code: "MAT0012",
		Materials: "Ready-Mix Concrete (C40)",
		Quantity: "1.00",
		Unit: "m3",
		BasicPrice: "759.55",
		Supplier: "Sarcon Ltd",
		Location: "Accra",
		DigitalAddress: "GA-282-6988",
		Contact: "+ 233 302 815 671",
		Date: "29-Mar-2021",
	},
	{
		Code: "MAT0013",
		Materials: "Ready-Mix Concrete (C45)",
		Quantity: "1.00",
		Unit: "m3",
		BasicPrice: "811.52",
		Supplier: "Sarcon Ltd",
		Location: "Accra",
		DigitalAddress: "GA-282-6988",
		Contact: "+ 233 302 815 671",
		Date: "29-Mar-2021",
	},
];

const options = {
	filterType: "checkbox",
};

function MuitableMaterials() {
	return (
		<MUIDataTable
			title={"Basic Materials Pricelist"}
			data={data}
			columns={columns}
			options={options}
		/>
	);
}

export default MuitableMaterials;

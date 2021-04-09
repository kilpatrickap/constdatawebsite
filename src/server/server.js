const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const plantRoutes = express.Router();
const materialsRoutes = express.Router();
const PORT = 4000;



//////////////////// --PLANTS-- /////////////////////////////

let Plant = require("./plant.model");
const { db } = require("./plant.model");

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27017/plants", { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once("open", function () {
	console.log("MongoDB database connection established successfully");
});

plantRoutes.route("/").get(function (req, res) {
	Plant.find(function (err, plants) {
		if (err) {
			console.log(err);
		} else {
			res.json(plants);
		}
	});
});

plantRoutes.route("/:id").get(function (req, res) {
	let id = req.params.id;
	Plant.findById(id, function (err, plant) {
		res.json(plant);
	});
});

plantRoutes.route("/add").post(function (req, res) {
	let plant = new Plant(req.body);
	plant
		.save()
		.then((plant) => {
			res.status(200).json({ plant: "plant added successfully" });
		})
		.catch((err) => {
			res.status(400).send("adding new plant failed");
		});
});

plantRoutes.route("/update/:id").post(function (req, res) {
	Plant.findById(req.params.id, function (err, plant) {
		if (!plant) res.status(404).send("data is not found");
		else plant.plant_code = req.body.plant_code;
		plant.plant_description = req.body.plant_description;
		plant.plant_quantity = req.body.plant_quantity;
		plant.plant_unit = req.body.plant_unit;
		plant.plant_rate = req.body.plant_rate;
		plant.plant_renter = req.body.plant_renter;
		plant.plant_location = req.body.plant_location;
		plant.plant_address = req.body.plant_address;
		plant.plant_contact = req.body.plant_contact;
		plant.plant_date = req.body.plant_date;

		plant
			.save()
			.then((plant) => {
				res.json("Plant updated!");
			})
			.catch((err) => {
				res.status(400).send("Update not possible");
			});
	});
});

//Delete a plant item
plantRoutes.route("/delete/:id").get(function (req, res) {
	Plant.findByIdAndRemove(
		{
			_id: req.params.id,
		},
		function (err, plant) {
			if (err) res.json(err);
			else res.json("Plant item deleted Successfully");
		}
	);
});



//////////////////// --MATERIALS-- /////////////////////////////

let Material = require("./material.model");

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27017/materials", { useNewUrlParser: true });


connection.once("open", function () {
	console.log("MongoDB database connection established successfully");
});

materialsRoutes.route("/").get(function (req, res) {
	Material.find(function (err, materials) {
		if (err) {
			console.log(err);
		} else {
			res.json(materials);
		}
	});
});

materialsRoutes.route("/:id").get(function (req, res) {
	let id = req.params.id;
	Material.findById(id, function (err, material) {
		res.json(material);
	});
});

materialsRoutes.route("/add").post(function (req, res) {
	let material = new Material(req.body);
	material
		.save()
		.then((material) => {
			res.status(200).json({ material: "material added successfully" });
		})
		.catch((err) => {
			res.status(400).send("adding new material failed");
		});
});

materialsRoutes.route("/update/:id").post(function (req, res) {
	Material.findById(req.params.id, function (err, material) {
		if (!material) res.status(404).send("data is not found");
		else material.mat_code = req.body.mat_code;
		material.mat_description = req.body.mat_description;
		material.mat_quantity = req.body.mat_quantity;
		material.mat_unit = req.body.mat_unit;
		material.mat_price = req.body.mat_price;
		material.mat_supplier = req.body.mat_supplier;
		material.mat_location = req.body.mat_location;
		material.mat_address = req.body.mat_address;
		material.mat_contact = req.body.mat_contact;
		material.mat_date = req.body.mat_date;


		material
			.save()
			.then((material) => {
				res.json("Material updated!");
			})
			.catch((err) => {
				res.status(400).send("Update not possible");
			});
	});
});

//Delete a material item
materialsRoutes.route("/delete/:id").get(function (req, res) {
	Material.findByIdAndRemove(
		{
			_id: req.params.id,
		},
		function (err, material) {
			if (err) res.json(err);
			else res.json("Material item deleted Successfully");
		}
	);
});







app.use("/materials", materialsRoutes);

app.use("/plants", plantRoutes);

app.listen(PORT, function () {
	console.log("Server is running on Port: " + PORT);
});

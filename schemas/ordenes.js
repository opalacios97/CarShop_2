const mongoose = require('mongoose');

const ordenes = mongoose.Schema({
    first_name: String,
    last_name: String,
    address: String,
    city: String,
	identification_number: String,
    type_identification_number: String,
	brand: String,
	number_plate: String,
	fuel_level: String,
	services: String,
	time: String,
	status: String,
	assingment_date: String,
	assingment_time: String

});

const Ordenes = new mongoose.model('orden', ordenes);

module.exports = Ordenes;
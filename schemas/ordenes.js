const mongoose = require('mongoose');

const ordenes = mongoose.Schema({
    first_name: String,
    last_name: String,
    address: String,
    city: String
});

const Ordenes = new mongoose.model('orden', ordenes);

module.exports = Ordenes;
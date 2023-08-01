const Ordenes = require('../schemas/ordenes');

function getOrden(cb) {
    Ordenes.find({})
    .then((elems) => {
        return cb(null, elems);
    })
    .catch((error) => {
        console.log('Error:', error);
        return cb(error);
    })
}


function createOrden(b, cb) {
    new Ordenes(b)
    .save()
    .then((elem) => {
        return cb(null, elem);
    })
    .catch((error) => {
        console.log('Error:', error);
        return cb(error);
    });
}

function deleteOrden(id, cb) {
    Bookings.findOneAndRemove({ _id: id})
    .then((elem) => {
        return cb(null, elem);
    })
    .catch((error) => {
        console.log('Error:', error);
        return cb(error);
    })
}

exports.getOrden = getOrden;
exports.createOrden = createOrden;
exports.deleteOrden = deleteOrden;
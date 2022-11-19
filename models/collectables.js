const mongoose = require('mongoose');

const collectableSchema = new mongoose.Schema({
    type: {type: String, required: true},
    name: {type: String, required: true},
    height: {type: Number, required: true},
    width: {type: Number, required: true},
    owned: {type: Boolean, required: true},
    unopened: {type: Boolean, required: true},
    /////////////////////////////////////////
    boxed: {type: Boolean, required: false},
    condition: {type: String, required: false},
    scale: {type: String, required: false},
    image: {type: String, required: false},
    brand: {type: String, required: false},
    franchise: {type: String, required: false},
    quantity: {type: Number, required: false},
    custom: {type: Boolean, required: false},
    note: {type: String, required: false},
    tags: {type: [String], required: false}
});

const collection = mongoose.model('Collectable', collectableSchema);
module.exports = collection;
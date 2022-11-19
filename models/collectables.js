const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const collectableSchema = new Schema({
    type: {type: String, required: true},
    name: {type: String, required: true},
    size: {type: String, required: true},
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
    tags: {type: [String], required: false},
    height: {type: Number, required: false},
    width: {type: Number, required: false},
});

const collection = mongoose.model('Collectable', collectableSchema);
module.exports = collection;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const collectableSchema = new Schema({
    type: {type: String, required: true},
    name: {type: String, required: true},
    value: {type: Number, required: true},
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
    likes: {type: Number, required: false, min: 0}
});

const collection = mongoose.model('Collectable', collectableSchema);
module.exports = collection;
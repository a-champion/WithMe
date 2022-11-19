const mongoose = require('mongoose');

const collectibleSchema = new mongoose.Schema({
    size: {type: String, required: true},
    brand: {type: String, required: true},
    unopened: {type: Boolean, required: true},
    name: {type: String, required: true},
    franchise: {type: String, required: false},
    boxed: {type: Boolean, required: false},
    custom: {type: Boolean, required: false},
    descript: {type: String, required: false}
});

const collectiblesCollection = mongoose.model('Collectible', collectibleSchema);
module.exports = collectiblesCollection;
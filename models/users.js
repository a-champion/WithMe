const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const Collectable = require('./collectables.js');

const userSchema = new Schema({
    username:{ type: String, unique: true, required: true },
    password:{ type: String, required: true }
    // ,
    // collections:[Collectable.schema]
}, {timestamps:true});

const User = mongoose.model('User', userSchema);
module.exports = User
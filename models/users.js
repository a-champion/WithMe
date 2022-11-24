const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Collectable = require('./collectables.js');

const userSchema = new Schema({
    name:{ type: String, required: true, maxlength: 32, trim: true },
    lastname: { type: String, required: true, maxlength: 32, trim: true },
    userName:{ type: String, unique: true, required: true },
    password:{ type: String, required: true },
    birthday:{ type: Date },
    email:{ type:String, unique:true, trim: true},
    mobile: { type: String },
    interests:[ String ],
    salt: String,
    collections:[Collectable.schema]
    
}, {timestamps:true});
//encrytion

const users = mongoose.model('User', userSchema);
module.exports = users;
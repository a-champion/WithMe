const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Collectable = require('./collectables.js');

const userSchema = new Schema({
    username:{ type: String, unique: true, required: true },
    password:{ type: String, required: true },
    name:{ type: String, required: false, maxlength: 32, trim: true },
    lname: { type: String, required: false, maxlength: 32, trim: true },
    birthday:{ type: Date, required: false},
    email:{ type:String, unique:true, required: false, trim: true},
    mobile: { type: String, required: false},
    interests:{type: [ String ], required: false},
    collections:{type: [Collectable.schema], required: false}
}, {timestamps:true});

const User = mongoose.model('User', userSchema);
module.exports = User;

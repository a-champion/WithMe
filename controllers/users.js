const express = require('express');
const users = express.Router();
const User = require('../models/users.js');
const bcrypt = require('bcrypt');

users.get('/new', (req, res) => {
    res.render('users/newUser.ejs', {
        currentUser: req.session.currentUser
    });
});

users.post('/', (req, res) => {
    console.log(req.body);
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
    User.create(req.body, (err, createdUser) => {
        console.log('user is created', createdUser);
        res.redirect('/users');
    })
})

module.exports = users;
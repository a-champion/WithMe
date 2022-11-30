const express = require('express');
const users = express.Router();
const User = require('../models/users.js');
const bcrypt = require('bcrypt');

users.get('/new', (req, res) => {
    res.render('users/newUser.ejs', {
        currentUser: req.session.currentUser
    });
});

users.get('/:id', (req, res) => {
    if (req.session.currentUser) {
        User.findById(req.params.id, (err, foundUser) => {
            res.render('users/show.ejs', {
                user: foundUser,
                currentUser: req.session.currentUser
            });
        });
    } else {
        res.redirect('/sessions/new');
    }
});

users.get('/:id/edit', (req, res) => {
    if (req.session.currentUser) {
        User.findById(req.params.id, (err, foundUser) => {
            res.render('users/edit.ejs', {
                user: foundUser,
                currentUser: req.session.currentUser
            });
        });
    } else {
        res.redirect('/sessions/new');
    }
});

users.put('/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, 
        {
            new: true,
            timestamp: true
        }, (err, updatedUser) => {
            res.redirect('/users')
        });
});

users.post('/', (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
    console.log(req.body);
    User.create(req.body, (err, createdUser) => {
        console.log('user is created', createdUser);
        console.log(err);
        res.redirect('/sessions/new');
    })
})

module.exports = users;
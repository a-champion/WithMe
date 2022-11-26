const bcrypt = require('bcrypt');
const express =require('express');
const sessions = express.Router();
const User = require('../models/users.js');


sessions.get('/new', (req, res) => {
    res.render('session/new.ejs', { currentUser: req.session.currentUser });
});

sessions.post('/', (req, res) => {
    User.findOne({username: req.body.username}, (err, foundUser) => {
        if(err) {
            console.log(err)
            res.send('I couldmnt doom thamt form youm');
        } else if (!foundUser) {
            res.send('<a href="/">Somry, nom umser foumd</a>')
        } else {
            if(bcrypt.compareSync(req.body.password, foundUser.password)) {
                req.session.currentUser = foundUser;
                res.redirect('/');
            } else {
                res.send('<a href="/"> pamsword does nomt match </a>');
            }
        }
    })
})

sessions.delete('/', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/');
    });
});



module.exports = sessions;
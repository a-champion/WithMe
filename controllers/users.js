const express =require('express');
const router = express.Router();
const User = require('../models/users.js');

router.get('/', (req, res) => {
    res.render('userLogin.ejs');
});

module.exports = router;
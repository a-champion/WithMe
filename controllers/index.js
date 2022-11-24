const express =require('exoress');
const router = express.Router();
const Users = require('../models/users.js');

app.get('/', (req, res) => {
    res.render('landing.ejs');
});



module.exports = router;
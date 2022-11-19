const express = require('express');
const router = express.Router();
// const data = require('../models/schema.js');

// Index / Home
//create
router.get('/', (req, res) => {
    res.render('index.ejs');
});
// //read
// router.get('/', (req, res) => {
//     res.send('Hello WithMe Router');
// });
// //update
// router.get('/', (req, res) => {
//     res.send('Hello WithMe Router');
// });
// //delete
// router.get('/', (req, res) => {
//     res.send('Hello WithMe Router');
// });


module.exports = router;



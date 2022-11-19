const express = require('express');
const router = express.Router();
const Collectable = require('../models/collectables.js');
// const data = require('../models/schema.js');

// Index / Home
//create
router.get('/', (req, res) => {
    Collectable.find({}, (error, allCollectables) => {
        res.render('index.ejs', {
            collectables: allCollectables
        });
    });
});

//seed 
router.get('/seed', (req, res) => {
    Collectable.create(
        [
            {
                type:'POP',
                name: 'Killua Zoldyck',
                size: 'standard',
                owned: true,
                unopened: true,
            },
            {
                type:'POP',
                name: 'Trafalgar Law',
                size: 'standard',
                owned: true,
                unopened: true,
                tags:['chase', 'glow']
            },
            {
                type:'POP',
                name: 'Alphonse Elric with kittens',
                size: 'standard',
                owned: true,
                unopened: true,
                tags:['Exclusive', 'Hot Topic', 'kittens'],
                note: 'comes with 3 kittens!'
            }

        ], (err, data) => {
            res.send('/', {
                collectables: data
            });
        }
    )
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



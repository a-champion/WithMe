const express = require('express');
const router = express.Router();
const Collectable = require('../models/collectables.js');
// const data = require('../models/schema.js');

// Index / Home
router.get('/', (req, res) => {
    Collectable.find({}, (error, allCollectables) => {
        res.render('index.ejs', {
            collectables: allCollectables
        });
    });
});

//new
router.get('/new', (req, res) => {
    res.render('new.ejs');
});

// create
router.post('/', (req, res) => {
    if(req.body.owned === 'on'){
        req.body.owned = true;
    } else {
        req.body.owned = false;
    }
    if(req.body.unopened === 'on'){
        req.body.unopened = true;
    } else {
        req.body.unopened = false;
    }
    if(req.body.boxed === 'on'){
        req.body.boxed = true;
    } else {
        req.body.boxed = false;
    }
    if(req.body.custom === 'on'){
        req.body.custom = true;
    } else {
        req.body.custom = false;
    }
    let stringToSplit = req.body.tags;
    (req.body.tags) = stringToSplit.split(',');

    Collectable.create(req.body, (err, newCollectable) => {
        if(req.body.done === 'Done') {
            res.redirect('/');
        } else {
            res.redirect('/new');
        }
    });
});

//read
router.get('/:id', (req, res) => {
    Collectable.findById(req.params.id, (err, foundCollectable) => {
        res.render('show.ejs', {
            collectable: foundCollectable
        });
        // res.render('show.ejs', {
            // collectables: foundCollectable
        });
});

// });
// //update
// router.get('/', (req, res) => {
//     res.send('Hello WithMe Router');
// });
// //delete
// router.get('/', (req, res) => {
//     res.send('Hello WithMe Router');
// });

//seed
// router.get('/seed', (req, res) => {
//     Collectable.create(
//         [
//             {
//                 type:'POP',
//                 name: 'Killua Zoldyck',
//                 size: 'standard',
//                 owned: true,
//                 unopened: true,
//             },
//             {
//                 type:'POP',
//                 name: 'Trafalgar Law',
//                 size: 'standard',
//                 owned: true,
//                 unopened: true,
//                 tags:['chase', 'glow']
//             },
//             {
//                 type:'POP',
//                 name: 'Alphonse Elric with kittens',
//                 size: 'standard',
//                 owned: true,
//                 unopened: true,
//                 tags:['Exclusive', 'Hot Topic', 'kittens'],
//                 note: 'comes with 3 kittens!'
//             }

//         ], (err, data) => {
//             res.send('/', {
//                 collectables: data
//             });
//         }
//     )
// });

module.exports = router;



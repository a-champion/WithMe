const express = require('express');
const collectables = express.Router();
const Collectable = require('../models/collectables.js');
// const data = require('../models/schema.js');

const isAuthenticated = (req, res, next) => {
    if (req.session.currentUser) {
        return next();
    } else {
        res.redirect('/sessions/new');
    }
}

collectables.use(isAuthenticated);

// Index / Home
collectables.get('/', (req, res) => {
    Collectable.find({}, (error, allCollectables) => {
        res.render('collections/index.ejs', {
            collectables: allCollectables,
            currentUser: req.session.currentUser
        });
    });
});

//new
collectables.get('/new', (req, res) => {
    res.render('collections/new.ejs',{
        currentUser: req.session.currentUser
    });
});

// create
collectables.post('/', (req, res) => {
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
    if(req.body.tags !== ''){
        let stringToSplit = req.body.tags;
        (req.body.tags) = stringToSplit.split(',');
    } else if(req.body.tags === ''){

    }

    Collectable.create(req.body, (err, newCollectable) => {
        if(req.body.done === 'Done') {
            res.redirect('/collection');
        } else {
            res.redirect('/collection/new');
        }
    });
});

//read
collectables.get('/:id', (req, res) => {
    Collectable.findById(req.params.id, (err, foundCollectable) => {
        res.render('collections/show.ejs', {
            collectable: foundCollectable,
            currentUser: req.session.currentUser
        });
        // res.render('show.ejs', {
            // collectables: foundCollectable
        });
});

//edit
collectables.get('/:id/edit', (req, res) => {
    Collectable.findById(req.params.id, (err, foundCollectable) => {
        res.render(
            'collections/edit.ejs', 
            {
                collectable: foundCollectable,
                currentUser: req.session.currentUser
            }
        );
    });
});

//update
collectables.put('/:id', (req, res) => {
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
    Collectable.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedItem) => {
        res.redirect('/collection');
    });
});

//delete
collectables.delete('/:id', (req, res) => {
    Collectable.findByIdAndRemove(req.params.id, (err, deletedData) => {
        res.redirect('/collection');
    })
});

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

module.exports = collectables;



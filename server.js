// Dependencies //
//////////////////////////////////////////
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = mongoose.connection;
const session = require('express-session');
const methodOverride = require('method-override');
require('dotenv').config();

//config
//////////////////////////////////////////
let PORT = process.env.PORT;
const mongodbURI = process.env.MONGODBURI;
if(process.env.PORT){
    PORT = process.env.PORT
}

// middleware //
///////////////////////////////
app.use(express.urlencoded({extended: true}));

app.use(express.json());
app.use(methodOverride('_method'));
app.use(
    session({
        secret:process.env.SECRET,
        resave: false,
        saveUninitialized: false
    })
);


//static
app.use(express.static('public'));

//models
const User = require('./models/users.js');
//controllers
const collectionController = require('./controllers/withMe.js');
app.use('/collection', collectionController);

const sessionsController = require('./controllers/sessions_Controller.js');
app.use('/sessions', sessionsController);


const userController = require('./controllers/users.js');
app.use('/users', userController);

//root redirect to login
app.get('/', (req, res) => {
    User.find({}, (err, allUsers) => {
        res.render('landing.ejs', {
            users: allUsers,
            currentUser: req.session.currentUser
        });
    });
});


// test
// app.get('/', (req, res) => {
//     res.send('Hello WithMe');
// });

//seed


app.listen(PORT, () => {
    console.log('listening...');
});

mongoose.connect(mongodbURI, () => {
    console.log('connected to mongo atlas');
});

db.on('error', (err) => console.log(err.message));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));

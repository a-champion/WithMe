// Dependencies //
//express
const express = require('express');
const app = express();

// mongoose
// require('dotenv/config'); this is another way to keep enviornment variables from being viewed that i came across.
const mongoose = require('mongoose');
const db = mongoose.connection;
//for encryption
const bcrypt = require('bcrypt');
//session
const session = require('express-session');

//config
let PORT = 3000;
if(process.env.PORT){
    PORT = process.env.PORT
}
//models
const User = require('./models/users.js');

//body parser
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//method override
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
    res.redirect('/user');
});

//redirect to 
//controller
const collectionController = require('./controllers/withMe.js');
app.use('/collection', collectionController);

const userController = require('./controllers/users.js');
app.use('/user', userController);



//build path
// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static('clients/build'));
//     app.get('*', (req, res) => {
//         res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')); //relative path (import module path?)

//     });
// }

//static
// app.use(express.static('public'));

// test
// app.get('/', (req, res) => {
//     res.send('Hello WithMe');
// });

//seed


app.listen(PORT, () => {
    console.log('listening...');
});

mongoose.connect('mongodb+srv://vile:Achampionbrah01@project0.4hkgkbk.mongodb.net/collectables?retryWrites=true&w=majority', () => {
    console.log('connected to mongo atlas');
});

db.on('error', (err) => console.log(err.message));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));
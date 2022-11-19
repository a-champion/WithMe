// Dependencies //
//express
const express = require('express');
const app = express();

// mongoose
require('dotenv/config');
const mongoose = require('mongoose');
// const mongoURI = 'mongodb+srv://vile:Achampionbrah01@project0.4hkgkbk.mongodb.net/collectibles?retryWrites=true&w=majority';
const db = mongoose.connection;

//controller
const appController = require ('./controllers/withMe.js');

//method override
// const methodOverride = require('method-override');
// app.use(methodOverride('_method'));


//config
let PORT = 3000;
if(process.env.PORT){
    PORT = process.env.PORT
}

//body parser
// app.use(express.urlencoded({extended: true}));
// app.use(express.json());

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

mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log('connected to mongo atlas');
});

db.on('error', (err) => console.log(err.message));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));
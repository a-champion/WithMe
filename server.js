// Dependencies //
//express
const express = require('express');
const app = express();

// mongoose
// require('dotenv/config');
const mongoose = require('mongoose');
const db = mongoose.connection;

//config
let PORT = 3000;
if(process.env.PORT){
    PORT = process.env.PORT
}

//controller
const appController = require('./controllers/withMe.js');
app.use('/WithMe', appController);

//method override
// const methodOverride = require('method-override');
// app.use(methodOverride('_method'));

//build path
// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static('clients/build'));
//     app.get('*', (req, res) => {
//         res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')); //relative path (import module path?)

//     });
// }

// body parser
app.use(express.json());
app.use(express.urlencoded({extended: true}));

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

mongoose.connect(process.env.DB_CONNECTION || 'mongodb://127.0.0.1:27017/WithMe', () => {
    console.log('connected to mongo atlas');
});

db.on('error', (err) => console.log(err.message));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));
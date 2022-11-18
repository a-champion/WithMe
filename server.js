// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const db = mongoose.connection;
const methodOverride = require('method-override');
//config
app.use(methodOverride('_method'));
let PORT = 3000;
if(process.env.PORT){
    PORT = process.env.PORT
}
app.use(express.urlencoded({extended: true}));
// app.use(express.json());
// 

app.use(express.static('public'));

const appController = require ('./controller/withMe.js')

//test
// app.get('/', (req, res) => {
//     res.send('Hello WithMe');
// });

//seed



app.listen(PORT, () => {
    console.log('listening...');
});

mongoose.connect('mongodb+srv://vile:Achampionbrah01@project0.4hkgkbk.mongodb.net/?retryWrites=true&w=majority', () => {
    console.log('connected to mongo');
})
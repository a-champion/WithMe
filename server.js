// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const app = express();




let PORT = 3000;
if(process.env.PORT){
    PORT = process.env.PORT
}
//test
app.get('/', (req, res) => {
    res.send('Hello WithMe');
});

app.listen(PORT, () => {
    console.log('listening...');
});

mongoose.connect('mongodb+srv://vile:Achampionbrah01@project0.4hkgkbk.mongodb.net/?retryWrites=true&w=majority', () => {
    console.log('connected to mongo');
})
// Dependencies
const express = require('express');
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
    console.log('listening');
});
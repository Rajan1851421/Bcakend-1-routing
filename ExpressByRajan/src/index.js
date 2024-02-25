
const express = require('express');
const app = express();
const path = require('path')

// console.log("Path:",__dirname);

// console.log(path.join(__dirname, '../public/'));
const staticPtah = path.join(__dirname, '../public')

app.use(express.static(staticPtah))
app.listen('8000', () => {
    console.log('listening on 8000');
})

app.get('/', (req, res) => {
    res.send("hello world! Rajan Prajapati complete");
})
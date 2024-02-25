const express = require('express');
const app = express();

app.listen('8000',()=>{
    console.log('listening on 8000');
})

app.get('/ram',(req,res)=>{
    res.send("hello world! Rajan Prajapati complete");
})
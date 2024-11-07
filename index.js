const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;


app.use(express.static('public'));

app.get('/peticion',(req,res)=>{
    res.send(JSON.stringify(MESSAGES));
});

app.listen(PORT);

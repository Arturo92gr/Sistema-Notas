import { interfaces } from './interfaces.js';
import express from 'express';      //const express = require('express');
import path from path;
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/peticion',(req,res)=>{
    res.send(JSON.stringify(MESSAGES));
});

app.get('/interface', async (req, res) => {
    try {
        res.json(interfaces.interface1);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las notas' });
    }
});

app.listen(PORT);

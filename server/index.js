import express from 'express';
import cors from 'cors';
import { model1 } from './interfaces/model_1.js';

const appUI = new express();
appUI.use(cors());

appUI.get('/', (req, res) => {
    res.send(model1);
})

appUI.listen(3000, ()=>{
    console.log("UI Server running.")
});
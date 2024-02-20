import express from 'express';
import process from 'express';
import path from 'path';

const host= "0.0.0.0";
const porta= 3000;

const app = express();

app.use(express.static(path.join(process.cwd(), 'html')))

app.listen(porta, host, ()=>{
    console.log('Servidor escutando em http://${host}:${porta}')

})
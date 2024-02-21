import express from 'express';
import process from 'process';
import path from 'path';

const host= "0.0.0.0";
const porta= 3000;

const app = express();

app.use(express.static(path.join(process.cwd(), 'html')))
app.use(express.static(path.join(process.cwd(), 'cadastro')))

app.get('/', (req, res) => {
    
    res.sendFile(path.join(process.cwd(), 'html', 'pagina.html'));

});

app.listen(porta, host, ()=>{
    console.log(`Servidor escutando em http://${host}:${porta}`)

})
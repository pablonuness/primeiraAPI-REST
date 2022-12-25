const express = require('express');
const app = express();

const funcoes = require('./converteTemp');

//camada rest
app.get('/', (req,res) => {
    if(funcoes.validaParametro(req.query.fahrenheit)){
    let fahrenheit = req.query.fahrenheit;
    let celsius = funcoes.converteTemperatura(fahrenheit);
    res.json({celsius: celsius});
    }
    else{
        res.status(400).json({'Erro':'Farenheit deve ser um número.'})
    }
})

app.listen(8080, () => {
    let data = new Date();
    console.log(`O servidor foi iniciado em ${data}`);
})
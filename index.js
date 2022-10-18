const express = require('express');
const app = express();

let data = new Date();

let mensagemDia = require('./mensagemDoDia');

app.get('/', (req,res) => {
    let dia = data.getDate();
    let mensagemSelecionada = mensagemDia.retornaMensagemDoDia(dia);

    res.json({mensagem: mensagemSelecionada});

});

app.listen(8080, () => {
    console.log(`Servidor node iniciado em ${data}`)
})
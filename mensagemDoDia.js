let dados = require('./dados');

function retornaMensagemDoDia(dia){
    return dados.frases[dia - 1];
}

exports.retornaMensagemDoDia = retornaMensagemDoDia;
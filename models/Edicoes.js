const mongoose = require('mongoose');

const EdicoesTabela = new mongoose.Schema({
    nome: {
        type: String,
        required: [true,'Nome da edição é obrigatório.'],
        trim: true,
        maxlength: [100,'Nome não pode ultrapassar 100 caracteres'],
    },

    observacao: {
        type: String,
        required: false,
    },

    linkEdicao: {
        type: String,
        required: false,
    },

    linkCapa: {
        type: String,
        required: false,
    },       
})

module.exports = mongoose.models.Edicoes || mongoose.model('Edicoes',EdicoesTabela);
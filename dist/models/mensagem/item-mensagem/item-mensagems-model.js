"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const itemMensagemSchema = new mongoose.Schema({
    mensagem: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Mensagem',
        required: true
    },
    usuarioAutor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: false
    },
    statusLeitura: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
exports.ItemMensagem = mongoose.model('ItemMensagem', itemMensagemSchema);

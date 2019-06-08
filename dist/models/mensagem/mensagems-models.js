"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const mensagemSchema = new mongoose.Schema({
    usuarioDe: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    usuarioPara: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: false
    },
    statusLeitura: {
        type: String,
        required: true
    },
    descricaoUltimaMensagem: {
        type: String,
        required: true
    },
    usuarioAutorUltimaMensagem: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: false
    }
}, {
    timestamps: true
});
exports.Mensagem = mongoose.model('Mensagem', mensagemSchema);

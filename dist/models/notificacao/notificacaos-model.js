"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const notificacaoSchema = new mongoose.Schema({
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: false
    },
    imovel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Imovel',
        required: false
    },
    usuarioConvite: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: false
    },
    preferencia: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Preferencia',
        required: false
    },
    acao: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    observacao: {
        type: String,
        required: false
    },
    tipoNotificacao: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});
exports.Notificacao = mongoose.model('Notificacao', notificacaoSchema);

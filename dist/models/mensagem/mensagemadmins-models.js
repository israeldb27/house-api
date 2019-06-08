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
    status: {
        type: String,
        required: true
    },
    statusLeitura: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: false
    }
}, {
    timestamps: true
});
exports.Mensagem = mongoose.model('Mensagem', mensagemSchema);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const intermediacaoSchema = new mongoose.Schema({
    usuarioSolicitante: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    imovel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Imovel',
        required: true
    },
    status: {
        type: String,
        required: true
    },
    statusLeitura: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});
exports.Intermediacao = mongoose.model('Intermediacao', intermediacaoSchema);

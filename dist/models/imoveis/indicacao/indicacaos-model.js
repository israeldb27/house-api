"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const indicacaoSchema = new mongoose.Schema({
    usuarioEnviaIndicacao: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    usuarioRecebeIndicacao: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    imovel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Imovel',
        required: true
    },
    observacao: {
        type: String,
        required: false
    }
}, {
    timestamps: true
});
exports.Indicacao = mongoose.model('Indicacao', indicacaoSchema);

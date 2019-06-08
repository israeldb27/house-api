"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const notaSchema = new mongoose.Schema({
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
    }
}, {
    timestamps: true
});
exports.Nota = mongoose.model('Nota', notaSchema);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const trabalhoRealizadoSchema = new mongoose.Schema({
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    imovel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Imovel',
        required: false
    },
    descricao: {
        type: String,
        required: false
    }
}, {
    timestamps: true
});
exports.TrabalhoRealizado = mongoose.model('TrabalhoRealizado', trabalhoRealizadoSchema);

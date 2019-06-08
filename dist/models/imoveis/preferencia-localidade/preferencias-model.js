"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const preferenciaSchema = new mongoose.Schema({
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    localizacao: {
        type: String,
        required: false
    },
    latitude: {
        type: Number,
        required: false
    },
    longitude: {
        type: Number,
        required: false
    },
    acaoImovel: {
        type: String,
        required: false
    },
    statusImovel: {
        type: String,
        required: false
    },
}, {
    timestamps: true
});
exports.Preferencia = mongoose.model('Preferencia', preferenciaSchema);

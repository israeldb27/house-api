"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const contatoSchema = new mongoose.Schema({
    usuarioHost: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    usuarioConvidado: {
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
    }
}, {
    timestamps: true
});
exports.Contato = mongoose.model('Contato', contatoSchema);

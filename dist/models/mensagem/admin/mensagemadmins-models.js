"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const mensagemAdminSchema = new mongoose.Schema({
    usuarioDe: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    tipoMensagem: {
        type: String,
        required: true
    },
    titulo: {
        type: String,
        required: true
    },
    possuiMensagem: {
        type: String,
        required: true
    },
    existemItemMensagemNova: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
exports.MensagemAdmin = mongoose.model('MensagemAdmin', mensagemAdminSchema);

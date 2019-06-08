"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const itemMensagemAdminSchema = new mongoose.Schema({
    usuarioPara: {
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
    remetenteAdmin: {
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
exports.ItemMensagemAdmin = mongoose.model('ItemMensagemAdmin', itemMensagemAdminSchema);

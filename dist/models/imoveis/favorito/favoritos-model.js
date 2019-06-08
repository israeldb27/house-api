"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const favoritoSchema = new mongoose.Schema({
    usuarioFavorito: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    imovel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Imovel',
        required: true
    }
}, {
    timestamps: true
});
exports.Favorito = mongoose.model('Favorito', favoritoSchema);

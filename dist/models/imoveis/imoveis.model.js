"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
// definindo o schema (documento do mongo) do Usuario
const imovelSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    tipoImovel: {
        type: String,
        required: true
    },
    valor: {
        type: Number,
        required: true
    }
});
exports.Imovel = mongoose.model('Imovel', imovelSchema);

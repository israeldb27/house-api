"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const imovelVisualizacaoSchema = new mongoose.Schema({
    usuarioVisitante: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    imovel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Imovel',
        required: true
    }
});
exports.ImovelVisualizacao = mongoose.model('ImovelVisualizacao', imovelVisualizacaoSchema);

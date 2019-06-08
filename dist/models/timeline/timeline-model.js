"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const timelineSchema = new mongoose.Schema({
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    tipoTimeline: {
        type: String,
        required: true
    },
    textPost: {
        type: String,
        required: false
    },
    urlYouTube: {
        type: String,
        required: false
    },
    urlImagem: {
        type: String,
        required: false
    },
    imovelCompartilhado: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Imovel',
        required: false
    },
    usuarioCompartilhado: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: false
    },
    imovelAnuncio: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Imovel',
        required: false
    },
    usuarioAnuncio: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: false
    },
}, {
    timestamps: true
});
exports.Timeline = mongoose.model('Timeline', timelineSchema);

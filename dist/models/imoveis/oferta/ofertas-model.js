"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const ofertaSchema = new mongoose.Schema({
    valorOferta: {
        type: Number,
        required: true,
        default: 0
    },
    usuarioOferta: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    imovel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Imovel',
        required: true
    },
    observacao: {
        type: String,
        required: false
    },
}, {
    timestamps: true
});
ofertaSchema.statics.findByImovelAndUsuario = function (imovel, usuario) {
    return this.findOne({ imovel: imovel, usuarioOferta: usuario });
};
exports.Oferta = mongoose.model('Oferta', ofertaSchema);

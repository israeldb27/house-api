"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const comentarioSchema = new mongoose.Schema({
    comentario: {
        type: String,
        required: true
    },
    usuarioComentario: {
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
comentarioSchema.statics.findByIdImovel = function (imovel) {
    return this.find({ imovel }).populate('usuarioComentario', ['nome', 'perfil']);
};
exports.Comentario = mongoose.model('Comentario', comentarioSchema);

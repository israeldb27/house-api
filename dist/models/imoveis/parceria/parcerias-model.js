"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
/*
    Status: { Solicitado: 'S', Fechado: 'F'}
    StatusLeitura: { Novo: 'N', Leitura: 'L'}
*/
const parceriaSchema = new mongoose.Schema({
    usuarioSolicitante: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    imovel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Imovel',
        required: true
    },
    status: {
        type: String,
        required: true
    },
    statusLeitura: {
        type: String,
        required: true
    },
    obs: {
        type: String,
        required: false
    },
}, {
    timestamps: true
});
parceriaSchema.statics.findByImovelAndUsuario = function (imovel, usuario) {
    return this.findOne({ imovel: imovel, usuarioSolicitante: usuario });
};
exports.Parceria = mongoose.model('Parceria', parceriaSchema);

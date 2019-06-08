"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
// definindo o schema (documento do mongo) do Usuario
const imovelSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    acao: {
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
    },
    status: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: false
    },
    observacao: {
        type: String,
        required: false
    },
    area: {
        type: Number,
        required: false
    },
    localizacao: {
        type: String,
        required: false
    },
    latitude: {
        type: Number,
        required: false
    },
    longitude: {
        type: Number,
        required: false
    },
    autorizaOfertas: {
        type: String,
        required: false,
        default: "S"
    },
    autorizaComentarios: {
        type: String,
        required: false,
        default: "S"
    },
    autorizaParceriaIntermediacao: {
        type: String,
        required: false,
        default: "S"
    },
    descParceriaIntermediacao: {
        type: String,
        required: false
    },
    quantQuartos: {
        type: Number,
        required: false,
        default: 0
    },
    quantBanheiros: {
        type: Number,
        required: false,
        default: 0
    },
    quantSuites: {
        type: Number,
        required: false,
        default: 0
    },
    quantVagas: {
        type: Number,
        required: false,
        default: 0
    },
    habilitaInfoDonoImovel: {
        type: String,
        required: false,
        default: "S"
    },
    habilitaBusca: {
        type: String,
        required: false,
        default: "S"
    },
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    valorIptu: {
        type: Number,
        required: false,
        default: 0
    },
    valorCondominio: {
        type: Number,
        required: false,
        default: 0
    },
    outrasTaxas: {
        type: Number,
        required: false,
        default: 0
    },
    quantTotalFavoritos: {
        type: Number,
        required: false,
        default: 0
    },
    quantTotalComentarios: {
        type: Number,
        required: false,
        default: 0
    },
    quantTotalVisualizacoes: {
        type: Number,
        required: false,
        default: 0
    },
    quantTotalOfertas: {
        type: Number,
        required: false,
        default: 0
    }
}, {
    timestamps: true
});
exports.Imovel = mongoose.model('Imovel', imovelSchema);

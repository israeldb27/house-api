"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const seguidorSchema = new mongoose.Schema({
    usuarioSeguidor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    usuarioSeguindo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: false
    },
    status: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
exports.Seguidor = mongoose.model('Seguidor', seguidorSchema);

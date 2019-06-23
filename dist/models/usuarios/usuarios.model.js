"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const environment_1 = require("../../common/environment");
const bcrypt = require("bcrypt");
// definindo o schema (documento do mongo) do Usuario
const usuarioSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    },
    password: {
        type: String,
        //select: false,
        select: true,
        required: true
    },
    perfil: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: false
    },
    cnpj: {
        type: String,
        required: false
    },
    creci: {
        type: String,
        required: false
    },
    descricao: {
        type: String,
        required: false
    },
    localizacao: {
        type: String,
        required: false
    },
    quantTotalImoveis: {
        type: Number,
        required: false,
        default: 0
    },
    quantTotalContatos: {
        type: Number,
        required: false,
        default: 0
    },
    quantTotalSeguidores: {
        type: Number,
        required: false,
        default: 0
    }
}, {
    timestamps: true
});
//INICIO -  definindo os middlewares 
// middleware nos metodos PUT e PATCH - para quando o password for modificado
const updateMiddleware = function (next) {
    if (!this.getUpdate().password) {
        next();
    }
    else {
        hashPassword(this.getUpdate(), next);
    }
};
// middleware utilizado quando o metodo POST eh acionado
const saveMiddleware = function (next) {
    const usuario = this;
    if (!usuario.isModified('password')) {
        next();
    }
    else {
        hashPassword(usuario, next);
    }
};
//FIM -  definindo os middlewares 
// criando uma funcao hash para o password que vai ser reutilizada
const hashPassword = (obj, next) => {
    bcrypt.hash(obj.password, environment_1.environment.security.saltRounds)
        .then(hash => {
        obj.password = hash;
        next();
    });
};
// metodo estatico do Documento para buscar por email
usuarioSchema.statics.findByEmail = function (email, projection) {
    return this.findOne({ email }, projection); //{email: email}
};
usuarioSchema.methods.matches = function (password) {
    return bcrypt.compareSync(password, this.password);
};
usuarioSchema.pre('save', saveMiddleware);
usuarioSchema.pre('findOneAndUpdate', updateMiddleware);
usuarioSchema.pre('update', updateMiddleware);
exports.Usuario = mongoose.model('Usuario', usuarioSchema);

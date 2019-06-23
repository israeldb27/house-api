"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usuarios_model_1 = require("../models/usuarios/usuarios.model");
const restify_errors_1 = require("restify-errors");
const jwt = require("jsonwebtoken");
exports.authenticate = (req, resp, next) => {
    const { email, password } = req.body;
    usuarios_model_1.Usuario.findByEmail(email, '+password')
        .then(usuario => {
        if (usuario && usuario.matches(password)) {
            const token = jwt.sign({ sub: email, iss: 'house-api' }, 'house-api');
            resp.json({ nome: usuario.nome,
                email: usuario.email,
                perfil: usuario.perfil,
                localizacao: usuario.localizacao,
                createdAt: usuario.createdAt,
                _id: usuario._id,
                accessToken: token });
        }
        else {
            return next(new restify_errors_1.NotAuthorizedError('Acesso invalido'));
        }
    });
};

import * as restify from 'restify';
import {Usuario} from '../models/usuarios/usuarios.model';
import { userInfo } from 'os';
import { NotAuthorizedError } from 'restify-errors';
import * as jwt from 'jsonwebtoken';

export const authenticate: restify.RequestHandler = (req, resp, next) => {
    const {email, password} = req.body
    Usuario.findByEmail(email, '+password')
            .then(usuario => {
                if ( usuario && usuario.matches(password)){                    
                    const token = jwt.sign({sub: email, iss: 'house-api'}, 'house-api')
                    resp.json({nome: usuario.nome, 
                               email: usuario.email, 
                               perfil: usuario.perfil,      
                               localizacao: usuario.localizacao,
                               createdAt: usuario.createdAt,                                                                                    
                               _id: usuario._id,
                               accessToken: token})
                }
                else {
                    return next(new NotAuthorizedError('Acesso invalido'))
                }
            })
}
import * as restify from 'restify';
import { NotFoundError } from 'restify-errors';
import {Router} from '../../../common/router';
import {ModelRouter} from '../../../common/model-router';
import {UltimasAtualizacoesUsuario} from './ultimas-atualizacoes-usuarios-model';

class UltimasAtualizacoesUsuarioRouter extends ModelRouter<UltimasAtualizacoesUsuario> {    
    
    constructor(){
        super(UltimasAtualizacoesUsuario)
    }

    findAll = (req, resp, next) => {
        this.model.find()
            .populate('usuario', 'nome')
            .populate('usuarioContato', 'nome')
            .populate('imovel', 'titulo')
            .then(this.renderAll(resp, next))
            .catch(next)
    }

    applyRoutes(application: restify.Server){
        application.get({path:`${this.basePath}`}, this.findAll)    
        application.get(`${this.basePath}/:id`, [this.validateId, this.findById]) 
        application.post(`${this.basePath}`, [this.save]) 
        application.put(`${this.basePath}/:id`, [this.validateId, this.replace]) 
        application.patch(`${this.basePath}/:id`, [this.validateId, this.update]) 
        application.del(`${this.basePath}/:id`, [this.validateId, this.delete])
    }    
}

export const ultimasAtualizacoesUsuarioRouter = new UltimasAtualizacoesUsuarioRouter()
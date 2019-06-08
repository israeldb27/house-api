import * as restify from 'restify';
import { NotFoundError } from 'restify-errors';
import {Router} from '../../common/router';
import {ModelRouter} from '../../common/model-router';
import {Notificacao} from './notificacaos-model';

class NotificacaoRouter extends ModelRouter<Notificacao> {    
    
    constructor(){
        super(Notificacao)
    }

    findAll = (req, resp, next) => {
        this.model.find()
            .populate('usuario', 'nome')
            .populate('usuarioConvite', 'nome')
            .populate('imovel', 'titulo')
            .then(this.renderAll(resp, next))
            .catch(next)
    }

    applyRoutes(application: restify.Server){
        console.log('chegou aqui');
        application.get({path:`${this.basePath}`}, this.findAll)    
        application.get(`${this.basePath}/:id`, [this.findById]) 
        application.post(`${this.basePath}`, [this.save]) 
        application.put(`${this.basePath}/:id`, [this.validateId, this.replace]) 
        application.patch(`${this.basePath}/:id`, [this.validateId, this.update]) 
        application.del(`${this.basePath}/:id`, [this.validateId, this.delete])
    }    
}

export const notificacaosRouter = new NotificacaoRouter()
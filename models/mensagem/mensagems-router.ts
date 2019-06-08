import * as restify from 'restify';
import { NotFoundError } from 'restify-errors';
import {Router} from '../../common/router';
import {ModelRouter} from '../../common/model-router';
import {Mensagem} from './mensagems-models';

class MensagemRouter extends ModelRouter<Mensagem> {    
    
    constructor(){
        super(Mensagem)
    }

    findAll = (req, resp, next) => {
        this.model.find()
            .populate('usuarioDe', 'nome')                                
            .populate('usuarioPara', 'nome')                                
            .populate('usuarioAutorUltimaMensagem', 'nome')
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

export const mensagemsRouter = new MensagemRouter()
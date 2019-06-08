import * as restify from 'restify';
import { NotFoundError } from 'restify-errors';
import {Router} from '../../../common/router';
import {ModelRouter} from '../../../common/model-router';
import {Parceria} from './parcerias-model';

class ParceriaRouter extends ModelRouter<Parceria> {    
    
    constructor(){
        super(Parceria)
    }

    findAll = (req, resp, next) => {
        this.model.find()
            .populate('usuarioSolicitante', ['nome','perfil'])                    
            .populate('imovel')
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

export const parceriasRouter = new ParceriaRouter()
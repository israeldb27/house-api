import * as restify from 'restify';
import { NotFoundError } from 'restify-errors';
import {Router} from '../../common/router';
import {ModelRouter} from '../../common/model-router';
import {Timeline} from './timeline-model';

class TimelineRouter extends ModelRouter<Timeline> {    
    
    constructor(){
        super(Timeline)
    }

    findAll = (req, resp, next) => {
        this.model.find()
            .populate('usuario', ['nome','perfil'])                    
            .populate('imovel')
            .populate('imovelCompartilhado')
            .populate('usuarioCompartilhado')
            .populate('imovelAnuncio')
            .populate('usuarioAnuncio')
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

export const timelineRouter = new TimelineRouter()
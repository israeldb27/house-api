import * as restify from 'restify';
import { NotFoundError } from 'restify-errors';
import {Router} from '../../common/router';
import {ModelRouter} from '../../common/model-router';
import {Imovel} from './imovels.model';

class ImovelRouter extends ModelRouter<Imovel> {    
    
    constructor(){
        super(Imovel)
    }

    findById = (req, resp, next) => {  
        this.prepareOne( this.model.findById(req.params.id))
                                    .populate('usuario', ['nome','perfil'])  
                                    .then(this.render(resp, next))
                                    .catch(next)
    } 


    findAll = (req, resp, next) => {
        this.model.find()
            .populate('usuario', ['nome','perfil'])            
            .then(this.renderAll(resp, next))
            .catch(next)
    }

    findByUsuario = (req, resp, next) => {
        if (req.query.usuario){
            Imovel.findByUsuario(req.query.usuario)             
                    .then(imovel => {
                        if (imovel){
                            return [imovel]
                        }
                        else 
                            return []
                    })                    
                    .then(this.renderAll(resp, next))
                    .catch(next)
        }
        else {
            next()
        }
    }
  

    applyRoutes(application: restify.Server){
        application.get({path:`${this.basePath}/usuario`}, this.findByUsuario)   
        application.get({path:`${this.basePath}`}, this.findAll)   
        application.get({path:`${this.basePath}`}, this.findAll)    
        application.get(`${this.basePath}/:id`, [this.validateId, this.findById]) 
        application.post(`${this.basePath}`, [this.save]) 
        application.put(`${this.basePath}/:id`, [this.validateId, this.replace]) 
        application.patch(`${this.basePath}/:id`, [this.validateId, this.update]) 
        application.del(`${this.basePath}/:id`, [this.validateId, this.delete])
    }    
}

export const imovelsRouter = new ImovelRouter()
import * as restify from 'restify';
import { NotFoundError } from 'restify-errors';
import { ItemMensagem } from './item-mensagems-model';
import { ModelRouter } from '../../../common/model-router';


class ItemMensagemRouter extends ModelRouter<ItemMensagem> {    
    
    constructor(){
        super(ItemMensagem)
    }

    findAll = (req, resp, next) => {
        this.model.find()
            .populate('usuarioAutor', 'nome')                                            
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

export const itemMensagemsRouter = new ItemMensagemRouter()
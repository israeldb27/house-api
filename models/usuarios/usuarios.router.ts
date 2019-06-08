import * as restify from 'restify';
import { NotFoundError } from 'restify-errors';
import {Router} from '../../common/router';
import {ModelRouter} from '../../common/model-router';
import {Usuario} from './usuarios.model';


class UsuariosRouter extends ModelRouter<Usuario> {    
    
    constructor(){
        super(Usuario)
        this.on('beforeRender', document => {
            document.password = undefined
        })
    }

    applyRoutes(application: restify.Server){

     //   application.get({path:`${this.basePath}`, version: '2.0.0'}, [/*authorize('admin'),*/this.findByEmail, this.findAll])
        application.get({path:`${this.basePath}`, version: '1.0.0'}, this.findAll)
        application.get(`${this.basePath}/:id`, [this.validateId, this.findById]) 
        application.post(`${this.basePath}`, [this.save]) 
        // Obs.: com o metodo PUT vc deve substituir/atualizar todos os campos do request  
        application.put(`${this.basePath}/:id`, [this.validateId, this.replace]) 
        application.patch(`${this.basePath}/:id`, [this.validateId, this.update]) 
        // removendo um documento
        application.del(`${this.basePath}/:id`, [this.validateId, this.delete])

    }    
}

export const usuariosRouter = new UsuariosRouter()
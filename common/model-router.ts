import {Router} from './router';
import * as mongoose from 'mongoose'
import { NotFoundError } from 'restify-errors';
import { parse } from 'path';

// classe generica que será utilizada e contemplará todos os Routes de todos os models a serem criados
export abstract class ModelRouter<D extends mongoose.Document> extends Router {
  
    basePath: string; // variavel global que sera usada para determinar a variavel global

    pageSize: number = 4;

    constructor(protected model: mongoose.Model<D>){
        super()
        this.basePath = `/${model.collection.name}`
    }

    protected prepareOne(query: mongoose.DocumentQuery<D,D>): mongoose.DocumentQuery<D,D> {
        return query
    }

     //metodo usado para os hyperlinks
     envelope(document: any): any {
         let resource = Object.assign({_links:{}}, document.toJSON())
         resource._links.self = `${this.basePath}/${resource._id}`
        return resource
    }

    envelopeAll(documents: any[], options: any = {}): any {
        const resource: any = {
            _links: {
                 self: `${options.url}`   
            },
            items: documents
        } 
        if ( options.page && options.count && options.pageSize) {
            if ( options.page > 1){
                resource._links.previous = `${this.basePath}?_page=${options.page-1}`    
            }

            // checando se precisa exibir ou nao a opcao 'next'
            const remaining = options.count - (options.page * options.pageSize)
            if ( remaining >  0 ){
                resource._links.next = `${this.basePath}?_page=${options.page+1}`
            }
        }
        return resource
    }

    validateId = (req, resp, next) => { 
        if (!mongoose.Types.ObjectId.isValid(req.params.id)){
            next(new NotFoundError('Documento invalido'))
        }
        else {
           next() 
        }
    }

    findAll = (req, resp, next) => { 
        let page = parseInt(req.query._page || 1 )  
        page = page > 0 ? page : 1
        const skip = (page - 1) * this.pageSize
        
        this.model.count({}).exec()
                            .then(count =>this.model.find()
                                                    .skip(skip)
                                                    .limit(this.pageSize)
                                                    .then(this.renderAll(resp, next, {page, count, pageSize: this.pageSize, url: req.url }))   
                                                    .catch(next))  
    }

    findById = (req, resp, next) => {  
        this.prepareOne( this.model.findById(req.params.id))
                                    .then(this.render(resp, next))
                                    .catch(next)
    }    

    save = (req, resp, next) => {  
        let document = new this.model(req.body)
        document.save()
            .then(this.render(resp, next))
            .catch(next)
    }  
    
    replace = (req, resp, next) => {  
        // overwrite - forca a substituir/atualizar todos os campos
        // runValidators - forca a realizar a validacao
        const options = { runValidators: true, overwrite: true} 
        this.model.update({ _id: req.params.id }, req.body, options )
            .exec().then((result): any => {
                if (result.n){ // significa que um documento foi atualizado
                        return this.model.findById(req.params.id)  
                }
                else { // caso nao tenha encontrado nenhum documento
                    throw new NotFoundError('Documento nao encontrado')
                }
            }).then(this.render(resp, next))
            .catch(next)
    }   

    update = (req, resp, next) => { 
        const options = { runValidators: true, new : true } // forca a exibir no response o objeto novo
        this.model.findByIdAndUpdate(req.params.id, req.body)
            .then(this.render(resp, next))
            .catch(next)
    } 
    
    delete = (req, resp, next) => { 
        this.model.remove({_id:req.params.id}).exec().then((cmdResult: any) => {
            if (cmdResult.result.n){ // um documento foi removido com sucesso
                resp.send(204)
            }
            else { // ocorreu algum problema na remocao
                throw new NotFoundError('Documento nao encontrado')
            }
            return next()
        }).catch(next)
    } 
}
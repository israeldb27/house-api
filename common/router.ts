import * as restify from 'restify';
import { EventEmitter } from 'events';

export abstract class Router extends EventEmitter{
    abstract applyRoutes(application: restify.Server)

    //metodo usado para os hyperlinks
    envelope(document: any): any {
        return document
    }

    envelopeAll(documents: any[], options: any = {}): any {
        return documents
    }


    // metodo que vai ser reutilizado
    render(response: restify.Response, next: restify.Next){
        return (document) => {
            if (document){
                this.emit('beforeRender', document)
                response.json(document)
            }
            else {
                response.send(404)
            }
            return next()
        }
    }

    // render que vai ser usado sobre um array de elementos
    renderAll(response: restify.Response, next: restify.Next, options: any = {} ) {
        return (documents: any[]) => {
            if (documents){
                documents.forEach((document, index, array) => {
                    this.emit('beforeRender', document)
                    array[index] = document
                })
                response.json(documents, options)
            }
            else {
                response.json([])
            }
            return next()
        }
    }


  /* -- versao antiga
     renderAll(response: restify.Response, next: restify.Next){
        return (documents: any[]) => {
            if (documents){
                documents.forEach(document => {
                    this.emit('beforeRender', document)
                })
                response.json(documents)
            }
            else {
                response.json([])
            }
        }
    }*/
}
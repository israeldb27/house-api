"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("events");
class Router extends events_1.EventEmitter {
    //metodo usado para os hyperlinks
    envelope(document) {
        return document;
    }
    envelopeAll(documents, options = {}) {
        return documents;
    }
    // metodo que vai ser reutilizado
    render(response, next) {
        return (document) => {
            if (document) {
                this.emit('beforeRender', document);
                response.json(document);
            }
            else {
                response.send(404);
            }
            return next();
        };
    }
    // render que vai ser usado sobre um array de elementos
    renderAll(response, next, options = {}) {
        return (documents) => {
            if (documents) {
                documents.forEach((document, index, array) => {
                    this.emit('beforeRender', document);
                    array[index] = document;
                });
                response.json(documents, options);
            }
            else {
                response.json([]);
            }
            return next();
        };
    }
}
exports.Router = Router;

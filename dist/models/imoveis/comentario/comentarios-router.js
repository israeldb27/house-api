"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_router_1 = require("../../../common/model-router");
const comentarios_model_1 = require("./comentarios-model");
class ComentarioRouter extends model_router_1.ModelRouter {
    constructor() {
        super(comentarios_model_1.Comentario);
        this.findAll = (req, resp, next) => {
            this.model.find()
                .populate('usuarioComentario', ['nome', 'perfil'])
                .populate('imovel', 'titulo')
                .then(this.renderAll(resp, next))
                .catch(next);
        };
        this.findByImovel = (req, resp, next) => {
            if (req.query.imovel) {
                comentarios_model_1.Comentario.findByIdImovel(req.query.imovel)
                    .then(comentario => {
                    if (comentario) {
                        return [comentario];
                    }
                    else
                        return [];
                })
                    .then(this.renderAll(resp, next))
                    .catch(next);
            }
            else {
                next();
            }
        };
    }
    applyRoutes(application) {
        application.get({ path: `${this.basePath}/imovel` }, this.findByImovel);
        application.get({ path: `${this.basePath}` }, this.findAll);
        application.get(`${this.basePath}/:id`, [this.validateId, this.findById]);
        application.post(`${this.basePath}`, [this.save]);
        application.put(`${this.basePath}/:id`, [this.validateId, this.replace]);
        application.patch(`${this.basePath}/:id`, [this.validateId, this.update]);
        application.del(`${this.basePath}/:id`, [this.validateId, this.delete]);
    }
}
exports.comentariosRouter = new ComentarioRouter();

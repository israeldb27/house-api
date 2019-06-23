"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_router_1 = require("../../common/model-router");
const imovels_model_1 = require("./imovels.model");
class ImovelRouter extends model_router_1.ModelRouter {
    constructor() {
        super(imovels_model_1.Imovel);
        this.findById = (req, resp, next) => {
            this.prepareOne(this.model.findById(req.params.id))
                .populate('usuario', ['nome', 'perfil'])
                .then(this.render(resp, next))
                .catch(next);
        };
        this.findAll = (req, resp, next) => {
            this.model.find()
                .populate('usuario', ['nome', 'perfil'])
                .then(this.renderAll(resp, next))
                .catch(next);
        };
        this.findByUsuario = (req, resp, next) => {
            if (req.query.usuario) {
                imovels_model_1.Imovel.findByUsuario(req.query.usuario)
                    .then(imovel => {
                    if (imovel) {
                        return [imovel];
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
        application.get({ path: `${this.basePath}/usuario` }, this.findByUsuario);
        application.get({ path: `${this.basePath}` }, this.findAll);
        application.get({ path: `${this.basePath}` }, this.findAll);
        application.get(`${this.basePath}/:id`, [this.validateId, this.findById]);
        application.post(`${this.basePath}`, [this.save]);
        application.put(`${this.basePath}/:id`, [this.validateId, this.replace]);
        application.patch(`${this.basePath}/:id`, [this.validateId, this.update]);
        application.del(`${this.basePath}/:id`, [this.validateId, this.delete]);
    }
}
exports.imovelsRouter = new ImovelRouter();

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_router_1 = require("../../../common/model-router");
const contatos_models_1 = require("./contatos-models");
class ContatoRouter extends model_router_1.ModelRouter {
    constructor() {
        super(contatos_models_1.Contato);
        this.findAll = (req, resp, next) => {
            this.model.find()
                .populate('usuarioHost')
                .populate('usuarioConvidado')
                .then(this.renderAll(resp, next))
                .catch(next);
        };
    }
    applyRoutes(application) {
        application.get({ path: `${this.basePath}` }, this.findAll);
        application.get(`${this.basePath}/:id`, [this.validateId, this.findById]);
        application.post(`${this.basePath}`, [this.save]);
        application.put(`${this.basePath}/:id`, [this.validateId, this.replace]);
        application.patch(`${this.basePath}/:id`, [this.validateId, this.update]);
        application.del(`${this.basePath}/:id`, [this.validateId, this.delete]);
    }
}
exports.contatoRouters = new ContatoRouter();

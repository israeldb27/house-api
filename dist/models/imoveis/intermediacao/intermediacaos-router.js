"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_router_1 = require("../../../common/model-router");
const intermediacaos_model_1 = require("./intermediacaos-model");
class IntermediacaoRouter extends model_router_1.ModelRouter {
    constructor() {
        super(intermediacaos_model_1.Intermediacao);
        this.findAll = (req, resp, next) => {
            this.model.find()
                .populate('usuarioSolicitante', ['nome', 'perfil'])
                .populate('imovel')
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
exports.intermediacaosRouter = new IntermediacaoRouter();

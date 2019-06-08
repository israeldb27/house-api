"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_router_1 = require("../../../common/model-router");
const visualizacaos_model_1 = require("./visualizacaos-model");
class VisualizacaoRouter extends model_router_1.ModelRouter {
    constructor() {
        super(visualizacaos_model_1.Visualizacao);
        this.findAll = (req, resp, next) => {
            this.model.find()
                .populate('usuarioVisitante', ['nome', 'perfil'])
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
exports.visualizacaosRouter = new VisualizacaoRouter();

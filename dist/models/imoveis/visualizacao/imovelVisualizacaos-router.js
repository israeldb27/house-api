"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_router_1 = require("../../../common/model-router");
const imovel_visualizacaos_model_1 = require("./imovel-visualizacaos-model");
class ImovelVisualizacaoRouter extends model_router_1.ModelRouter {
    constructor() {
        super(imovel_visualizacaos_model_1.ImovelVisualizacao);
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
exports.imovelVisualizacaosRouter = new ImovelVisualizacaoRouter();

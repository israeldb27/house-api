"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_router_1 = require("../../../common/model-router");
const trabalhos_realizados_model_1 = require("./trabalhos-realizados-model");
class TrabalhoRealizadoRouter extends model_router_1.ModelRouter {
    constructor() {
        super(trabalhos_realizados_model_1.TrabalhoRealizado);
        this.findAll = (req, resp, next) => {
            this.model.find()
                .populate('usuario', 'nome')
                .populate('imovel', 'titulo')
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
exports.trabalhoRealizadoRouter = new TrabalhoRealizadoRouter();

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_router_1 = require("../../common/model-router");
const mensagems_models_1 = require("./mensagems-models");
class MensagemRouter extends model_router_1.ModelRouter {
    constructor() {
        super(mensagems_models_1.Mensagem);
        this.findAll = (req, resp, next) => {
            this.model.find()
                .populate('usuarioDe', 'nome')
                .populate('usuarioPara', 'nome')
                .populate('usuarioAutorUltimaMensagem', 'nome')
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
exports.mensagemsRouter = new MensagemRouter();

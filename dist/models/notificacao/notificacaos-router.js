"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_router_1 = require("../../common/model-router");
const notificacaos_model_1 = require("./notificacaos-model");
class NotificacaoRouter extends model_router_1.ModelRouter {
    constructor() {
        super(notificacaos_model_1.Notificacao);
        this.findAll = (req, resp, next) => {
            this.model.find()
                .populate('usuario', 'nome')
                .populate('usuarioConvite', 'nome')
                .populate('imovel', 'titulo')
                .then(this.renderAll(resp, next))
                .catch(next);
        };
    }
    applyRoutes(application) {
        console.log('chegou aqui');
        application.get({ path: `${this.basePath}` }, this.findAll);
        application.get(`${this.basePath}/:id`, [this.findById]);
        application.post(`${this.basePath}`, [this.save]);
        application.put(`${this.basePath}/:id`, [this.validateId, this.replace]);
        application.patch(`${this.basePath}/:id`, [this.validateId, this.update]);
        application.del(`${this.basePath}/:id`, [this.validateId, this.delete]);
    }
}
exports.notificacaosRouter = new NotificacaoRouter();

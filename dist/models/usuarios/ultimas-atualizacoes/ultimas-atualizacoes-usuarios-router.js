"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_router_1 = require("../../../common/model-router");
const ultimas_atualizacoes_usuarios_model_1 = require("./ultimas-atualizacoes-usuarios-model");
class UltimasAtualizacoesUsuarioRouter extends model_router_1.ModelRouter {
    constructor() {
        super(ultimas_atualizacoes_usuarios_model_1.UltimasAtualizacoesUsuario);
        this.findAll = (req, resp, next) => {
            this.model.find()
                .populate('usuario', 'nome')
                .populate('usuarioContato', 'nome')
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
exports.ultimasAtualizacoesUsuarioRouter = new UltimasAtualizacoesUsuarioRouter();

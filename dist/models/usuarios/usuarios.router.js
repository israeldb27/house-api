"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_router_1 = require("../../common/model-router");
const usuarios_model_1 = require("./usuarios.model");
class UsuariosRouter extends model_router_1.ModelRouter {
    constructor() {
        super(usuarios_model_1.Usuario);
        this.on('beforeRender', document => {
            document.password = undefined;
        });
    }
    applyRoutes(application) {
        //   application.get({path:`${this.basePath}`, version: '2.0.0'}, [/*authorize('admin'),*/this.findByEmail, this.findAll])
        application.get({ path: `${this.basePath}`, version: '1.0.0' }, this.findAll);
        application.get(`${this.basePath}/:id`, [this.validateId, this.findById]);
        application.post(`${this.basePath}`, [this.save]);
        // Obs.: com o metodo PUT vc deve substituir/atualizar todos os campos do request  
        application.put(`${this.basePath}/:id`, [this.validateId, this.replace]);
        application.patch(`${this.basePath}/:id`, [this.validateId, this.update]);
        // removendo um documento
        application.del(`${this.basePath}/:id`, [this.validateId, this.delete]);
    }
}
exports.usuariosRouter = new UsuariosRouter();

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const item_mensagems_model_1 = require("./item-mensagems-model");
const model_router_1 = require("../../../common/model-router");
class ItemMensagemRouter extends model_router_1.ModelRouter {
    constructor() {
        super(item_mensagems_model_1.ItemMensagem);
        this.findAll = (req, resp, next) => {
            this.model.find()
                .populate('usuarioAutor', 'nome')
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
exports.itemMensagemsRouter = new ItemMensagemRouter();

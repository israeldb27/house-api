"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server/server");
const usuarios_router_1 = require("./models/usuarios/usuarios.router");
const imovels_router_1 = require("./models/imoveis/imovels.router");
const visualizacaos_router_1 = require("./models/imoveis/visualizacao/visualizacaos-router");
const ofertas_router_1 = require("./models/imoveis/oferta/ofertas-router");
const comentarios_router_1 = require("./models/imoveis/comentario/comentarios-router");
const parcerias_router_1 = require("./models/imoveis/parceria/parcerias-router");
const intermediacaos_router_1 = require("./models/imoveis/intermediacao/intermediacaos-router");
const favoritos_router_1 = require("./models/imoveis/favorito/favoritos-router");
const indicacaos_router_1 = require("./models/imoveis/indicacao/indicacaos-router");
const preferencias_router_1 = require("./models/imoveis/preferencia-localidade/preferencias-router");
const notas_router_1 = require("./models/nota/notas-router");
const notificacaos_router_1 = require("./models/notificacao/notificacaos-router");
const recomendacaos_router_1 = require("./models/usuarios/recomendacao/recomendacaos-router");
const seguidors_router_1 = require("./models/usuarios/seguidor/seguidors-router");
const mensagems_router_1 = require("./models/mensagem/mensagems-router");
const mensagemadmins_router_1 = require("./models/mensagem/admin/mensagemadmins-router");
const contatos_router_1 = require("./models/usuarios/contato/contatos-router");
const itemmensagemadmins_router_1 = require("./models/mensagem/admin/itemmensagemadmins-router");
const item_mensagems_router_1 = require("./models/mensagem/item-mensagem/item-mensagems-router");
const ultimas_atualizacoes_usuarios_router_1 = require("./models/usuarios/ultimas-atualizacoes/ultimas-atualizacoes-usuarios-router");
const trabalhos_realizados_router_1 = require("./models/usuarios/trabalhos-realizados/trabalhos-realizados-router");
const timeline_router_1 = require("./models/timeline/timeline-router");
const server = new server_1.Server();
server.bootstrap([
    imovels_router_1.imovelsRouter,
    usuarios_router_1.usuariosRouter,
    visualizacaos_router_1.visualizacaosRouter,
    ofertas_router_1.ofertasRouter,
    comentarios_router_1.comentariosRouter,
    parcerias_router_1.parceriasRouter,
    intermediacaos_router_1.intermediacaosRouter,
    favoritos_router_1.favoritosRouter,
    indicacaos_router_1.indicacaosRouter,
    preferencias_router_1.preferenciasRouter,
    notas_router_1.notasRouter,
    notificacaos_router_1.notificacaosRouter,
    recomendacaos_router_1.recomendacaosRouter,
    seguidors_router_1.seguidorsRouter,
    mensagems_router_1.mensagemsRouter,
    mensagemadmins_router_1.mensagemAdminsRouter,
    contatos_router_1.contatoRouters,
    itemmensagemadmins_router_1.itemMensagemAdminsRouter,
    item_mensagems_router_1.itemMensagemsRouter,
    ultimas_atualizacoes_usuarios_router_1.ultimasAtualizacoesUsuarioRouter,
    trabalhos_realizados_router_1.trabalhoRealizadoRouter,
    timeline_router_1.timelineRouter
]).then(server => {
    console.log('server is running');
}).catch(error => {
    console.log('Server is failed');
    console.error(error);
    process.exit(1);
});

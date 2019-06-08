import {Server} from './server/server';
import {usuariosRouter} from './models/usuarios/usuarios.router';
import {imovelsRouter} from './models/imoveis/imovels.router';
import {visualizacaosRouter} from './models/imoveis/visualizacao/visualizacaos-router';
import {ofertasRouter} from './models/imoveis/oferta/ofertas-router';
import {comentariosRouter} from './models/imoveis/comentario/comentarios-router'
import {parceriasRouter} from './models/imoveis/parceria/parcerias-router';
import {intermediacaosRouter} from './models/imoveis/intermediacao/intermediacaos-router';
import {favoritosRouter} from './models/imoveis/favorito/favoritos-router';
import {indicacaosRouter} from './models/imoveis/indicacao/indicacaos-router';
import {preferenciasRouter} from './models/imoveis/preferencia-localidade/preferencias-router';
import {notasRouter} from './models/nota/notas-router';
import {notificacaosRouter} from './models/notificacao/notificacaos-router';
import {recomendacaosRouter} from './models/usuarios/recomendacao/recomendacaos-router';
import {seguidorsRouter} from './models/usuarios/seguidor/seguidors-router';
import {mensagemsRouter} from './models/mensagem/mensagems-router'
import {mensagemAdminsRouter} from './models/mensagem/admin/mensagemadmins-router'
import {contatoRouters} from './models/usuarios/contato/contatos-router'
import {itemMensagemAdminsRouter} from './models/mensagem/admin/itemmensagemadmins-router';
import { itemMensagemsRouter } from './models/mensagem/item-mensagem/item-mensagems-router';
import { ultimasAtualizacoesUsuarioRouter } from './models/usuarios/ultimas-atualizacoes/ultimas-atualizacoes-usuarios-router';
import { trabalhoRealizadoRouter } from './models/usuarios/trabalhos-realizados/trabalhos-realizados-router';
import { timelineRouter } from './models/timeline/timeline-router';

const server = new Server()
server.bootstrap([
    imovelsRouter,
    usuariosRouter,
    visualizacaosRouter,
    ofertasRouter,
    comentariosRouter,
    parceriasRouter,
    intermediacaosRouter,
    favoritosRouter,
    indicacaosRouter,
    preferenciasRouter,
    notasRouter,
    notificacaosRouter,
    recomendacaosRouter,
    seguidorsRouter,
    mensagemsRouter,
    mensagemAdminsRouter,
    contatoRouters,
    itemMensagemAdminsRouter,
    itemMensagemsRouter,
    ultimasAtualizacoesUsuarioRouter,
    trabalhoRealizadoRouter,
    timelineRouter
]).then( server => {
    console.log('server is running');
}).catch( error => {
    console.log('Server is failed');
    console.error(error)
    process.exit(1)
})

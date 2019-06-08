import * as mongoose from 'mongoose'
import { Usuario } from '../usuarios/usuarios.model'
import { Imovel } from '../imoveis/imovels.model';

//Criando interface que será usado na Rota
export interface Notificacao extends mongoose.Document {
    usuario: mongoose.Types.ObjectId | Usuario,
    imovel:  mongoose.Types.ObjectId | Imovel,
    usuarioConvite: mongoose.Types.ObjectId | Usuario,
    acao: string,
    descricao: string,
    observacao: string,
    tipoNotificacao: string // // C - convite,  I - imovel,  S - servico, P - plano, U -usuario  (usado apenas para notificar que o usuario fez o cadastro)
}

const notificacaoSchema = new mongoose.Schema ({
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: false
    },
    imovel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Imovel',
        required: false
    },
    usuarioConvite: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: false
    },
    preferencia: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Preferencia',
        required: false
    },
    acao: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    observacao: {
        type: String,
        required: false
    },
    tipoNotificacao: {
        type: String,
        required: true
    },
},
{
   timestamps: true
 });

export const Notificacao = mongoose.model<Notificacao>('Notificacao', notificacaoSchema);
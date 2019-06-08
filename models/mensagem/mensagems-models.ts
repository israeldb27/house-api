import * as mongoose from 'mongoose'
import { Usuario } from '../usuarios/usuarios.model';

//Criando interface que será usado na Rota
export interface Mensagem extends mongoose.Document {
    usuarioDe: mongoose.Types.ObjectId | Usuario,
    usuarioPara: mongoose.Types.ObjectId | Usuario,    
    statusLeitura: string,
    descricaoUltimaMensagem: string,
    usuarioAutorUltimaMensagem: mongoose.Types.ObjectId | Usuario,  
}

const mensagemSchema = new mongoose.Schema ({
    usuarioDe: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    usuarioPara: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: false
    },    
    statusLeitura: {
        type: String,
        required: true
    },
    descricaoUltimaMensagem: {
        type: String,
        required: true
    },
    usuarioAutorUltimaMensagem: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: false
    }
},
{
   timestamps: true
 });

export const Mensagem = mongoose.model<Mensagem>('Mensagem', mensagemSchema);
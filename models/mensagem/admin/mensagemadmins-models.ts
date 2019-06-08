import * as mongoose from 'mongoose'
import { Usuario } from '../../usuarios/usuarios.model';

//Criando interface que será usado na Rota
export interface MensagemAdmin extends mongoose.Document {
    usuarioDe: mongoose.Types.ObjectId | Usuario,
    descricao: string,
    tipoMensagem: string, // {D - duvida, R - reclamacao, S- sugestao, O - outro} 
    titulo: string,
    possuiMensagem: string,
    existemItemMensagemNova: string
}

const mensagemAdminSchema = new mongoose.Schema ({
    usuarioDe: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    tipoMensagem: {
        type: String,
        required: true
    },
    titulo: {
        type: String,
        required: true
    },
    possuiMensagem: {
        type: String,
        required: true
    },
    existemItemMensagemNova: {
        type: String,
        required: true
    }
},
{
   timestamps: true
 });

export const MensagemAdmin = mongoose.model<MensagemAdmin>('MensagemAdmin', mensagemAdminSchema);
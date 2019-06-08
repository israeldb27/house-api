import * as mongoose from 'mongoose'
import { Usuario } from '../../usuarios/usuarios.model';

//Criando interface que será usado na Rota
export interface ItemMensagemAdmin extends mongoose.Document {
    usuarioPara: mongoose.Types.ObjectId | Usuario,
    descricao: string,
    tipoMensagem: string, // {D - duvida, R - reclamacao, S- sugestao, O - outro} 
    titulo: string,
    remetenteAdmin: string, // // S, N
    statusLeitura: string
}

const itemMensagemAdminSchema = new mongoose.Schema ({
    usuarioPara: {
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
    remetenteAdmin: {
        type: String,
        required: true
    },
    statusLeitura: {
        type: String,
        required: true
    }
},
{
   timestamps: true
 });

export const ItemMensagemAdmin = mongoose.model<ItemMensagemAdmin>('ItemMensagemAdmin', itemMensagemAdminSchema);
import * as mongoose from 'mongoose'
import { Usuario } from '../../usuarios/usuarios.model';
import { Mensagem } from '../mensagems-models';


//Criando interface que será usado na Rota
export interface ItemMensagem extends mongoose.Document {
    mensagem: mongoose.Types.ObjectId | Mensagem,
    usuarioAutor: mongoose.Types.ObjectId | Usuario,    
    statusLeitura: string,
    descricao: string
}


const itemMensagemSchema = new mongoose.Schema ({
    mensagem: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Mensagem',
        required: true
    },
    usuarioAutor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: false
    },    
    statusLeitura: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    }
},
{
   timestamps: true
 });

export const ItemMensagem = mongoose.model<ItemMensagem>('ItemMensagem', itemMensagemSchema);
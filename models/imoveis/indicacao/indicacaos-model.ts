import * as mongoose from 'mongoose'
import { Usuario } from '../../usuarios/usuarios.model';
import { Imovel } from '../imovels.model';

//Criando interface que será usado na Rota
export interface Indicacao extends mongoose.Document {
    usuarioEnviaIndicacao: mongoose.Types.ObjectId | Usuario
    usuarioRecebeIndicacao: mongoose.Types.ObjectId | Usuario
    imovel:  mongoose.Types.ObjectId |Imovel,
    observacao: string
}

const indicacaoSchema = new mongoose.Schema ({
    usuarioEnviaIndicacao: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    usuarioRecebeIndicacao: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    imovel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Imovel',
        required: true
    },
    observacao: {
        type: String,
        required: false
    }
},
{
   timestamps: true
 });

export const Indicacao = mongoose.model<Indicacao>('Indicacao', indicacaoSchema);
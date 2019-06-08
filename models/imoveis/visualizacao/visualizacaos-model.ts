import * as mongoose from 'mongoose'
import { Usuario } from '../../usuarios/usuarios.model';
import { Imovel } from '../imovels.model';

//Criando interface que será usado na Rota
export interface Visualizacao extends mongoose.Document {
    usuarioVisitante: mongoose.Types.ObjectId | Usuario
    imovel:  mongoose.Types.ObjectId |Imovel
}

const visualizacaoSchema = new mongoose.Schema ({
    usuarioVisitante: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    imovel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Imovel',
        required: true
    }
},
{
   timestamps: true
 });

export const Visualizacao = mongoose.model<Visualizacao>('Visualizacao', visualizacaoSchema);

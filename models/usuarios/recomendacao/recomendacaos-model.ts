import * as mongoose from 'mongoose'
import { Usuario } from '../usuarios.model';

//Criando interface que será usado na Rota
export interface Recomendacao extends mongoose.Document {
    usuario: mongoose.Types.ObjectId | Usuario,
    usuarioRecomendado: mongoose.Types.ObjectId | Usuario,
    status: string, // { E - enviado; A - aceito}
    statusLeitura: string, // { N - novo, L -lido}
    descricao: string
}


const recomendacaoSchema = new mongoose.Schema ({
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    usuarioRecomendado: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: false
    },
    status: {
        type: String,
        required: true
    },
    statusLeitura: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: false
    }
},
{
   timestamps: true
 });

export const Recomendacao = mongoose.model<Recomendacao>('Recomendacao', recomendacaoSchema);
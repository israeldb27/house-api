import * as mongoose from 'mongoose'
import { Usuario } from '../usuarios.model';

//Criando interface que será usado na Rota
export interface Seguidor extends mongoose.Document {
    usuarioSeguidor: mongoose.Types.ObjectId | Usuario,
    usuarioSeguindo: mongoose.Types.ObjectId | Usuario,
    status: string
}

const seguidorSchema = new mongoose.Schema ({
    usuarioSeguidor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    usuarioSeguindo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: false
    },
    status: {
        type: String,
        required: true
    }
},
{
   timestamps: true
 });

export const Seguidor = mongoose.model<Seguidor>('Seguidor', seguidorSchema);
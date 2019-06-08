import * as mongoose from 'mongoose'
import { Usuario } from '../usuarios/usuarios.model'
import { Imovel } from '../imoveis/imovels.model';
import {Preferencia} from '../imoveis/preferencia-localidade/preferencias-model';

//Criando interface que será usado na Rota
export interface Nota extends mongoose.Document {
    usuario: mongoose.Types.ObjectId | Usuario,
    imovel:  mongoose.Types.ObjectId | Imovel,
    preferencia: mongoose.Types.ObjectId | Preferencia,
    acao: string,
    descricao: string
}

const notaSchema = new mongoose.Schema ({
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
    }
},
{
   timestamps: true
 });

export const Nota = mongoose.model<Nota>('Nota', notaSchema);
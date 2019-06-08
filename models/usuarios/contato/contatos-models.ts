import * as mongoose from 'mongoose'
import { Usuario } from '../usuarios.model';

/*
    Status: { Convidado: 'C', Fechado: 'F' }

    StatusLeitura: { Novo: 'N', Lido: 'L' }

*/

//Criando interface que será usado na Rota
export interface Contato extends mongoose.Document {
    usuarioHost: mongoose.Types.ObjectId | Usuario,
    usuarioConvidado: mongoose.Types.ObjectId | Usuario,
    status: string,
    statusLeitura: string
}

const contatoSchema = new mongoose.Schema ({
    usuarioHost: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    usuarioConvidado: {
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
    }
},
{
   timestamps: true
 });

export const Contato = mongoose.model<Contato>('Contato', contatoSchema);
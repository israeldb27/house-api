import * as mongoose from 'mongoose'
import { Usuario } from '../../usuarios/usuarios.model';
import { Imovel } from '../imovels.model';

//Criando interface que será usado na Rota
export interface Preferencia extends mongoose.Document {
    usuario: mongoose.Types.ObjectId | Usuario,    
    localizacao: string,
    latitude: number
    longitude: number,
    acaoImovel: string, // venda, aluguel
    statusImovel: string //novo, usado e lancamento
}

const preferenciaSchema = new mongoose.Schema ({
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    localizacao: {
        type: String,
        required: false
    },
    latitude: {
        type: Number,
        required: false
    },
    longitude: {
        type: Number,
        required: false
    },
    acaoImovel: {
        type: String,
        required: false
    },
    statusImovel: {
        type: String,
        required: false
    },
},
{
   timestamps: true
 });

export const Preferencia = mongoose.model<Preferencia>('Preferencia', preferenciaSchema);
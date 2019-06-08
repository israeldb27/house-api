import * as mongoose from 'mongoose'
import { Usuario } from '../../usuarios/usuarios.model';
import { Imovel } from '../imovels.model';

//Criando interface que será usado na Rota
export interface Parceria extends mongoose.Document {
    status: string,
    statusLeitura: string,    
    usuarioSolicitante: mongoose.Types.ObjectId | Usuario
    imovel:  mongoose.Types.ObjectId |Imovel,
    obs: string
}

/*
    Status: { Solicitado: 'S', Fechado: 'F'}
    
    StatusLeitura: { Novo: 'N', Leitura: 'L'}
*/
const parceriaSchema = new mongoose.Schema ({
    usuarioSolicitante: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    imovel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Imovel',
        required: true
    },
    status: {
        type: String,
        required: true
    },
    statusLeitura: {
        type: String,
        required: true
    },
    obs: {
        type: String,
        required: false
    },
},
{
   timestamps: true
 });

export const Parceria = mongoose.model<Parceria>('Parceria', parceriaSchema);

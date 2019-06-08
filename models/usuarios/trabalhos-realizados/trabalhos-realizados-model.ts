import * as mongoose from 'mongoose'
import { Usuario } from '../usuarios.model';
import { Imovel } from '../../imoveis/imovels.model';


/*
    Tipo: 'V' : usuario conseguiu vender imóvel
          'A': usuario conseguiu alugar imóvel          
          'T': usuario conseguiu alugar por temporada o imóvel
*/
//Criando interface que será usado na Rota
export interface TrabalhoRealizado extends mongoose.Document {
    usuario: mongoose.Types.ObjectId | Usuario,    
    tipo: string, 
    imovel: mongoose.Types.ObjectId | Imovel,        
    descricao: string,
}

const trabalhoRealizadoSchema = new mongoose.Schema ({
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    imovel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Imovel',
        required: false
    },    
    descricao: {
        type: String,
        required: false
    }
},
{
   timestamps: true
 });

 export const TrabalhoRealizado = mongoose.model<TrabalhoRealizado>('TrabalhoRealizado', trabalhoRealizadoSchema);
import * as mongoose from 'mongoose'
import { Usuario } from '../../usuarios/usuarios.model';
import { Imovel } from '../imovels.model';

//Criando interface que será usado na Rota
export interface Favorito extends mongoose.Document {
    usuarioFavorito: mongoose.Types.ObjectId | Usuario
    imovel:  mongoose.Types.ObjectId |Imovel
}

const favoritoSchema = new mongoose.Schema ({
    usuarioFavorito: {
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

export const Favorito = mongoose.model<Favorito>('Favorito', favoritoSchema);
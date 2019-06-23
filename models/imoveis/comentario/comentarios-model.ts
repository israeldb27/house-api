import * as mongoose from 'mongoose'
import { Usuario } from '../../usuarios/usuarios.model';
import { Imovel } from '../imovels.model';

//Criando interface que será usado na Rota
export interface Comentario extends mongoose.Document {
    comentario: string,
    usuarioComentario: mongoose.Types.ObjectId | Usuario
    imovel:  mongoose.Types.ObjectId |Imovel
}

export interface ComentarioModel extends mongoose.Model<Comentario> {
    findByIdImovel(imovel: string): Promise<Comentario>
}

const comentarioSchema = new mongoose.Schema ({
    comentario: {
        type: String,
        required: true
    },
    usuarioComentario: {
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

 comentarioSchema.statics.findByIdImovel = function(imovel: string){
    return this.find({imovel}).populate('usuarioComentario', ['nome','perfil'])  
 }

export const Comentario = mongoose.model<Comentario, ComentarioModel>('Comentario', comentarioSchema);
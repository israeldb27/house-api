import * as mongoose from 'mongoose'
import { Usuario } from '../../usuarios/usuarios.model';
import { Imovel } from '../imovels.model';

export interface OfertaModel extends mongoose.Model<Oferta> {
    findByImovelAndUsuario(imovel: string, usuario: string): Promise<Oferta>
}

//Criando interface que será usado na Rota
export interface Oferta extends mongoose.Document {
    valorOferta: number,
    usuarioOferta: mongoose.Types.ObjectId | Usuario
    imovel:  mongoose.Types.ObjectId |Imovel,
    observacao: string
}

const ofertaSchema = new mongoose.Schema ({
    valorOferta:{
        type: Number,
        required: true,
        default: 0
    },
    usuarioOferta: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    imovel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Imovel',
        required: true
    },
    observacao:{
        type: String,
        required: false
    },
},
{
   timestamps: true
 });

 ofertaSchema.statics.findByImovelAndUsuario = function(imovel: string, usuario: string) {
    return this.findOne({imovel : imovel, usuarioOferta: usuario})
 }

export const Oferta = mongoose.model<Oferta, OfertaModel>('Oferta', ofertaSchema);
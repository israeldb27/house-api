import * as mongoose from 'mongoose'
import { Usuario } from '../../usuarios/usuarios.model';
import { Imovel } from '../imovels.model';

//Criando interface que será usado na Rota
export interface Intermediacao extends mongoose.Document {
    status: string,
    statusLeitura: string,   
    usuarioSolicitante: mongoose.Types.ObjectId | Usuario
    imovel:  mongoose.Types.ObjectId |Imovel
}

export interface IntermediacaoModel extends mongoose.Model<Intermediacao> {
    findByImovelAndUsuario(imovel: string, usuario: string): Promise<Intermediacao>
}

/*
    Status: { Solicitado: 'S', Fechado: 'F'}    
    StatusLeitura: { Novo: 'N', Leitura: 'L'}
*/

const intermediacaoSchema = new mongoose.Schema ({
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
},
{
   timestamps: true
 });

 intermediacaoSchema.statics.findByImovelAndUsuario = function(imovel: string, usuario: string) {
    return this.findOne({imovel : imovel, usuarioSolicitante: usuario})
 }

export const Intermediacao = mongoose.model<Intermediacao, IntermediacaoModel>('Intermediacao', intermediacaoSchema);

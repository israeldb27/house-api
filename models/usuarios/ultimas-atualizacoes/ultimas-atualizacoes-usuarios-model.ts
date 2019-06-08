import * as mongoose from 'mongoose'
import { Usuario } from '../../usuarios/usuarios.model';
import { Imovel } from '../../imoveis/imovels.model';

/*
    Tipo: 'CO': 'estabelecimento de um novo contato
          'CI': 'criação de um novo imovel
          'AI': 'atualização de informações  do imovel'
          'AP': 'atualização de informações pessoais do usuario   
*/

//Criando interface que será usado na Rota
export interface UltimasAtualizacoesUsuario extends mongoose.Document {
    usuario: mongoose.Types.ObjectId | Usuario,    
    tipo: string, 
    imovel: mongoose.Types.ObjectId | Imovel,        
    descricao: string,
    usuarioContato: mongoose.Types.ObjectId | Usuario,    
}

const ultimasAtualizacoesSchema = new mongoose.Schema ({
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
    },
    usuarioContato: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: false
    },
},
{
   timestamps: true
 });

 export const UltimasAtualizacoesUsuario = mongoose.model<UltimasAtualizacoesUsuario>('UltimasAtualizacoesUsuario', ultimasAtualizacoesSchema);
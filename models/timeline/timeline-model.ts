import * as mongoose from 'mongoose'
import { Usuario } from '../usuarios/usuarios.model';
import { Imovel } from '../imoveis/imovels.model';


/*
    Obs.: O campo 'tipoTimeline' serve para designar que tipo de informação está sendo compartilhado na timeline do usuario

    Tipo Timeline:
                    'IMO' --> imovel
                    'USU' --> usuario
                    'TXT' --> texto digitado e postado pelo usuario em sua timeline
                    'YTB' --> video no youtube       
                    'AIM' --> anuncio de imóvel            
                    'AUS' --> anuncio de usuario (anuncio patrocinado, por exemplo, de uma imobiliaria querendo ganhar destaque)

*/

//Criando interface que será usado na Rota
export interface Timeline extends mongoose.Document {
    usuario: mongoose.Types.ObjectId | Usuario,
    tipoTimeline: string,    
    textPost: string,
    urlYouTube: string,
    urlImagem: string, // pode ser a imagem de qualquer coisa. Pode ser, por exemplo, a foto de um simples imovel ou de um evento de feirao de imoveis
    imovelCompartilhado:  mongoose.Types.ObjectId |Imovel,
    usuarioCompartilhado: mongoose.Types.ObjectId | Usuario,
    usuarioAnuncio: mongoose.Types.ObjectId | Usuario,
    imovelAnuncio: mongoose.Types.ObjectId | Imovel
}

const timelineSchema = new mongoose.Schema ({    
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    tipoTimeline:{
        type: String,
        required: true        
    },
    textPost:{
        type: String,
        required: false        
    },
    urlYouTube:{
        type: String,
        required: false        
    },
    urlImagem:{
        type: String,
        required: false        
    },
    imovelCompartilhado: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Imovel',
        required: false
    },
    usuarioCompartilhado: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: false
    },
    imovelAnuncio: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Imovel',
        required: false
    },
    usuarioAnuncio: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: false
    },
},
{
   timestamps: true
 });

export const Timeline = mongoose.model<Timeline>('Timeline', timelineSchema);
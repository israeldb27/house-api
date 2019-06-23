import * as mongoose from 'mongoose'
import {environment} from '../../common/environment';
import * as bcrypt from 'bcrypt';

//Criando interface que será usado na Rota
export interface Usuario extends mongoose.Document {    
    nome: string,
    email: string,
    password: string,
    perfil: string,
    cpf: string,
    cnpj: string,
    creci: string,
    descricao: string,
    localizacao: string,
    quantTotalImoveis: 0,
    quantTotalContatos: 0,
    quantTotalSeguidores: 0,
    matches(password: string): boolean
}

export interface UsuarioModel extends mongoose.Model<Usuario> {

    findByEmail(email: string, projection?: string): Promise<Usuario>

    findByLogin(email: string, password: string): Promise<Usuario>
}

// definindo o schema (documento do mongo) do Usuario
const usuarioSchema = new mongoose.Schema ({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    },
    password: {
        type: String,
        //select: false,
        select: true,
        required: true
    },
    perfil: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: false
    },
    cnpj: {
        type: String,
        required: false
    },
    creci: {
        type: String,
        required: false
    },
    descricao: {
        type: String,
        required: false
    },
    localizacao: {
        type: String,
        required: false
    },
    quantTotalImoveis: {
        type: Number,
        required: false,
        default: 0
    },
    quantTotalContatos: {
        type: Number,
        required: false,
        default: 0
    },
    quantTotalSeguidores: {
        type: Number,
        required: false,
        default: 0
    }
},
{
   timestamps: true
 });

//INICIO -  definindo os middlewares 

// middleware nos metodos PUT e PATCH - para quando o password for modificado
const updateMiddleware = function(next){
    if ( !this.getUpdate().password){
        next()
    }
    else {
        hashPassword(this.getUpdate(), next)
    }
}

// middleware utilizado quando o metodo POST eh acionado
const saveMiddleware = function(next) {
    const usuario: Usuario = this
    if (!usuario.isModified('password')){
        next()
    }
    else {
        hashPassword(usuario, next)
    }
}
//FIM -  definindo os middlewares 

// criando uma funcao hash para o password que vai ser reutilizada
const hashPassword = (obj, next) => {
    bcrypt.hash( obj.password, environment.security.saltRounds)
    .then( hash => {
        obj.password = hash
        next()
    })
}

// metodo estatico do Documento para buscar por email
usuarioSchema.statics.findByEmail = function(email: string, projection: string){
    return this.findOne({email}, projection) //{email: email}
}


usuarioSchema.methods.matches = function(password: string): boolean {
    return bcrypt.compareSync(password, this.password)
}

usuarioSchema.pre('save', saveMiddleware)
usuarioSchema.pre('findOneAndUpdate', updateMiddleware);
usuarioSchema.pre('update', updateMiddleware);

export const Usuario = mongoose.model<Usuario, UsuarioModel>('Usuario', usuarioSchema)
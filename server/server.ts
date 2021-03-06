import * as restify from 'restify';
import {environment} from '../common/environment';
import {Router} from '../common/router';
import * as mongoose from 'mongoose';
import {handleError} from './error.handler'
//import {tokenParser} from '../security/token.parser'
import * as corsMiddleware from "restify-cors-middleware";  


const cors = corsMiddleware({  
  origins: ["*"],
  allowHeaders: ["*"],
  exposeHeaders: ["*"]
});


export class Server {

    application: restify.Server

    initializeDb(): mongoose.MongooseThenable{
     (<any>mongoose).Promise = global.Promise
      return mongoose.connect(environment.db.url, {
        useMongoClient: true
      })
    }

    initRoutes(routers: Router[]): Promise<any>{
        return new Promise((resolve, reject)=>{
          try{
    
            this.application = restify.createServer({
              name: 'house-api',
              version: '1.0.0'
             /* certificate: fs.readFileSync('./security/keys/cert.pem'),
              key: fs.readFileSync('./security/keys/key.pem'),*/
            })           
    
            this.application.use(restify.plugins.queryParser())

            // convertendo os objetos que vem para a aplicacao num objeto json
            this.application.use(restify.plugins.bodyParser())

            let allowCrossDomain = function(req, res, next) {
              res.header('Access-Control-Allow-Origin', "*");
              res.header('Access-Control-Allow-Headers', "*");
              next();
            }           

            this.application.use(allowCrossDomain);

            // usado no parseamento do Token na autenticacao 
      //      this.application.use(tokenParser)

            this.application.pre(cors.preflight);  
            this.application.use(cors.actual);  

            
    
            //routes
            for ( let route of routers){
                route.applyRoutes(this.application)
            }
    
            this.application.listen(environment.server.port, ()=>{
               resolve(this.application)
            })

            // para tratamento de erro
            this.application.on('restifyError', handleError)
    
          }catch(error){
            reject(error)
          }
        })
      }
    
    bootstrap(routers: Router[] = []): Promise<Server>{        
        // inicializando a conexao com BD. Se a conexao estiver OK entao as rotas serao inicializadas
        return this.initializeDb().then(() =>
        this.initRoutes(routers).then(() => this)
      )         
    }

    shutdown() {
      return mongoose.disconnect().then(() => this.application.close())
    }
}
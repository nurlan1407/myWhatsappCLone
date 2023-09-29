import { Sequelize } from 'sequelize-typescript'
import { User } from './models'

class Database{
    private POSTGRES_DB = process.env.POSTGRES_DB as string
    private POSTGRES_HOST =process.env.POSTGRES_HOST as string
    private POSTGRES_PORT = process.env.POSTGRES_PORT as unknown as number
    private POSTGRES_USER = process.env.POSTGRES_USER as unknown as string
    private POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD as string

    
    public sequelize:Sequelize|undefined
    
    constructor(){
        this.connectToPGSQL().then(r =>{} )
    }
    public async connectToPGSQL(){
        try{
            this.sequelize = new Sequelize({
                database:this.POSTGRES_DB,
                host:this.POSTGRES_HOST,
                port:this.POSTGRES_PORT,
                username:this.POSTGRES_USER,
                password:this.POSTGRES_PASSWORD,
                dialect:"postgres",
                logging:true,
                models:[User]
            })
            await this.sequelize.authenticate()
            await this.sequelize.sync()
            console.log('Connected to POSTGRESQL');
        }catch(e){
            console.log('Connection to POSTGERSQL failed' + e);
        }
    }
}

const connection = new Sequelize({
    dialect:"postgres",
    host:"localhost",
    storage:":memory",
    username:"postgres",
    password:"admin",
    database:"whatsapp",
    logging:true,
})



export default Database
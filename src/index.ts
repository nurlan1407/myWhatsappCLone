import express, { Express, Request, Response, Application } from 'express';
import Database from '@App/db.config';
import cors from 'cors';
import bodyParser from 'body-parser';
import passport from 'passport'
import userRouter from './routes/user';
require('dotenv').config()


//For env File 

const app: Application = express();


const allowedOrigins = ['http://localhost:5000'];

const corsOptions: cors.CorsOptions = {
  origin: allowedOrigins
};

app.use(passport.initialize())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors(corsOptions))
app.use(bodyParser.json())

app.use('/user', userRouter)


const port = 5001

const start = async (): Promise<void> => {
  try {
    const db = new Database()
    await db.connectToPGSQL()
    app.listen(port, () => {
      console.log(`Server is Fire at http://localhost:${port}`);

    })
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}


void start()


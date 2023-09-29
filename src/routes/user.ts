import { Router, Request,Response } from 'express'
import Login from '@App/controllers/User/Login'
import passport from 'passport'
import '@App/services/passport/passportService'


const userRouter = Router()

userRouter.post("/login", Login.perform)
userRouter.post("/uploadPhoto", (req:Request,res:Response)=>{})

export default userRouter
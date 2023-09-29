import { Request, Response, NextFunction } from 'express'
import { validationResult } from 'express-validator'
import { User } from '@App/models'
import userRepository from '@App/repository/userRepository'
import { tokenService } from '@App/services/tokenService'   


class Login {
    public static async perform(req: Request, res: Response, next: NextFunction) {
        try {
            console.log(req.body);
            
            const { email, displayName, avatarUrl } = req.body
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.json({ msg: "Invalid credentials" }).status(400)
            }
            const user = null
            if (!user) {
                //create newUser but wihout any name or avatar
                const newUser = new User()
                newUser.avatarUrl = avatarUrl
                newUser.displayName = displayName
                newUser.email = email
                console.log(newUser);
                
                const newUserInstance = await userRepository.save(newUser)
                const accessToken = tokenService.signTokens(newUserInstance.id, newUserInstance.email).accessToken
                return res.json({ msg: "no user already exists", ...newUserInstance, access_token:accessToken}).status(201)
            }else{
                // const accessToken = tokenService.signTokens(user.id,user.email).accessToken
                // return res.json({msg:"user exists", ...user, access_token:accessToken})
            }
        } catch (e) {
            return next(e)
        }
    }
}

export default Login
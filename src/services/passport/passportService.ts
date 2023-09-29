import passport from 'passport'
import passportJWT from 'passport-jwt'
import { User } from '@App/models';

const JwtStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const TOKEN_KEY = process.env.TOKEN_SECRET as string | "s"



passport.use('jwt-strategy', new JwtStrategy({
    jwtFromRequest:ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey:'ll'
},async(jwtToken,done)=>{
    const user =await User.findByPk(jwtToken.id)
    if (user) {
        return done(null, user);
    } else {
        return done(null, false);
    }
}))

import { User } from './model'

export const getUserGoogle = async(access_token:string)=>{
    try{
        const response = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${access_token}`, {
        method:"GET",
        headers: {
            Authorization: `Bearer ${access_token}`,
            Accept: 'application/json'
        }
    })
    const data = await response.json()
    const {email, family_name, given_name, picture} = data
    const user:User={
        displayName:`${given_name} ${family_name}`,
        avatar:picture,
        email:email
    }
    return user
    }catch(e){
        return e
    }
    
}
import { createAsyncThunk } from '@reduxjs/toolkit'
import { User } from './model'
import { ErrorResponse } from '../types'
import { dataURLtoFile } from 'utils/createFile'
import { body } from 'express-validator'

export const getUserGoogle = async (access_token: string) => {
    try {
        const response = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${access_token}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${access_token}`,
                Accept: 'application/json'
            }
        })
        const data = await response.json()
        const { email, family_name, given_name, picture,tag } = data
        const user: User = {
            tag:tag,
            displayName: `${given_name} ${family_name}`,
            avatarUrl: picture,
            email: email,
            bio: ""
        }
        return user
    } catch (e) {
        return e
    }
}

export const login = createAsyncThunk<User, User,{rejectValue:ErrorResponse}>("user/login",
    async(reqBody, thunkApi) =>{
        try{
            const reqUser:User = {
                tag:reqBody.tag,
                email:reqBody.email,
                displayName:reqBody.displayName,
                bio:reqBody.bio,
                avatarUrl:reqBody.avatarUrl
            }
            const response = await fetch('http://localhost:5001/user/login', {
                method: "POST",
                body: JSON.stringify(reqUser),
                headers:{
                    "Content-type":"application/json"
                }
            })
            const data = await response.json()
            
            
            if (!response.ok) {
                return thunkApi.rejectWithValue({ msg: data.msg })
            }
            const user:User = { tag:data.tag,displayName:data.displayName, email: data.email, avatarUrl:data.avatar_url, bio:data.bio}
            if(response.status == 200) localStorage.setItem("access_token",data.access_token)
            return user
        }catch(e){
            return thunkApi.rejectWithValue({msg:e})
        }
    }
)


export const createProfile = createAsyncThunk<User, User, { rejectValue: ErrorResponse }>("user/register",
    async (reqBody, thunkApi) => {
        try {
            console.log(reqBody);
            
            const { avatarUrl, displayName, email, bio } = reqBody
            var formData = new FormData()
            const reqUser:User = {
                tag:reqBody.tag,
                email:reqBody.email,
                displayName:reqBody.displayName,
                bio:reqBody.bio,
                avatarUrl:reqBody.avatarUrl
            }
            if (avatarUrl.startsWith('data:image/')) {
                //it is a file image so i delete image url from requser (чтоб наверняка)
                reqUser.avatarUrl = ''
                const nameWithoutSpaces = displayName.replace(/\s/g, ''); // Removes all spaces
                const fileName = nameWithoutSpaces + Date.now()
                const avatarFile = dataURLtoFile(avatarUrl, fileName)
                formData.append("avatarFile", avatarFile)
                //потому что пользователь добавил свой в формдату я убираю его с рек боди
            }
         
            formData.append("user", JSON.stringify(reqUser))
            const response = await fetch("http://localhost:5001/user/boarding", {
                method: "POST",
                body: formData,
            })
            const data = await response.json()
            
            if (!response.ok) {
                return thunkApi.rejectWithValue({ msg: data.msg })
            }
            const createdProfile:User ={
                tag:data.tag,
                displayName:data.displayName,
                email:data.email,
                avatarUrl:data.avatarUrl,
                bio:data.bio
            }
        
            const accessToken = data.access_token
            localStorage.setItem('access_token', accessToken) 
            return createdProfile
        } catch (e) {
            return thunkApi.rejectWithValue({ msg: e })
        }
    }
)
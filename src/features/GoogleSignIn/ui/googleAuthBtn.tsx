import React, { FC } from 'react'
import Button from 'shared/ui/button'
import GoogleIcon from 'public/icons/icon_google.svg'
import { GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google'
import { getUserGoogle } from 'entities/user/api'
import { AppDispatch, UseAppSelector } from 'store'
import { setUser } from 'entities/user/slice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const GoogleAuthBtn: FC = ({ }) => {
    const navigate = useNavigate()
    const dispatch:AppDispatch= useDispatch()
    const login = useGoogleLogin({
        onSuccess: async(responseCode) => {
             const newUser = await getUserGoogle(responseCode.access_token)
             dispatch(setUser(newUser))
             navigate('/onBoarding') 
        },
        onError: (error) => alert("login failer" + error)
    });

    return (
        <Button onClick={login} className='flex justify-between items-center gap-5'>
            <GoogleIcon width={24} height={24} /><span>Sign in with google</span>
        </Button>
    )
}

export default GoogleAuthBtn;
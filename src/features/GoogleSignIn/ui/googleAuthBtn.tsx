import React, { FC } from 'react'
import Button from 'shared/ui/button'
import GoogleIcon from 'public/icons/icon_google.svg'
import { GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google'
import { getUserGoogle } from 'entities/user/api'
import { AppDispatch, UseAppSelector } from 'store'
import { setUser } from 'entities/user/slice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ThunkDispatch } from '@reduxjs/toolkit'
import { SliceState } from 'store'
import { User } from 'entities/user/model'
import { AnyAction } from '@reduxjs/toolkit'
import { login } from 'entities/user/api'

const GoogleAuthBtn: FC = ({ }) => {
    const navigate = useNavigate()
    const dispatch:ThunkDispatch<SliceState<User>,undefined,AnyAction> = useDispatch()
    const onLogin = useGoogleLogin({
        onSuccess: async (responseCode) => {
            const newUser = await getUserGoogle(responseCode.access_token)
            await dispatch(login(newUser))
            dispatch(setUser(newUser))
            navigate('/onBoarding')
        },
        onError: (error) => alert("login failer" + error)
    });

    return (
        <div className='mt-5'>
            <Button onClick={onLogin} className='flex justify-between items-center gap-5'>
                <GoogleIcon width={24} height={24} /><span>Sign in with google</span>
            </Button>
        </div>

    )
}

export default GoogleAuthBtn;
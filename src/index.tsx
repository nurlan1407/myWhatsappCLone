import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
import Authorization from 'pages/Authorization/ui/Authorization'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Login from 'pages/Login/ui/Login'
import { GoogleOAuthProvider } from '@react-oauth/google'
import store from './store/store'
const root = document.getElementById('root')
ReactDom.render(
    <Provider store={store}>
        <GoogleOAuthProvider clientId='215003568143-rt1quvh853rvu34nqb9e21f9sfkca8dg.apps.googleusercontent.com'>
            <BrowserRouter>
                <Routes>
                    <Route path='onBoarding' element={<Authorization />} />
                    <Route path='login' element={<Login />}></Route>
                </Routes>
            </BrowserRouter>
        </GoogleOAuthProvider>
    </Provider>
    ,
    root
)

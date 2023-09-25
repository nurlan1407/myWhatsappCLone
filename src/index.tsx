import React from 'react'
import ReactDom from 'react-dom'
import './index.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LoginPage } from 'pages/Login'
import { RegisterPage } from 'pages/Register'

const root = document.getElementById('root')
ReactDom.render(

    <BrowserRouter>
    <div className='app'>
        <Routes>
            <Route path="register" element={<RegisterPage />}></Route>
            <Route path="login" element={<LoginPage />}></Route>
            {/* <Route path=""></Route>
        <Route path="register"></Route> */}
        </Routes>
        </div>
    </BrowserRouter>

    ,
    root
)

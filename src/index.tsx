import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
import Authorization from 'pages/Authorization/ui/Authorization'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Login from 'pages/Login/ui/Login'

const root = document.getElementById('root')
ReactDom.render(
    <BrowserRouter>
        <Routes>
            <Route path='onBoarding' element={<Authorization/>}/>
            <Route path='login' element={<Login/>}></Route>
        </Routes>
    </BrowserRouter>
    ,
    root
)

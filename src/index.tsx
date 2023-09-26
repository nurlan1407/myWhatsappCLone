import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
import Authorization from 'pages/Authorization/ui/Authorization'
import { BrowserRouter,Routes, Route } from 'react-router-dom'

const root = document.getElementById('root')
ReactDom.render(
    <BrowserRouter>
        <Routes>
            <Route path='auth' element={<Authorization/>}/>
        </Routes>
    </BrowserRouter>
    ,
    root
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Globalcontext from './Components/utils/global.context'
import './index.css'
import App from './App'



ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Globalcontext>
            <App />
        </Globalcontext>
    </BrowserRouter>
)
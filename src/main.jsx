import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import Navbar from './Navbar.jsx'
import Login from './Login.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Login/>
    </React.StrictMode>,
)

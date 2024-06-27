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
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/about" element={<App/>}/>
                <Route path="/Login" element={<Login/>}/>
            </Routes>
        </Router>
    </React.StrictMode>,
)

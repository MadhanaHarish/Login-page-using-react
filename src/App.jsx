import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login.jsx';
import Signin from './Signin.jsx';
import Homepage from './Homepage.jsx';

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route path="/signup" element={<Signin />} />
                <Route path="/homepage" element={<Homepage />} />
            </Routes>
        </Router>
    );
}

export default App;

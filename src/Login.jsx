import React from 'react';
import './Login.css';
import {useNavigate} from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        navigate('/homepage');
    };

    return (
        <div className="container-fluid row g-0 w-100 background-image">
            <div className="col-lg-6 d-flex justify-content-start align-items-center vh-lg-100">
                <div className="container px-lg-5">
                    <h1 className="text-success">Cooking Blog</h1>
                    <h5 className="pt-2">“Good food is very often, even most often, simple food.”</h5>
                </div>
            </div>

            <div className="col-lg-6 d-lg-flex justify-content-end">
                <div className="container d-flex justify-content-center align-items-center vh-lg-100">
                    <div className="card p-4 w-100" style={{ maxWidth: '400px' }}>
                        <form onSubmit={handleLogin}>
                            <h5 className="text-center mb-4">Log in</h5>
                            <div className="mb-3">
                                <input type="email" className="form-control" placeholder="Enter your email" />
                            </div>
                            <div className="mb-3">
                                <input type="password" className="form-control" placeholder="Enter your password" />
                            </div>
                            <div className="d-grid mb-3">
                                <input type="submit" value="Log in" className="btn btn-success" />
                            </div>
                            <hr className="hr-text" data-content="or" />
                            <div>
                                <p className="text-center">Click here to <a href="/signup">Sign up</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

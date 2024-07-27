import React from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';


const Signin = () => {

    const navigate = useNavigate();

    const handleSignup = (event) => {
        event.preventDefault();
        navigate('/');
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
                    <div className="card p-4 w-100" style={{maxWidth: '400px'}}>
                        <form onSubmit={handleSignup}>
                            <h5 className="text-center mb-4">Sign up</h5>
                            <div className="mb-3 d-flex justify-content-between">
                                <input type="text" className="form-control me-2" placeholder="First name"/>
                                <input type="text" className="form-control ms-2" placeholder="Last name"/>
                            </div>
                            <div className="mb-3">
                                <select className="form-control">
                                    <option value="">Select gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <input type="number" className="form-control" placeholder="Enter your age"/>
                            </div>
                            <div className="mb-3">
                                <input type="email" className="form-control" placeholder="Enter your email"/>
                            </div>
                            <div className="mb-3">
                                <input type="password" className="form-control" placeholder="Enter your password"/>
                            </div>
                            <div className="mb-3">
                                <input type="password" className="form-control" placeholder="Confirm your password"/>
                            </div>
                            <div className="d-grid mb-3">
                                <input type="submit" value="Sign up" className="btn btn-success"/>
                            </div>
                            <hr className="hr-text" data-content="or"/>
                            <div>
                                <p className="text-center">Already have an account? <a href="/">Log in</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;

import React from 'react';
import './Login.css'

const LoginPage = () => {
    return (
        <div className="row g-0 w-100 background-image">
            <div className="col-6">
                <img src={"https://thehill.com/wp-content/uploads/sites/2/2023/08/students-studying_081823adobe-stock_women-college-stress.jpg?w=1280&h=720&crop=1"} style={{height: '92vh'}} className="col-12 p-5"/>
            </div>
            <div className="col-6 d-flex flex-row justify-content-end">
                <div className="container d-flex justify-content-center align-items-center pt-5"
                     style={{height: '92vh'}}>
                    <div className="card p-4 w-100" style={{maxWidth: '400px'}}>
                        <form>
                            <h5 className="text-center mb-4">Sign in</h5>
                            <div className="mb-3">
                                <input type="email" className="form-control" placeholder="Enter your email"/>
                            </div>
                            <div className="mb-3">
                                <input type="password" className="form-control" placeholder="Enter your password"/>
                            </div>
                            <div className="d-grid">
                                <input type="submit" value={"Login"} className="btn btn-success"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default LoginPage;

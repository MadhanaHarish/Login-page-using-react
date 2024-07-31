import React from 'react';
import './Homepage.css'

const Homepage = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light custom-navbar p-3">
                <a className="navbar-brand" href="#">Cooking Blog</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" style={{color: '#ff8800'}}></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Your Recipes</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="p-3">
                <h1 className="display-4">Welcome to Cooking Blog!</h1>
                <p className="lead">Your ultimate source for delicious recipes and cooking tips.</p>
            </div>
        </>
    );
}

export default Homepage;
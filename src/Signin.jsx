import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        gender: '',
        age: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        let tempErrors = {};
        if (!formData.firstName) tempErrors.firstName = "First name is required";
        if (!formData.lastName) tempErrors.lastName = "Last name is required";
        if (!formData.gender) tempErrors.gender = "Gender is required";
        if (!formData.age) tempErrors.age = "Age is required";
        if (formData.age && (formData.age < 18 || formData.age > 100)) tempErrors.age = "Age must be between 18 and 100";
        if (!formData.email) tempErrors.email = "Email is required";
        if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Email is not valid";
        if (!formData.password) tempErrors.password = "Password is required";
        if (!formData.confirmPassword) tempErrors.confirmPassword = "Confirm password is required";
        if (formData.password !== formData.confirmPassword) tempErrors.confirmPassword = "Passwords do not match";

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSignup = (event) => {
        event.preventDefault();
        if (validate()) {
            // Add signup logic here
            navigate('/');
        }
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
                        <form onSubmit={handleSignup}>
                            <h5 className="text-center mb-4">Sign up</h5>
                            <div className="mb-3 d-flex justify-content-between">
                                <input
                                    type="text"
                                    className={`form-control me-2 ${errors.firstName ? 'is-invalid' : ''}`}
                                    placeholder="First name"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                />
                                <input
                                    type="text"
                                    className={`form-control ms-2 ${errors.lastName ? 'is-invalid' : ''}`}
                                    placeholder="Last name"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <select
                                    className={`form-control ${errors.gender ? 'is-invalid' : ''}`}
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleChange}
                                >
                                    <option value="">Select gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <input
                                    type="number"
                                    className={`form-control ${errors.age ? 'is-invalid' : ''}`}
                                    placeholder="Enter your age"
                                    name="age"
                                    value={formData.age}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="email"
                                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                    placeholder="Enter your email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="password"
                                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                    placeholder="Enter your password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="password"
                                    className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                                    placeholder="Confirm your password"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="d-grid mb-3">
                                <input type="submit" value="Sign up" className="btn btn-success" />
                            </div>
                            <hr className="hr-text" data-content="or" />
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

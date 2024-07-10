import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Box, Typography } from '@mui/material';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layer from './Layer';

const Signup = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirm_password: '',
    });

    const nextPage = useNavigate();

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.email.trim()) {
            newErrors.email = '*Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = '*Enter a valid Email';
        }

        if (!formData.password.trim()) {
            newErrors.password = '*Password is required';
        } else if (!/^(?=.*[A-Z])(?=.*\d).{6,}/.test(formData.password)) {
            newErrors.password = '*Enter a valid password';
        }

        if (formData.password.trim() !== formData.confirm_password.trim()) {
            newErrors.confirm_password = '*Both passwords must be the same';
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            try {
                console.log(formData);
                const response = await axios.post('http://localhost:8000/signup', formData);

                if (response.data === 'not exist') {
                    setErrors({});
                    nextPage('/home');
                } else {
                    setErrors({
                        email: '*Email already exists!',
                    });
                }
            } catch (error) {
                if (error.response && error.response.data) {
                    console.error('Signup failed!', error.response.data);
                } else {
                    console.error('Signup failed!', error.message);
                }
            }
        }
    };

    return (
        <>
            <Navbar />
            <div className="container-fluid mt-0">
                <div className="container col-xl-10 col-xxl-8 px-4 py-3 bg-transparent">
                    <div className="row align-items-center g-lg-5 py-5">
                        <div className="col-lg-6 text-center text-lg-start order-1 order-md-0">
                            <br />
                            <h1 className="display-5 fw-bold lh-1 text-warning mb-4">Welcome to StreamHuB</h1>
                            <p className="col-lg-12 text-light fs-4">
                                StreamHuB is a dynamic and innovative video sharing platform designed for users to express
                                themselves, share their creativity, and connect with a global audience. With a
                                user-friendly interface and cutting-edge features, StreamHuB empowers content creators to
                                make a streamhub in the digital world. Dive into the exciting world of StreamHuB, where
                                creativity knows no bounds!
                            </p>
                        </div>
                        <div className="col-md-12 mx-auto col-lg-6 order-0 order-md-1">
                            <form className="p-4 p-md-5 border rounded-3 bg-body-dark" style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }} onSubmit={handleSubmit}>
                                <div className="form-floating mb-3">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter your Email"
                                        required
                                    />
                                    {errors.email && <i id='err-email' style={{ color: 'red' }}>{errors.email}</i>}
                                    <label htmlFor="email">Email address</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        name="password"
                                        placeholder="Enter Password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.password && <i id='err-password' style={{ color: 'red' }}>{errors.password}</i>}
                                    <label htmlFor="password">Password</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="confirm_password"
                                        name="confirm_password"
                                        value={formData.confirm_password}
                                        onChange={handleChange}
                                        placeholder="Confirm Password"
                                        required
                                    />
                                    {errors.confirm_password && <i id='err-confirm-password' style={{ color: 'red' }}>{errors.confirm_password}</i>}
                                    <label htmlFor="confirm_password">Confirm Password</label>
                                </div>
                                <button className="w-100 btn btn-lg btn-success" type="submit">
                                    Sign Up
                                </button>
                                <hr className="my-4" style={{ color: "white" }} />
                                <Box className="text-body-secondary" sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} gap={1.5}>
                                    <Typography sx={{ color: "aqua" }}>Already Registered...? </Typography>
                                    <Link to='/' id='login' className='btn btn-lg btn-primary'>Login</Link>
                                </Box>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Layer />
        </>
    );
};

export default Signup;

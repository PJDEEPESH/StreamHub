import React, { useState } from 'react';
import axios from 'axios';
import { Typography, Box, Grid, Container } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from './Navbar';
import Layer from './Layer';

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    function validateForm() {
        if (!email) {
            setError('Please enter your email');
            return false;
        }
        if (!password) {
            setError('Please enter your password');
            return false;
        }
        return true;
    }

    async function handleSubmit(e) {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }

        try {
            const res = await axios.post("http://localhost:8000/", { email, password });
            if (res.data === "exist") {
                navigate('/home');
            } else if (res.data === "not exist") {
                setError('User does not exist. Please sign up.');
            } else {
                setError('Wrong password. Please try again.');
            }
        } catch (error) {
            alert("An error occurred while logging in.");
            console.error(error);
        }
    }

    return (
        <div className='login'>
            <Navbar />
            <Container maxWidth="lg" sx={{ py: 5 }}>
                <Grid container spacing={4} alignItems="center"> 
                    <Grid item xs={12} md={6}>
                        <div style={{ padding: "30px" }}> 
                            <h1 className="display-5 fw-bold lh-1 mb-3 text-warning">Welcome back to StreamHuB</h1>
                            <p className="col-lg-10 text-light fs-4">
                                Welcome back to StreamHuB, where your digital journey continues
                                Rediscover the thrill of seamless video sharing and connection. 
                                We have fine-tuned your experience for even more creativity and engagement. 
                                Dive in and let StreamHuB elevate your satisfaction to new heights!
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <form className="p-4 p-md-5 border rounded-3 bg-light" 
                              style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', width: '100%', maxWidth: '450px', margin: '0 auto' }} 
                              onSubmit={handleSubmit}>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} id="floatingInput" placeholder="name@example.com" required />
                                <label htmlFor="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} id="floatingPassword" placeholder="Password" required />
                                <label htmlFor="floatingPassword">Password</label>
                            </div>
                            <button className="w-100 btn btn-lg btn-primary" type="submit">Login</button>
                            <span style={{ color: 'red' }}>{error}</span>
                            <hr className="my-3" style={{ color: "white" }} />
                            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", color: "blue", gap: 1 }}>
                                <Typography sx={{ mt: "5px", mr: '10px' }}>No account..?</Typography>
                                <Link to="/signup" className='btn btn-lg btn-success'>SignUp</Link>
                            </Box>
                        </form>
                    </Grid>
                </Grid>
            </Container>
            <Layer /> 
        </div>
    );
}

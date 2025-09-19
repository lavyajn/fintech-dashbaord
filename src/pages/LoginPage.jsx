import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginPage () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            // api call to backend's login endpoint
            const response = await axios.post('http://localhost:8000/api/v1/merchants/login',{
                email: email,
                password: password,
        });

        // response will contain the token and we will destructre it
        const { token } = response.data;

        // store token to browser's local storage 
        // allows us to stay logged in even if we refresh
        localStorage.setItem('authToken', token);

        //redirect to dashboard
        navigate('/');
        }catch(err) {
            // if the api calls fails we send an error message
            console.error('Login failed:', err.response ? err.response.data : err.message);
            setError(err.response?.data?.message || 'Login failed. Please try again.');
        }
    };
    return(
        <div>
            <h2>Login to Your Merchant Account</h2>
            <form onSubmit={ handleSubmit }>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                    type = "email"
                    value = {email}
                    placeholder = "Enter your email"
                    onChange = {(e) => setEmail(e.target.value)}
                    required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                    type = "password"
                    value = {password}
                    placeholder = "Enter your password"
                    onChange = {(e) => setPassword(e.target.value)}
                    required
                    />
                </div>
                {error && <p style = {{color: 'red'}}>{error}</p>}
                <button type = "submit">Login</button>
            </form>
        </div>
    );
}
export default LoginPage;
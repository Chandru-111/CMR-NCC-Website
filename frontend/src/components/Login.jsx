
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; 

function Login({ setIsAuthenticated }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); 

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log({ username, password }); 
        try {
            const response = await fetch('http://localhost:8000/api/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });
  
            if (response.headers.get('content-type')?.includes('application/json')) {
                const data = await response.json();
  
                if (response.ok) {
                    console.log('Login successful:', data);
                    setIsAuthenticated(true); 
                   
                    if (data.is_staff) {
                        navigate('/dashboard1');
                    } else {
                        navigate('/dashboard2');
                    }
                    setError('');
                } else {
                    setError(data.error || 'Login failed');
                }
            } else {
                setError('Server returned an invalid response');
            }
        } catch (err) {
            console.error('Error during login:', err);
            setError('An error occurred during login');
        }
    };
  
    return (
        <div className="auth-container">
            <div className="auth-card">
                <h2 className="auth-title">Login</h2>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <form onSubmit={handleSubmit} className="auth-form">
                    <div>
                        
                        <input
                            type="text"
                            value={username}
                            placeholder='Username'
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                       
                        <input
                            type="password"
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="auth-button">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;

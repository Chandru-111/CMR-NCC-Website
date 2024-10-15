// frontend/src/components/Dashboard2.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard2({ setIsAuthenticated }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        setIsAuthenticated(false); 
        navigate('/'); 
    };

    return (
        <div>
            
            <h2>Non-Staff Dashboard</h2>
            <p>Welcome to the non-staff dashboard!</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Dashboard2;

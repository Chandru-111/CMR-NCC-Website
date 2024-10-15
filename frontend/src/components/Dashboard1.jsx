// frontend/src/components/Dashboard1.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard1({ setIsAuthenticated }) {
    const navigate = useNavigate();

    const handleLogout = () => {
       
        setIsAuthenticated(false);

        navigate('/');
    };

    return (
        <div>
            <h2>Staff Dashboard</h2>
            <p>Welcome to the staff dashboard!</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Dashboard1;

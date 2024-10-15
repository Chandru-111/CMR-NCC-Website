import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login.jsx';
import Home from './components/Home.jsx';
import UserPanel from './components/UserPanel.jsx';
import Dashboard1 from './components/Dashboard1.jsx';
import Dashboard2 from './components/Dashboard2.jsx';
import Navbar from './components/Navbar.jsx';
import Dashboard1navbar from './components/Dashboard1navbar.jsx';
import Dashboard2navbar from './components/Dashboard2navbar.jsx'; 
import ContactForm from './components/ContactForm.jsx';
import Footer from './components/Footer.jsx';
import FooterDashboard1 from './components/FooterDashboard1.jsx';
import FooterDashboard2 from './components/FooterDashboard2.jsx';
import Events from './components/Events.jsx';
import Register from './components/Register.jsx';
import './App.css';
import About from './components/About.jsx';

function App() {
    
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleLogout = () => {
        console.log("User logged out");
        setIsAuthenticated(false);
    };

    return (
        <Router>
            
            {!isAuthenticated && <Navbar />}
            <hr />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/user-panel" element={<UserPanel />} />
                <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
                <Route path="/contactform" element={<ContactForm />} />
                <Route path="/events" element={<Events />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/About" element={<About/>} />
                <Route path="/dashboard1" element={
                    isAuthenticated ? (
                        <>
                            <Dashboard1navbar /> 
                            <Dashboard1 setIsAuthenticated={setIsAuthenticated} />
                            <FooterDashboard1 />
                        </>
                    ) : (
                        <Login setIsAuthenticated={setIsAuthenticated} />
                    )
                } />
                    <Route path="/dashboard2" element={
                    isAuthenticated ? (
                        <>
                            <Dashboard2navbar handleLogout={handleLogout} /> {/* Only show Dashboard2 specific Navbar */}
                            <Dashboard2 setIsAuthenticated={setIsAuthenticated} />
                            <FooterDashboard2 />
                        </>
                    ) : (
                        <Login setIsAuthenticated={setIsAuthenticated} />
                    )
                } />
            </Routes>
            {!isAuthenticated && <Footer />}
        </Router>
    );
}

export default App;

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
import About from './components/About.jsx';
import Profile1 from './components/Profile1.jsx';
import CadetsInfo from './components/CadetsInfo.jsx'; 
import MarkAttendence from './components/MarkAttendence.jsx';
// Import the CadetsInfo component
import './App.css';
import MarkAttendance from './components/MarkAttendence.jsx';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

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
                <Route path="/About" element={<About />} />
                <Route path="/profile1" element={
                    isAuthenticated ? (
                        <>
                            <Dashboard1navbar />
                            <hr />
                            <Profile1 />
                            <FooterDashboard1 />
                        </>
                    ) : (
                        <Login setIsAuthenticated={setIsAuthenticated} />
                    )
                } />
                <Route path="/dashboard1" element={
                    isAuthenticated ? (
                        <>
                            <Dashboard1navbar />
                            <hr />
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
                            <Dashboard2navbar />
                            <hr />
                            <Dashboard2 setIsAuthenticated={setIsAuthenticated} />
                            <FooterDashboard2 />
                        </>
                    ) : (
                        <Login setIsAuthenticated={setIsAuthenticated} />
                    )
                } />
                <Route path="/cadets-info" element={
                    isAuthenticated ? (
                        <>
                            <Dashboard1navbar />
                            <hr />
                            <CadetsInfo />
                            <FooterDashboard1 />
                        </>
                    ) : (
                        <Login setIsAuthenticated={setIsAuthenticated} />
                    )
                } />
                <Route path="/MarkAttendence" element={
                    isAuthenticated ? (
                        <>
                            <Dashboard1navbar />
                            <hr />
                            <MarkAttendence />
                            <FooterDashboard1 />
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

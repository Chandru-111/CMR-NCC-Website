import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Profile.css'; // Import the new CSS file

const Profile1 = () => {
    const [formData, setFormData] = useState({
        rank: '',
        full_name: '',
        father_name: '',
        mother_name: '',
        aadhar_no: '',
        course: '',
        school_name: '',
        campus: '',
        register_number: '',
        phone_number: '',
        regimental_number: ''
    });

    const [isProfileSaved, setIsProfileSaved] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    // Load saved profile data from local storage when the component mounts
    useEffect(() => {
        const savedProfile = JSON.parse(localStorage.getItem('userProfile'));
        if (savedProfile) {
            setFormData(savedProfile);
            setIsProfileSaved(true);
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/save-profile/', formData);
            console.log('Profile saved successfully:', response.data);

            // Save profile data to local storage
            localStorage.setItem('userProfile', JSON.stringify(formData));
            setIsProfileSaved(true);
            setSuccessMessage('Data saved successfully!');
        } catch (error) {
            console.error('Error saving profile:', error);
            if (error.response) {
                console.error('Response data:', error.response.data);
            }
            setSuccessMessage('Error saving data. Please try again.');
        }
    };

    return (
        <div className="profile-container">
            <div className="profile-card">
                <h2 className="profile-title">Cadet Details</h2>
                <form onSubmit={handleSubmit}>
                    {Object.keys(formData).map((key) => (
                        <input
                            key={key}
                            name={key}
                            value={formData[key]}
                            onChange={handleChange}
                            placeholder={isProfileSaved ? formData[key] : key.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase())}
                            required
                            readOnly={isProfileSaved}
                        />
                    ))}
                    {!isProfileSaved && <button type="submit">Save Profile</button>}
                </form>
                {successMessage && <p className="success-message">{successMessage}</p>}
            </div>
        </div>
    );
};

export default Profile1;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CadetsInfo.css';
const CadetsInfo = () => {
    const [cadets, setCadets] = useState([]); // State to store cadet data
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState(''); // State for the search term

    // Fetch cadet data from the API
    const fetchCadetData = async () => {
        try {
            setLoading(true);
            const response = await axios.get('http://127.0.0.1:8000/api/userprofile/');
            if (Array.isArray(response.data)) {
                setCadets(response.data);
            } else if (typeof response.data === 'object') {
                setCadets([response.data]); // Wrap single object in an array
            } else {
                setError('Data format is not valid.');
            }
        } catch (error) {
            setError('Error fetching cadet data. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCadetData();
    }, []);

    // Function to handle search
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    // Filter cadets based on the search term
    const filteredCadets = cadets.filter(cadet =>
        cadet.FullName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) {
        return <div>Loading, please wait...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="cadets-info-container">
            <div className="search-container">
                <h2 className="search-title">Search Cadets</h2>
                <input
                    type="text"
                    className="search-bar"
                    placeholder="Search by Full Name..."
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </div>
            <div className="cadets-cards">
                {filteredCadets.length > 0 ? (
                    filteredCadets.map(cadet => (
                        <div key={cadet.registerNumber} className="cadets-info-card">
                            <h3 className="cadets-info-title">{cadet.FullName}</h3>
                            <div className="cadet-detail">
                                <strong>Rank:</strong> <span>{cadet.Rank}</span>
                            </div>
                            <div className="cadet-detail">
                                <strong>Father's Name:</strong> <span>{cadet.FatherName}</span>
                            </div>
                            <div className="cadet-detail">
                                <strong>Mother's Name:</strong> <span>{cadet.MotherName}</span>
                            </div>
                            <div className="cadet-detail">
                                <strong>Aadhar No:</strong> <span>{cadet.AadharNo}</span>
                            </div>
                            <div className="cadet-detail">
                                <strong>Course:</strong> <span>{cadet.Course}</span>
                            </div>
                            <div className="cadet-detail">
                                <strong>School Name:</strong> <span>{cadet.SchoolName}</span>
                            </div>
                            <div className="cadet-detail">
                                <strong>Campus:</strong> <span>{cadet.Campus}</span>
                            </div>
                            <div className="cadet-detail">
                                <strong>Register Number:</strong> <span>{cadet.registerNumber}</span>
                            </div>
                            <div className="cadet-detail">
                                <strong>Phone Number:</strong> <span>{cadet.phoneNumber}</span>
                            </div>
                            <div className="cadet-detail">
                                <strong>Regimental Number:</strong> <span>{cadet.regimentalNumber}</span>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No cadets available.</p>
                )}
            </div>
        </div>
    );
};

export default CadetsInfo;

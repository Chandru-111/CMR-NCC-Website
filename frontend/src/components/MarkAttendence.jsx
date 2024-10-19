import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MarkAttendance = () => {
    const [username, setUsername] = useState('');
    const [date, setDate] = useState('');
    const [day, setDay] = useState('');
    const [time, setTime] = useState('');
    const [attendanceMarked, setAttendanceMarked] = useState(false);

    // Fetch the logged-in user's username from the API
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/auth/user/');
                if (response.status === 200) {
                    // Assuming the username is part of the response data
                    const userData = response.data;
                    setUsername(userData.username); // Assuming `username` is the key for the username in the response
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);

    const handleAttendanceSubmit = async (e) => {
        e.preventDefault();

        // Ensure all fields are filled out
        if (!date || !day || !time) {
            alert("Please fill in all fields!");
            return;
        }

        const attendanceData = {
            username,
            date,
            day,
            time,
        };

        try {
            // Send attendance data to the backend (update the URL as needed)
            const response = await axios.post('/api/mark-attendance', attendanceData);
            if (response.status === 200) {
                setAttendanceMarked(true);
            }
        } catch (error) {
            console.error('Error marking attendance:', error);
        }
    };

    return (
        <div className="mark-attendance-container">
            <h1>Mark Attendance</h1>
            <form onSubmit={handleAttendanceSubmit}>
                <div>
                    <label>Username:</label>
                    {/* Display the username but make the input read-only */}
                    <input
                        type="text"
                        value={username}
                        readOnly
                    />
                </div>
                <div>
                    <label>Date:</label>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Day:</label>
                    <input
                        type="text"
                        value={day}
                        onChange={(e) => setDay(e.target.value)}
                        placeholder="e.g., Monday"
                        required
                    />
                </div>
                <div>
                    <label>Time:</label>
                    <input
                        type="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Mark Attendance</button>
            </form>
            {attendanceMarked && <p>Attendance marked successfully!</p>}
        </div>
    );
};

export default MarkAttendance;

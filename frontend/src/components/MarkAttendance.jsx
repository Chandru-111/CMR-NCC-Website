// src/components/MarkAttendance.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MarkAttendance = () => {
    const [tables, setTables] = useState([]);
    const [selectedTable, setSelectedTable] = useState('');
    const [records, setRecords] = useState([]);
    const [attendanceData, setAttendanceData] = useState([]);
    const [selectedColumn, setSelectedColumn] = useState('nov_1');

    useEffect(() => {
        // Fetch table names on component mount
        const fetchTables = async () => {
            const response = await axios.get('http://127.0.0.1:8000/mark-attendance/');
            setTables(response.data.tables); // Adjust this according to your API response structure
        };
        fetchTables();
    }, []);

    const handleTableChange = async (event) => {
        const tableName = event.target.value;
        setSelectedTable(tableName);

        // Fetch records based on selected table
        const response = await axios.post('http://127.0.0.1:8000/mark-attendance/', {
            table_name: tableName,
        });
        setRecords(response.data.records); // Adjust according to your API response
    };

    const handleAttendanceChange = (recordId, value) => {
        setAttendanceData((prev) => {
            const existingRecord = prev.find((item) => item.id === recordId);
            if (existingRecord) {
                return prev.map((item) =>
                    item.id === recordId ? { ...item, value } : item
                );
            }
            return [...prev, { id: recordId, value }];
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const attendancePayload = attendanceData.map(({ id, value }) => `${id}-${value}`);
        
        await axios.post('http://127.0.0.1:8000/mark-attendance/', {
            attendance: attendancePayload,
            column_name: selectedColumn,
        });

        alert('Attendance marked successfully!'); // Placeholder for success handling
    };

    return (
        <div>
            <h1>Mark Attendance</h1>
            <form onSubmit={handleSubmit}>
                <select onChange={handleTableChange} value={selectedTable}>
                    <option value="">Select Table</option>
                    {tables.map((table) => (
                        <option key={table} value={table}>
                            {table}
                        </option>
                    ))}
                </select>

                {records.length > 0 && (
                    <>
                        <select onChange={(e) => setSelectedColumn(e.target.value)} value={selectedColumn}>
                            <option value="nov_1">November 1</option>
                            <option value="nov_2">November 2</option>
                            <option value="nov_3">November 3</option>
                            <option value="nov_4">November 4</option>
                        </select>

                        {records.map((record) => (
                            <div key={record.id}>
                                <span>{record.name}</span> {/* Adjust according to your record structure */}
                                <select onChange={(e) => handleAttendanceChange(record.id, e.target.value)}>
                                    <option value="">Select Attendance</option>
                                    <option value="Present">Present</option>
                                    <option value="Absent">Absent</option>
                                </select>
                            </div>
                        ))}
                    </>
                )}
                <button type="submit">Submit Attendance</button>
            </form>
        </div>
    );
};

export default MarkAttendance; // Correct export

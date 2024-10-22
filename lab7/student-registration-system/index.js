import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentForm = () => {
    const [students, setStudents] = useState([]);
    const [form, setForm] = useState({ firstName: '', lastName: '', rollNo: '', password: '', contact: '' });

    const fetchStudents = async () => {
        const { data } = await axios.get('http://localhost:5000/students');
        setStudents(data);
    };

    useEffect(() => {
        fetchStudents();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/students', form);
        fetchStudents();
        setForm({ firstName: '', lastName: '', rollNo: '', password: '', contact: '' });
    };

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:5000/students/${id}`);
        fetchStudents();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="First Name" required />
                <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Last Name" required />
                <input name="rollNo" value={form.rollNo} onChange={handleChange} placeholder="Roll No" required />
                <input name="password" type="password" value={form.password} onChange={handleChange} placeholder="Password" required />
                <input name="contact" value={form.contact} onChange={handleChange} placeholder="Contact Number" required />
                <button type="submit">Add Student</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Roll No</th>
                        <th>Contact</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student._id}>
                            <td>{student.firstName}</td>
                            <td>{student.lastName}</td>
                            <td>{student.rollNo}</td>
                            <td>{student.contact}</td>
                            <td><button onClick={() => handleDelete(student._id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StudentForm;

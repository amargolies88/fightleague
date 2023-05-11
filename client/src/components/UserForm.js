import React, { useState } from 'react';
import axios from 'axios';

const UserForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const url = '/api/users';
        console.log(`Sending request to URL: ${url}`);
        const response = await axios.post(url, {
            firstName,
            lastName,
            email
        });

        // console.log(response.data);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name:</label>
            <input
                id="firstName"
                type="text"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
            />
            <label htmlFor="lastName">Last Name:</label>
            <input
                id="lastName"
                type="text"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
            />
            <label htmlFor="email">Email:</label>
            <input
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default UserForm;

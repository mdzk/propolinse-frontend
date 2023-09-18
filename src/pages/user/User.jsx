import React, { useEffect, useState } from 'react';
import UserLayout from '../../layouts/UserLayout';
import axios from 'axios';

const User = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const authToken = localStorage.getItem('auth_token');
        if (authToken) {
            axios.get(import.meta.env.VITE_API_URL + 'api/user', {
                headers: {
                    'Authorization': `Bearer ${authToken}`, // authToken adalah token yang disimpan
                    'Content-Type': 'application/json',
                },
            })
                .then(response => {
                    const { data } = response;
                    setUserData(data.data); // Set data pengguna ke state
                })
                .catch(error => {
                    console.error('Error fetching user data:', error);
                });
        }
    }, []);

    if (!userData) {
        return <div>Loading...</div>;
    }

    return (
        <UserLayout>
            <main className="main">
                <h1>Halaman User</h1>
                <h2>Welcome, {userData.name}</h2>
                <p>Email: {userData.email}</p>
            </main>
        </UserLayout>
    );
};

export default User;

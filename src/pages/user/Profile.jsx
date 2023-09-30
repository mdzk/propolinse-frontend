import React, { useEffect, useState } from 'react';
import UserLayout from '../../layouts/UserLayout';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Profile = () => {
    const [userData, setUserData] = useState(null);
    const [selectedGender, setSelectedGender] = useState("");

    const handleGenderChange = (e) => {
        setSelectedGender(e.target.value);
    };

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

    // Logout
    const handleLogout = async () => {
        try {
            const authToken = localStorage.getItem('auth_token');

            if (authToken) {
                await axios.get(import.meta.env.VITE_API_URL + 'api/logout', {
                    headers: {
                        'Authorization': `Bearer ${authToken}`,
                        'Content-Type': 'application/json',
                    },
                });
                localStorage.removeItem('auth_token');
                window.location.href = '/';
            }
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    return (
        <UserLayout>
            <main className="main mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 mt-3">
                            <div class="btn-group-vertical w-100" role="group" aria-label="Vertical button group">
                                <button type="button" class="btn btn-outline-secondary text-dark font-weight-bold" disabled>{userData.name}</button>
                                <Link to={'/user'} class="btn btn-outline-secondary">Alamat</Link>
                                <button type="button" class="btn btn-dark">Profile</button>
                                <button type="button" onClick={handleLogout} class="btn btn-outline-secondary">Log Out</button>
                            </div>
                        </div>
                        <div className="col-md-9 px-5 mt-3">
                            <h5>Account Profile</h5>
                            <div className="border p-5">
                                <h6>Information</h6>
                                {userData.name + " " + userData.nama_akhir} <br />
                                {userData.email} <br />
                                {userData.tgl_lhr} <br />
                                {userData.gender == 'L' ? 'Male' : 'Female'} <br />
                                <Link to={'/profile/edit'} className="btn btn-pink mt-1">Edit</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </UserLayout>
    );
};

export default Profile;

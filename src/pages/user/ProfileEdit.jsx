import React, { useState, useEffect } from 'react';
import UserLayout from '../../layouts/UserLayout';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const ProfileEdit = () => {
    const [userData, setUserData] = useState(null);
    const [selectedGender, setSelectedGender] = useState("");
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        alamat: '',
        tanggalLahir: '',
        gender: '',
    });

    const [apiErrors, setApiErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setApiErrors({ ...apiErrors, [name]: '' });
    };

    const handleGenderChange = (e) => {
        setSelectedGender(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = {
                name: formData.name,
                nama_akhir: formData.lastName,
                email: formData.email,
                password: formData.password,
                confirm_password: formData.confirmPassword,
                alamat: formData.alamat,
                tgl_lhr: formData.tanggalLahir,
                gender: selectedGender,
            };

            const authToken = localStorage.getItem('auth_token');
            const response = await axios.post(`${import.meta.env.VITE_API_URL}api/update/prof/` + userData.id, data, {
                headers: {
                    Authorization: `Bearer ${authToken}`,
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 200) {
                navigate('/profile');
            }
        } catch (error) {
            if (error.response) {
                const errors = error.response.data.errors;
                setApiErrors(errors);
            } else {
                console.error('Error:', error.message);
            }
        }
    };

    useEffect(() => {
        const authToken = localStorage.getItem('auth_token');

        if (authToken) {
            axios.get(`${import.meta.env.VITE_API_URL}api/user`, {
                headers: {
                    Authorization: `Bearer ${authToken}`,
                    'Content-Type': 'application/json',
                },
            })
                .then((response) => {
                    const user = response.data.data;
                    setUserData(user);
                    setSelectedGender(user.gender);
                    setFormData({
                        name: user.name,
                        lastName: user.nama_akhir,
                        email: user.email,
                        alamat: user.alamat,
                        tanggalLahir: user.tgl_lhr,
                        gender: user.gender,
                    });
                })
                .catch((error) => {
                    console.error('Error fetching user data:', error);
                });
        }
    }, []);

    if (!userData) {
        return <div>Loading...</div>;
    }

    const handleLogout = async () => {
        try {
            const authToken = localStorage.getItem('auth_token');

            if (authToken) {
                await axios.get(`${import.meta.env.VITE_API_URL}api/logout`, {
                    headers: {
                        Authorization: `Bearer ${authToken}`,
                        'Content-Type': 'application/json',
                    },
                });

                localStorage.removeItem('auth_token');
                navigate('/');
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
                            <div className="btn-group-vertical w-100" role="group" aria-label="Vertical button group">
                                <button type="button" className="btn btn-outline-secondary text-dark font-weight-bold" disabled>{userData.name}</button>
                                <Link to={'/user'} className="btn btn-outline-secondary">Alamat</Link>
                                <button type="button" className="btn btn-dark">Profile</button>
                                <button type="button" onClick={handleLogout} className="btn btn-outline-secondary">Log Out</button>
                            </div>
                        </div>
                        <div className="col-md-9 px-5 mt-3">
                            <form onSubmit={handleSubmit}>
                                <h6>Information</h6>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label htmlFor="name">First Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            onChange={handleChange}
                                            className={`form-control ${apiErrors.name && 'is-invalid'}`}
                                            value={formData.name}
                                        />
                                        {apiErrors.name && (
                                            <div className="invalid-feedback">{apiErrors.name}</div>
                                        )}
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="lastName">Last Name</label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            onChange={handleChange}
                                            className={`form-control ${apiErrors.lastName && 'is-invalid'}`}
                                            value={formData.lastName}
                                        />
                                        {apiErrors.lastName && (
                                            <div className="invalid-feedback">{apiErrors.lastName}</div>
                                        )}
                                    </div>
                                    <div className="col-md-12">
                                        <label htmlFor="email">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            onChange={handleChange}
                                            className={`form-control ${apiErrors.email && 'is-invalid'}`}
                                            value={formData.email}
                                        />
                                        {apiErrors.email && (
                                            <div className="invalid-feedback">{apiErrors.email}</div>
                                        )}
                                    </div>
                                    <div className="col-md-12">

                                        <label htmlFor="password">Password </label> <span className='text-danger'>* Kosongkan password jika tidak ingin mengganti password</span>
                                        <input
                                            type="password"
                                            id="password"
                                            name="password"
                                            onChange={handleChange}
                                            className={`form-control ${apiErrors.password && 'is-invalid'}`}
                                            value={formData.password}
                                        />
                                        {apiErrors.password && (
                                            <div className="invalid-feedback">{apiErrors.password}</div>
                                        )}
                                    </div>

                                    <div className="col-md-12">
                                        <label htmlFor="confirmPassword">Confirm Password</label>
                                        <input
                                            type="password"
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            onChange={handleChange}
                                            className={`form-control ${apiErrors.confirmPassword && 'is-invalid'}`}
                                            value={formData.confirmPassword}
                                        />
                                        {apiErrors.confirmPassword && (
                                            <div className="invalid-feedback">{apiErrors.confirmPassword}</div>
                                        )}
                                    </div>
                                </div>

                                <h6>Enter your birthdate</h6>
                                <div className="row">
                                    <div className="col-md-12">
                                        <input
                                            type="date"
                                            name="tanggalLahir"
                                            onChange={handleChange}
                                            className={`form-control ${apiErrors.tanggalLahir && 'is-invalid'}`}
                                            value={formData.tanggalLahir}
                                        />
                                        {apiErrors.tanggalLahir && (
                                            <div className="invalid-feedback">{apiErrors.tanggalLahir}</div>
                                        )}
                                    </div>
                                </div>

                                <h6>Gender</h6>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label className={`radio-button ${selectedGender === "P" ? "active" : ""}`}>
                                            <input
                                                type="radio"
                                                name="gender"
                                                value="P"
                                                onChange={handleGenderChange}
                                                checked={selectedGender === "P"}
                                            />{" "}
                                            Female
                                        </label>
                                    </div>
                                    <div className="col-md-6">
                                        <label className={`radio-button ${selectedGender === "L" ? "active" : ""}`}>
                                            <input
                                                type="radio"
                                                name="gender"
                                                value="L"
                                                onChange={handleGenderChange}
                                                checked={selectedGender === "L"}
                                            />{" "}
                                            Male
                                        </label>
                                    </div>
                                </div>

                                <button type="submit" className="w-100 btn btn-pink">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </UserLayout>
    );
};

export default ProfileEdit;

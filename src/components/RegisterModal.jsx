import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function RegisterModal({ showLoginFromRegister }) {
    const [selectedGender, setSelectedGender] = useState("");

    const handleGenderChange = (e) => {
        setSelectedGender(e.target.value);
    };
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        alamat: '',
        tanggalLahir: '',
        genderTest: '',
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

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = new FormData();
            data.append('name', formData.name);
            data.append('nama_akhir', formData.lastName);
            data.append('email', formData.email);
            data.append('password', formData.password);
            data.append('confirm_password', formData.confirmPassword);
            data.append('alamat', formData.alamat);
            data.append('tgl_lhr', formData.tanggalLahir);
            data.append('gender', selectedGender);
            data.append('role', 'user');

            const response = await axios.post(import.meta.env.VITE_API_URL + 'api/register', data);
            // console.log(response.data.data);
            // console.log(response.data.data.errors);
            window.location.href = "/success";
        } catch (error) {
            if (error.response) {
                console.error('Error:', error.response.data);
                setApiErrors(error.response.data.errors);
                // console.error(error.response.data.errors);
            } else if (error.request) {
                console.error('Network Error:', error.request);
            } else {
                console.error('Error:', error.message);
            }
        }
    };
    return (
        <div className="modal-content">
            <div className="modal-header py-5">
                <div className="modal-title w-100 text-center" id="exampleModalLabel">
                    <p>Register</p>
                </div>
                <div data-bs-dismiss="modal" aria-label="Close">
                    <img className="mr-2"
                        src={`${window.location.origin}/assets/images/close.png`}
                        style={{ cursor: "pointer" }}
                    />
                </div>
            </div>
            <div className="modal-body py-3 px-5">
                <form onSubmit={handleSubmit} >
                    <h6>Create Account</h6>
                    <div className="row">
                        <div className="col-md-6 mb-1">
                            <input type="text" placeholder="First Name" name="name" onChange={handleChange} className={`mb-0 form-control ${apiErrors.name && 'is-invalid'}`} />
                            {apiErrors.name && (
                                <div className="invalid-feedback d-block">{apiErrors.name}</div>
                            )}

                        </div>
                        <div className="col-md-6 mb-1">
                            <input type="text" placeholder="Last Name" name="lastName" onChange={handleChange} className={`mb-0 form-control ${apiErrors.nama_akhir && 'is-invalid'}`} />
                            {apiErrors.nama_akhir && (
                                <div className="invalid-feedback d-block">{apiErrors.nama_akhir}</div>
                            )}
                        </div>
                        <div className="col-md-12 mb-1">
                            <input type="email" placeholder="Email Address" name="email" onChange={handleChange} className={`mb-0 form-control ${apiErrors.email && 'is-invalid'}`} />
                            {apiErrors.email && (
                                <div className="invalid-feedback d-block">{apiErrors.email}</div>
                            )}
                        </div>
                        <div className="col-md-12 mb-1">
                            <input type="password" placeholder="Password" name="password" onChange={handleChange} className={`mb-0 form-control ${apiErrors.password && 'is-invalid'}`} />
                            {apiErrors.password && (
                                <div className="invalid-feedback d-block">{apiErrors.password}</div>
                            )}
                        </div>
                        <div className="col-md-12 mb-1">
                            <input type="password" placeholder="Confirm Password" name="confirmPassword" onChange={handleChange} className={`mb-0 form-control ${apiErrors.confirm_password && 'is-invalid'}`} />
                            {apiErrors.confirm_password && (
                                <div className="invalid-feedback d-block">{apiErrors.confirm_password}</div>
                            )}
                        </div>
                    </div>

                    <h6>Address</h6>
                    <div className="row">
                        <div className="col-md-12 mb-1">
                            <input type="text" placeholder="Full Address" name="alamat" onChange={handleChange} className={`mb-0 form-control ${apiErrors.alamat && 'is-invalid'}`} />
                            {apiErrors.alamat && (
                                <div className="invalid-feedback d-block">{apiErrors.alamat}</div>
                            )}
                        </div>
                    </div>

                    <h6>Enter your birthdate</h6>
                    <div className="row">
                        <div className="col-md-12">
                            <input type="date" name="tanggalLahir" onChange={handleChange} className={`mb-0 form-control ${apiErrors.tgl_lhr && 'is-invalid'}`} />
                            {apiErrors.tgl_lhr && (
                                <div className="invalid-feedback d-block">{apiErrors.tgl_lhr}</div>
                            )}
                        </div>
                    </div>

                    <h6>Gender</h6>
                    <div className="row">

                        <div className="col-md-6">
                            <label className={`radio-button ${selectedGender === "P" ? "active" : ""}`}>
                                <input
                                    type="radio"
                                    name="genderTest"
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
                                    name="genderTest"
                                    value="L"
                                    onChange={handleGenderChange}
                                    checked={selectedGender === "L"}
                                />{" "}
                                Male
                            </label>
                        </div>
                    </div>

                    <button href="" type="submit" className="w-100 btn btn-pink">
                        Register
                    </button>
                    <p className="text-center mt-1">
                        Sudah memiliki akun? <a onClick={showLoginFromRegister} className="text-primary" style={{ cursor: "pointer" }}>Login</a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default RegisterModal;
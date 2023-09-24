import React, { useState } from "react";
import axios from "axios";
import { Navigate } from 'react-router-dom'; // Aliaskan Redirect dengan nama yang berbeda

function LoginModal({ showRegistration, showLupaPassword }) {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [userRole, setUserRole] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const [message, setMessage] = useState('');
    const [alertType, setAlertType] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(import.meta.env.VITE_API_URL + 'api/login', formData);
            const { data } = response;

            if (!data || !data.data || !data.data.token) {
                setMessage(data.message || 'Unknown error');
                setAlertType('danger');
                return;
            }

            localStorage.setItem('auth_token', data.data.token);
            const authToken = localStorage.getItem('auth_token');
            const userResponse = await axios.get(import.meta.env.VITE_API_URL + 'api/user', {
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                    'Content-Type': 'application/json',
                },
            });

            const userData = userResponse.data.data;
            setUserRole(userData.role);

            if (userData.role === 'admin') {
                window.location.href = '/admin';
            } else if (userData.role === 'user') {
                window.location.href = '/user';
            }
        } catch (error) {
            setMessage('An error occurred while processing your request.');
            setAlertType('danger');
            console.error('Login error:', error);
        }
    };

    return (
        <div className="modal-content">
            <div className="modal-header py-5">
                <div className="modal-title w-100 text-center" id="exampleModalLabel">
                    <p>Login or Register</p>
                </div>
                <div data-bs-dismiss="modal" aria-label="Close">
                    <img className="mr-2"
                        src={`${window.location.origin}/assets/images/close.png`}
                        style={{ cursor: "pointer" }}
                    />
                </div>
            </div>
            <div className="modal-body p-3">
                <h6>Welcome Back!</h6>
                <div>
                    {message && (
                        <div className={`mb-3 alert alert-${alertType}`} role="alert">
                            {message}
                        </div>
                    )}
                </div>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" className="form-control" />
                    <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" className="form-control" />
                    <div className="d-flex justify-content-between">
                        <div>
                            <input type="checkbox" className="mr-2" name="remember" id="remember" /> <label htmlFor="remember">Remember Me</label>
                        </div>
                        <a style={{ cursor: "pointer" }} onClick={showLupaPassword}>
                            Forgot Password?
                        </a>
                    </div>
                    <button className="w-100 btn btn-pink">
                        Login
                    </button>
                </form>
            </div>
            <div className="p-3 border">
                <h6 className="m-0">Create An Account</h6>
                <span style={{ fontSize: "12px" }} className="text-muted">You can track your orders, edit shipping info, receive exclusive offers and lots more!</span>
                <div className="row">
                    <div className="col-md-6">
                        <div className="bg-white h-100 text-center d-flex flex-column justify-content-center align-items-center p-5">
                            <img src={`${window.location.origin}/assets/images/wallet.png`} alt="" />
                            <span className="font-weight-bold text-dark" style={{ fontSize: "12px" }}>10% off on your first order</span>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="bg-white h-100 text-center d-flex flex-column justify-content-center align-items-center p-5">
                            <img src={`${window.location.origin}/assets/images/car.png`} alt="" />
                            <span className="font-weight-bold text-dark" style={{ fontSize: "12px" }}>Track your orders</span>
                        </div>
                    </div>

                </div>
                <button onClick={showRegistration} className="font-weight-bold w-100 btn btn-outline-pink">
                    Register
                </button>
            </div>
        </div>
    );
};

export default LoginModal;
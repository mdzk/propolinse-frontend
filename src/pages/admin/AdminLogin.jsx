import React from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../../layouts/AuthLayout';

const AdminLogin = () => {
    return (
        <AuthLayout>
            <div id="auth-left">
                <div className="auth-logo" style={{ marginBottom: "50px" }}>
                    <a href="index.html"
                    ><img style={{ width: "100px", height: "85px" }}
                        src={`${window.location.origin}/logo.png`}
                        alt="Logo"
                        /></a>
                </div>

                <form action='/admin'>
                    <div className="form-group position-relative has-icon-left mb-4">
                        <input
                            type="text"
                            className="form-control form-control-xl"
                            placeholder="Username"
                        />
                        <div className="form-control-icon">
                            <i className="bi bi-person"></i>
                        </div>
                    </div>
                    <div className="form-group position-relative has-icon-left mb-4">
                        <input
                            type="password"
                            className="form-control form-control-xl"
                            placeholder="Password"
                        />
                        <div className="form-control-icon">
                            <i className="bi bi-shield-lock"></i>
                        </div>
                    </div>

                    <button className="btn btn-primary btn-block btn-lg shadow-lg mt-5">
                        Login
                    </button>
                </form>
            </div>
        </AuthLayout>
    );
};

export default AdminLogin;
import React, { useState } from "react";
import axios from "axios";

function LupaPasswordModal({ showLoginFromLupaPassword, showResetCode }) {
    const [email, setEmail] = useState("");
    const [apiErrors, setApiErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        const { name, value } = e.target;
        setApiErrors({ ...apiErrors, [name]: '' });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            email: email,
        };
        setIsLoading(true);
        axios
            .post(`${import.meta.env.VITE_API_URL}api/password/email`, data)
            .then((response) => {
                showResetCode();
            })
            .catch((error) => {
                console.error("Error sending email:", error.response.data);
                setApiErrors(error.response.data.errors);
            })
            .finally(() => {
                setIsLoading(false);
            });

    };

    return (
        <div className="modal-content">
            <div className="modal-header py-5">
                <div className="modal-title w-100 text-center" id="exampleModalLabel">
                    <p>Reset Password</p>
                </div>
                <div data-bs-dismiss="modal" aria-label="Close">
                    <img
                        className="mr-2"
                        src={`${window.location.origin}/assets/images/close.png`}
                        style={{ cursor: "pointer" }}
                    />
                </div>
            </div>
            <div className="modal-body py-3 px-5">
                <p>
                    To have your password reset, enter your email address below. We will
                    then send an email containing a link to reset your password.
                </p>
                <div className="row">
                    <div className="col-md-12">
                        <form onSubmit={handleSubmit}>
                            <input
                                type="email"
                                placeholder="Email Address"
                                className={`mb-1 form-control ${apiErrors.email && 'is-invalid'}`}
                                value={email}
                                onChange={handleEmailChange}
                            />
                            {apiErrors.email && (
                                <div className="invalid-feedback d-block mb-2">{apiErrors.email}</div>
                            )}
                            {isLoading ? (
                                <button
                                    className="w-100 btn btn-pink"
                                >
                                    <div className="spinner-border text-light" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                </button>
                            ) : (
                                <button
                                    type="submit"
                                    className="w-100 btn btn-pink"
                                >
                                    Send Email
                                </button>
                            )}
                        </form>
                    </div>
                </div>
                <p className="text-center mt-1">
                    Kembali ke Halaman{" "}
                    <a
                        onClick={showLoginFromLupaPassword}
                        className="text-primary"
                        style={{ cursor: "pointer" }}
                    >
                        Login
                    </a>
                </p>
            </div>
        </div>
    );
}

export default LupaPasswordModal;

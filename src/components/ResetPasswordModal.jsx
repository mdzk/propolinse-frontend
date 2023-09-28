import React, { useState } from "react";
import axios from "axios";

function ResetPasswordModal({ showResetSuccess, code }) {
    const [password, setPassword] = useState(""); // State untuk password baru
    const [passwordConfirmation, setPasswordConfirmation] = useState(""); // State untuk konfirmasi password
    const [apiErrors, setApiErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false); 

    const handlePasswordChange = (e) => {
        const { name, value } = e.target;
        setPassword(value);
        setApiErrors((prevErrors) => ({
            ...prevErrors,
            [name]: "",
        }));
    };

    const handlePasswordConfirmationChange = (e) => {
        setPasswordConfirmation(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            code: code,
            password: password,
            password_confirmation: passwordConfirmation,
        };

        setIsLoading(true);

        axios
            .post(`${import.meta.env.VITE_API_URL}api/password/reset`, data, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((response) => {
                showResetSuccess();
            })
            .catch((error) => {
                console.error("Error resetting password:", error.response.data);
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
                <p>Masukkan Password Baru</p>
                <div className="row">
                    <div className="col-md-12">
                        <form onSubmit={handleSubmit}>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className={`mb-1 form-control ${apiErrors.password && "is-invalid"
                                    }`}
                                value={password}
                                onChange={handlePasswordChange}
                            />
                            {apiErrors.password && (
                                <div className="invalid-feedback d-block mb-2">
                                    {apiErrors.password}
                                </div>
                            )}
                            <input
                                type="password"
                                name="password_confirmation"
                                placeholder="Confirm Password"
                                className={`mb-1 form-control ${apiErrors.password_confirmation &&
                                    "is-invalid"
                                    }`}
                                value={passwordConfirmation}
                                onChange={handlePasswordConfirmationChange}
                            />
                            {apiErrors.password_confirmation && (
                                <div className="invalid-feedback d-block mb-2">
                                    {apiErrors.password_confirmation}
                                </div>
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
                                    Ubah Password
                                </button>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResetPasswordModal;

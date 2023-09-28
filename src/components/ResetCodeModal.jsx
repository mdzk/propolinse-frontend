import React, { useState } from "react";
import axios from "axios";

function ResetCodeModal({ showResetPassword }) {
    const [code, setCode] = useState("");
    const [apiErrors, setApiErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const handleCodeChange = (e) => {
        // Hanya membiarkan input angka
        const inputValue = e.target.value.replace(/\D/g, "");
        setCode(inputValue);
        const { name } = e.target;
        setApiErrors({ ...apiErrors, [name]: "" });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            code: code,
        };
        setIsLoading(true);

        axios
            .post(`${import.meta.env.VITE_API_URL}api/password/code/check`, data)
            .then((response) => {
                showResetPassword(code);
            })
            .catch((error) => {
                console.error("Error sending code:", error.response.data);
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
                    <p>Masukkan Code</p>
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
                <p>Masukkan kode yang telah dikirim pada email anda</p>
                <div className="row">
                    <div className="col-md-12">
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="Masukkan 6 Digit Kode"
                                className={`mb-1 form-control ${apiErrors.code && "is-invalid"
                                    }`}
                                value={code}
                                onChange={handleCodeChange}
                                inputMode="numeric"
                                maxLength="6" 
                            />
                            {apiErrors.code && (
                                <div className="invalid-feedback d-block mb-2">
                                    {apiErrors.code}
                                </div>
                            )}
                            {isLoading ? (
                                <button className="w-100 btn btn-pink">
                                    <div
                                        className="spinner-border text-light"
                                        role="status"
                                    >
                                        <span className="sr-only">
                                            Loading...
                                        </span>
                                    </div>
                                </button>
                            ) : (
                                <button
                                    type="submit"
                                    className="w-100 btn btn-pink"
                                >
                                    Submit
                                </button>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResetCodeModal;
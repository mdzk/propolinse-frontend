import React, { useState } from "react";

function RegisterModal({ showLoginFromRegister }) {
    const [selectedGender, setSelectedGender] = useState(""); // Menyimpan jenis kelamin yang dipilih

    const handleGenderChange = (e) => {
        setSelectedGender(e.target.value);
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
                <h6>Create Account</h6>
                <div className="row">
                    <div className="col-md-6">
                        <input type="text" placeholder="First Name" className="form-control" />
                    </div>
                    <div className="col-md-6">
                        <input type="text" placeholder="Last Name" className="form-control" />
                    </div>
                    <div className="col-md-12">
                        <input type="email" placeholder="Email Address" className="form-control" />
                    </div>
                    <div className="col-md-12">
                        <input type="password" placeholder="Password" className="form-control" />
                    </div>
                </div>

                <h6>Create Account</h6>
                <div className="row">
                    <div className="col-md-12">
                        <input type="text" placeholder="Address" className="form-control" />
                    </div>
                </div>

                <h6>Enter your birthdate</h6>
                <div className="row">
                    <div className="col-md-12">
                        <input type="date" className="form-control" />
                    </div>
                </div>

                <h6>Gender</h6>
                <div className="row">
                    <div className="col-md-6">
                        <label className={`radio-button ${selectedGender === "female" ? "active" : ""}`}>
                            <input type="radio" name="gender" className="form-control" value="female" onChange={handleGenderChange} checked={selectedGender === "female"} /> Female
                        </label>
                    </div>
                    <div className="col-md-6">
                        <label className={`radio-button ${selectedGender === "male" ? "active" : ""}`}>
                            <input type="radio" name="gender" className="form-control" value="male" onChange={handleGenderChange} checked={selectedGender === "male"} /> Male
                        </label>
                    </div>
                </div>

                <button href="" className="w-100 btn btn-pink">
                    Register
                </button>
                <p className="text-center mt-1">
                    Sudah memiliki akun? <a onClick={showLoginFromRegister} className="text-primary" style={{ cursor: "pointer" }}>Login</a>
                </p>
            </div>
        </div>
    );
};

export default RegisterModal;
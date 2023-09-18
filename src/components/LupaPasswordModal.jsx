import React, { useState } from "react";

function LupaPasswordModal({ showLoginFromLupaPassword }) {
    return (
        <div className="modal-content">
            <div className="modal-header py-5">
                <div className="modal-title w-100 text-center" id="exampleModalLabel">
                    <p>Reset Password</p>
                </div>
                <div data-bs-dismiss="modal" aria-label="Close">
                    <img className="mr-2"
                        src={`${window.location.origin}/assets/images/close.png`}
                        style={{ cursor: "pointer" }}
                    />
                </div>
            </div>
            <div className="modal-body py-3 px-5">
                <p>To have your password reset, enter your email address below. We will then send an email containing a linkto reset your password.</p>
                <div className="row">
                    <div className="col-md-12">
                        <input type="email" placeholder="Email Address" className="form-control" />
                    </div>
                </div>

                <button href="" className="w-100 btn btn-pink">
                    Send Email
                </button>
                <p className="text-center mt-1">
                    Kembali ke Halaman <a onClick={showLoginFromLupaPassword} className="text-primary" style={{ cursor: "pointer" }}>Login</a>
                </p>
            </div>
        </div>
    );
};

export default LupaPasswordModal;
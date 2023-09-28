import React, { useState } from "react";

function ResetSuccessModal({ showLoginFromRegister }) {
    return (
        <div className="modal-content">
            <div className="modal-header py-5">
                <div className="modal-title w-100 text-center" id="exampleModalLabel">
                    <p>Peringantan</p>
                </div>
                <div data-bs-dismiss="modal" aria-label="Close">
                    <img className="mr-2"
                        src={`${window.location.origin}/assets/images/close.png`}
                        style={{ cursor: "pointer" }}
                    />
                </div>
            </div>
            <div className="modal-body py-3 px-5">
                <p>Akun Berhasil di Reset</p>

                <button href=""
                    onClick={() => {
                        showLoginFromRegister(); // Memanggil fungsi showResetCode saat tombol diklik
                    }}
                    className="w-100 btn btn-pink">
                    Login Sekarang
                </button>
            </div>
        </div>
    );
};

export default ResetSuccessModal;
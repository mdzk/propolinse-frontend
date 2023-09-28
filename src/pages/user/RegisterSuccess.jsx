import React from "react";
import UserLayout from "../../layouts/UserLayout";
import { Link } from "react-router-dom";

const RegisterSuccess = () => {
    return (
        <UserLayout>
            <main className="main">
                <div className="bg-light ">

                    <div className="top-findstore d-flex align-items-center justify-content-center">
                        <h3 className="page-title text-black mb-0 font-weight-bold">
                            SELAMAT!
                        </h3>
                    </div>


                </div>
                <div className="container py-5">
                    <div className="text-center">

                        <p className="display-4">Registrasi account anda telah sukses! Account anda sudah aktif & bisa <br /> digunakan untuk berbelanja selanjutnya.</p>
                        <br />
                        <Link className="btn btn-pink" to={'/'}>Kembali</Link>
                    </div>
                </div>

            </main>
        </UserLayout>
    );
};

export default RegisterSuccess;
import React from "react";
import UserLayout from "../../layouts/UserLayout";
import { Link } from "react-router-dom";

const CheckoutSuccess = () => {
    return (
        <UserLayout>
            <main className="main">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6 mb-4">
                        <div className="" style={{
                            boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
                        }}>
                            <div className="p-3" style={{ backgroundColor:"#ffcccc" }}>
                                <h5>SELAMAT!</h5>
                            </div>
                            <div className="py-5 mb-2 text-center">
                                <h5>Transaksi Anda Berhasil</h5>
                            </div>
                        </div>
                        <div className="w-100 d-flex justify-content-end">
                            <Link to={'/'} className="btn btn-pink">Lanjutkan Belanja</Link>
                        </div>
                    </div>
                </div>
            </main>
        </UserLayout>
    );
};

export default CheckoutSuccess;
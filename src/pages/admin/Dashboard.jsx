import React from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../../layouts/AdminLayout';

const Dashboard = () => {
    return (
        <AdminLayout>
            <div className="page-content">
                <section className="row">
                    <div className="col-12 col-lg-12">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="card">
                                    <div className="card-body px-4 py-4-5">
                                        <div className="row">
                                            <div
                                                className="col-md-12 d-flex"
                                            >
                                                <div className="stats-icon purple mb-2">
                                                    <i className="iconly-boldCategory"></i>
                                                </div>
                                                <div className="ms-4">
                                                    <h6 className="text-muted font-semibold">Produk</h6>
                                                    <h6 className="font-extrabold mb-0">4 Kategori</h6>
                                                    <Link to={"/"}>More info ...</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="card">
                                    <div className="card-body px-4 py-4-5">
                                        <div className="row">
                                            <div
                                                className="col-md-12 d-flex"
                                            >
                                                <div className="stats-icon blue mb-2">
                                                    <i className="iconly-boldDiscount"></i>
                                                </div>
                                                <div className="ms-4">
                                                    <h6 className="text-muted font-semibold">Pesanan</h6>
                                                    <h6 className="font-extrabold mb-0">2 Orders</h6>
                                                    <Link to={"/"}>More info ...</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="card">
                                    <div className="card-body px-4 py-4-5">
                                        <div className="row">
                                            <div
                                                className="col-md-12 d-flex"
                                            >
                                                <div className="stats-icon green mb-2">
                                                    <i className="iconly-boldWallet"></i>
                                                </div>
                                                <div className="ms-4">
                                                    <h6 className="text-muted font-semibold">Pembayaran</h6>
                                                    <h6 className="font-extrabold mb-0">1 Konfirmasi</h6>
                                                    <Link to={"/"}>More info ...</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="card">
                                    <div className="card-body px-4 py-4-5">
                                        <div className="row">
                                            <div
                                                className="col-md-12 d-flex"
                                            >
                                                <div className="stats-icon red mb-2">
                                                    <i className="iconly-boldUser"></i>
                                                </div>
                                                <div className="ms-4">
                                                    <h6 className="text-muted font-semibold">Pelanggan</h6>
                                                    <h6 className="font-extrabold mb-0">1 Users</h6>
                                                    <Link to={"/"}>More info ...</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </AdminLayout>
    );
};

export default Dashboard;
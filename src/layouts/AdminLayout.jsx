import React from "react";
import { Link } from "react-router-dom";
import { useAssets } from "../utilities/AssetsContext";
import "../../public/assets/extensions/perfect-scrollbar/perfect-scrollbar.min.js";
import "../../public/assets/compiled/js/app.js";

function AdminLayout({ children }) {
    const { assets } = useAssets();

    return (
        <>
            {assets && <link rel="stylesheet" href="./public/assets/compiled/css/app.css" />}
            {assets && <link rel="stylesheet" href="./public/assets/compiled/css/iconly.css" />}

            <div id="app">
                <div id="sidebar">
                    <div className="sidebar-wrapper active">
                        <div className="sidebar-header position-relative">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="logo">
                                    <a href="index.html"
                                    ><img
                                            src="./assets/compiled/svg/logo.svg"
                                            alt="Logo"
                                        /></a>
                                </div>
                                <div className="sidebar-toggler x">
                                    <a href="#" className="sidebar-hide d-xl-none d-block"
                                    ><i className="bi bi-x bi-middle"></i
                                    ></a>
                                </div>
                            </div>
                        </div>
                        <div className="sidebar-menu">
                            <ul className="menu">
                                <li className="sidebar-item active">
                                    <a href="index.html" className="sidebar-link">
                                        <i className="bi bi-grid-fill"></i>
                                        <span>Dashboard</span>
                                    </a>
                                </li>

                                <li className="sidebar-item">
                                    <a href="index.html" className="sidebar-link">
                                        <i className="bi bi-layers-fill"></i>
                                        <span>Kategori Produk</span>
                                    </a>
                                </li>

                                <li className="sidebar-item">
                                    <a href="index.html" className="sidebar-link">
                                        <i className="bi bi-cart-fill"></i>
                                        <span>Pesanan</span>
                                    </a>
                                </li>

                                <li className="sidebar-item">
                                    <a href="index.html" className="sidebar-link">
                                        <i className="bi bi-wallet-fill"></i>
                                        <span>Pembayaran</span>
                                    </a>
                                </li>

                                <li className="sidebar-item">
                                    <a href="index.html" className="sidebar-link">
                                        <i className="bi bi-people-fill"></i>
                                        <span>Pelanggan</span>
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

                <div id="main" className="layout-navbar navbar-fixed">
                    <header>
                        <nav className="navbar navbar-expand navbar-light navbar-top">
                            <div className="container-fluid">
                                <a href="#" className="burger-btn d-block">
                                    <i className="bi bi-justify fs-3"></i>
                                </a>

                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto mb-lg-0"></ul>
                                    <div className="dropdown">
                                        <a href="#" data-bs-toggle="dropdown" aria-expanded="false">
                                            <div className="user-menu d-flex">
                                                <div className="user-name text-end me-3">
                                                    <h6 className="mb-0 text-gray-600">John Ducky</h6>
                                                    <p className="mb-0 text-sm text-gray-600">Administrator</p>
                                                </div>
                                                <div className="user-img d-flex align-items-center">
                                                    <div className="avatar avatar-md">
                                                        <img src="./assets/compiled/jpg/1.jpg" />
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        <ul
                                            className="dropdown-menu dropdown-menu-end"
                                            aria-labelledby="dropdownMenuButton"
                                            style={{ minWidth: "11rem" }}>
                                            <li>
                                                <h6 className="dropdown-header">Hello, John!</h6>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#"
                                                ><i className="icon-mid bi bi-person me-2"></i> My
                                                    Profile</a
                                                >
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#"
                                                ><i className="icon-mid bi bi-gear me-2"></i> Settings</a
                                                >
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#"
                                                ><i className="icon-mid bi bi-wallet me-2"></i> Wallet</a
                                                >
                                            </li>
                                            <li>
                                                <hr className="dropdown-divider" />
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#"
                                                ><i className="icon-mid bi bi-box-arrow-left me-2"></i>
                                                    Logout</a
                                                >
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </header>

                    <div id="main-content">
                        {children}
                    </div>

                    {/* <footer>
                        <div className="footer clearfix mb-0 text-muted">
                            <div className="float-start">
                                <p>2023 &copy; Mazer</p>
                            </div>
                            <div className="float-end">
                                <p>
                                    Crafted with
                                    <span className="text-danger"
                                    ><i className="bi bi-heart-fill icon-mid"></i
                                    ></span>
                                    by <a href="https://saugi.me">Saugi</a>
                                </p>
                            </div>
                        </div>
                    </footer> */}
                </div>
            </div>


        </>
    );
}

export default AdminLayout;
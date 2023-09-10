import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAssets } from "../utilities/AssetsContext";
import "../../public/assets/extensions/perfect-scrollbar/perfect-scrollbar.min.js";
import "../../public/assets/compiled/js/app.js";

function AdminLayout({ children }) {
    const { assets } = useAssets();
    const location = useLocation();
    const isActive = (path) => location.pathname === path;
    return (
        <>
            {assets && (
                <link
                    rel="stylesheet"
                    href={`${window.location.origin}/public/assets/compiled/css/app.css`}
                />
            )}
            {assets && (
                <link
                    rel="stylesheet"
                    href={`${window.location.origin}/public/assets/compiled/css/iconly.css`}
                />
            )}
            <div id="app">
                <div id="sidebar">
                    <div className="sidebar-wrapper active">
                        <div className="sidebar-header position-relative">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="logo">
                                    <Link to="/"
                                    ><img style={{ width: "70px", height: "60px" }}
                                        src={`${window.location.origin}/logo.png`}
                                        alt="Logo"
                                        /></Link>
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
                                <li className={`sidebar-item ${isActive('/admin') ? 'active' : ''}`} >
                                    <Link to="/admin" className="sidebar-link">
                                        <i className="bi bi-grid-fill"></i>
                                        <span>Dashboard</span>
                                    </Link>
                                </li>

                                <li className={`sidebar-item ${isActive('/admin/kategori') ? 'active' : ''}`}>
                                    <Link to={"/admin/kategori"} className="sidebar-link">
                                        <i className="bi bi-layers-fill"></i>
                                        <span>Kategori Produk</span>
                                    </Link>
                                </li>

                                <li className={`sidebar-item ${isActive('/admin/pesanan') ? 'active' : ''}`}>
                                    <Link to={"/admin/pesanan"} className="sidebar-link">
                                        <i className="bi bi-cart-fill"></i>
                                        <span>Pesanan</span>
                                    </Link>
                                </li>

                                <li className={`sidebar-item ${isActive('/admin/pembayaran') ? 'active' : ''}`}>
                                    <Link to={"/admin/pembayaran"} className="sidebar-link">
                                        <i className="bi bi-wallet-fill"></i>
                                        <span>Pembayaran</span>
                                    </Link>
                                </li>

                                <li className={`sidebar-item ${isActive('/admin/pelanggan') ? 'active' : ''}`}>
                                    <Link to={"/admin/pelanggan"} className="sidebar-link">
                                        <i className="bi bi-people-fill"></i>
                                        <span>Pelanggan</span>
                                    </Link>
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
                                                        <img src={`${window.location.origin}/assets/compiled/jpg/1.jpg`} />
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        <ul
                                            className="dropdown-menu dropdown-menu-end"
                                            aria-labelledby="dropdownMenuButton"
                                            style={{ minWidth: "11rem" }}>
                                            <li>
                                                <Link className="dropdown-item" to="/admin/login"
                                                ><i className="icon-mid bi bi-box-arrow-left me-2"></i>
                                                    Logout</Link>
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
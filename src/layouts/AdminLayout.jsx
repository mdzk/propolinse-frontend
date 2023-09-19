import React, { useEffect, useLayoutEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAssets } from "../utilities/AssetsContext";
import "../../public/assets/compiled/js/app.js";
import axios from "axios";

function Nt(window) {
    return window.innerWidth <= 768;
}

function toggleSubmenu(submenu) {
    if (submenu.classList.contains("submenu-open")) {
        submenu.classList.remove("submenu-open");
        submenu.classList.add("submenu-closed");
    } else {
        submenu.classList.remove("submenu-closed");
        submenu.classList.add("submenu-open");
    }
}

function initSidebar(k, a = {}) {
    const sidebarEL = k instanceof HTMLElement ? k : document.querySelector(k);
    const options = a;

    function toggle() {
        if (sidebarEL.classList.contains("active")) {
            hide();
        } else {
            show();
        }
    }

    function show() {
        sidebarEL.classList.add("active");
        sidebarEL.classList.remove("inactive");
        createBackdrop();
        toggleOverflowBody();
    }

    function hide() {
        sidebarEL.classList.remove("active");
        sidebarEL.classList.add("inactive");
        deleteBackdrop();
        toggleOverflowBody();
    }

    function createBackdrop() {
        if (Nt(window)) return;
        deleteBackdrop();
        const backdrop = document.createElement("div");
        backdrop.classList.add("sidebar-backdrop");
        backdrop.addEventListener("click", hide);
        document.body.appendChild(backdrop);
    }

    function deleteBackdrop() {
        const backdrop = document.querySelector(".sidebar-backdrop");
        if (backdrop) {
            backdrop.remove();
        }
    }

    function toggleOverflowBody(k) {
        if (Nt(window)) return;
        const isActive = sidebarEL.classList.contains("active");
        const body = document.querySelector("body");
        if (typeof k !== "undefined") {
            body.style.overflowY = k ? "auto" : "hidden";
        } else {
            body.style.overflowY = isActive ? "hidden" : "auto";
        }
    }

    // function isElementInViewport(element) {
    //     var rect = element.getBoundingClientRect();
    //     return (
    //         rect.top >= 0 &&
    //         rect.left >= 0 &&
    //         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    //         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    //     );
    // }

    // function forceElementVisibility(element) {
    //     if (!isElementInViewport(element)) {
    //         element.scrollIntoView(false);
    //     }
    // }

    function onResize() {
        if (Nt(window)) {
            sidebarEL.classList.add("active");
        } else {
            sidebarEL.classList.remove("active");
        }
        deleteBackdrop();
        toggleOverflowBody(true);
    }

    document.querySelectorAll(".burger-btn").forEach(function (button) {
        button.addEventListener("click", toggle);
    });

    document.querySelectorAll(".sidebar-hide").forEach(function (button) {
        button.addEventListener("click", toggle);
    });

    window.addEventListener("resize", onResize);

    let sidebarItems = document.querySelectorAll(".sidebar-item.has-sub");

    sidebarItems.forEach(function (item) {
        item.querySelector(".sidebar-link").addEventListener("click", function (event) {
            event.preventDefault();
            let submenu = item.querySelector(".submenu");
            toggleSubmenu(submenu);
        });

        item.querySelectorAll(".submenu-item.has-sub").forEach(function (subItem) {
            subItem.addEventListener("click", function () {
                const submenu = subItem.querySelector(".submenu");
                toggleSubmenu(submenu);
                Kn(subItem.parentElement, true);
            });
        });
    });

    // setTimeout(function () {
    //     forceElementVisibility(document.querySelector(".sidebar-item.active"));
    // }, 300);
}

function initializeSidebar() {
    let yt = document.getElementById("sidebar");
    const Bn = (G) => {
        if (!yt) return;
        Nt(window) && (G.classList.add("sidebar-desktop"));
        let k = document.querySelectorAll(".sidebar-item.has-sub .submenu");
        for (var a = 0; a < k.length; a++) {
            let f = k[a];
            const r = f.parentElement;
            f.clientHeight,
                r.classList.contains("active") ? f.classList.add("submenu-open") : f.classList.add("submenu-closed"),
                setTimeout(() => {
                    Kn(f, true);
                }, 50);
        }
    };
    document.readyState !== "loading" ? Bn(yt) : window.addEventListener("DOMContentLoaded", () => Bn(yt));
    yt && (window.sidebar = initSidebar(yt));
}

function AdminLayout({ children }) {
    const backdrop = document.querySelector(".sidebar-backdrop");
    if (backdrop) {
        backdrop.remove();
    }
    const { assets } = useAssets();
    const location = useLocation();
    const isActive = (path) => location.pathname === path;
    useLayoutEffect(() => {
        initializeSidebar();

        const body = document.querySelector("body");
        body.style.overflowY = "auto";
    });

    // Logout
    const handleLogout = async () => {
        try {
            const authToken = localStorage.getItem('auth_token');

            if (authToken) {
                await axios.get(import.meta.env.VITE_API_URL + 'api/logout', {
                    headers: {
                        'Authorization': `Bearer ${authToken}`,
                        'Content-Type': 'application/json',
                    },
                });
                localStorage.removeItem('auth_token');
                window.location.href = '/';
            }
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    // Data Profile
    // const [userData, setUserData] = useState(null);

    // useEffect(() => {
    //     const authToken = localStorage.getItem('auth_token');
    //     if (authToken) {
    //         axios.get(import.meta.env.VITE_API_URL + 'api/user', {
    //             headers: {
    //                 'Authorization': `Bearer ${authToken}`,
    //                 'Content-Type': 'application/json',
    //             },
    //         })
    //             .then(response => {
    //                 const { data } = response;
    //                 setUserData(data.data);
    //             })
    //             .catch(error => {
    //                 console.error('Error fetching user data:', error);
    //             });
    //     }
    // }, []);
    // if (!userData) {
    //     return <div>Loading...</div>;
    // }

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
                                                    {/* <h6 className="mb-0 text-gray-600">John Ducky</h6> */}
                                                    {/* <p className="mb-0 text-sm text-gray-600">{userData.name}</p> */}
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
                                                <button className="dropdown-item" onClick={handleLogout}>
                                                    <i className="icon-mid bi bi-box-arrow-left me-2"></i>
                                                    Logout
                                                </button>
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
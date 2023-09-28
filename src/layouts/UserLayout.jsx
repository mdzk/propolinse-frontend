import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAssets } from "../utilities/AssetsContext";
import Login from "../components/LoginModal"
import Register from "../components/RegisterModal"
import LupaPassword from "../components/LupaPasswordModal"
import ResetCodeModal from "../components/ResetCodeModal"
import ResetPasswordModal from "../components/ResetPasswordModal"
import ResetSuccessModal from "../components/ResetSuccessModal"
import axios from "axios";
import CartItem from "../components/CartItem";

function UserLayout({ children, refreshUserLayout }) {
    const { assets } = useAssets();

    const [showLogin, setShowLogin] = useState(true);
    const [showRegister, setShowRegister] = useState(false);
    const [showLupaPasswordModal, setShowLupaPasswordModal] = useState(false);
    const [showResetCodeModal, setShowResetCodeModal] = useState(false);
    const [showResetPasswordModal, setShowResetPasswordModal] = useState(false);
    const [showResetSuccessModal, setShowResetSuccessModal] = useState(false);
    const [resetCode, setResetCode] = useState("");
    const [cartItems, setCartItems] = useState([]);
    const [cartRefresh, setCartRefresh] = useState(false);
    const hasItemsInCart = cartItems.length > 0;

    const showResetPassword = (code) => {
        setShowResetPasswordModal(true);
        setShowLogin(false);
        setShowRegister(false);
        setShowLupaPasswordModal(false);
        setShowResetCodeModal(false);
        setResetCode(code);
    };

    const showResetSuccess = () => {
        setShowResetPasswordModal(false);
        setShowResetSuccessModal(true);
        setShowLogin(false);
        setShowRegister(false);
        setShowLupaPasswordModal(false);
        setShowResetCodeModal(false);
    };

    const toggleForm = () => {
        setShowLogin(!showLogin);
        setShowRegister(false);
        setShowLupaPasswordModal(false);
    };

    const showLupaPassword = () => {
        setShowLogin(false);
        setShowLupaPasswordModal(true);
    };

    const showRegistration = () => {
        setShowLogin(false);
        setShowRegister(true);
    };

    const showLoginFromRegister = () => {
        setShowLogin(true);
        setShowRegister(false);
        setShowResetSuccessModal(false);
    };

    const showLoginFromLupaPassword = () => {
        setShowLogin(true);
        setShowLupaPasswordModal(false);
    };

    const showResetCode = () => {
        setShowLogin(false);
        setShowRegister(false);
        setShowLupaPasswordModal(false);
        setShowResetCodeModal(true);
    };

    // cek login
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userRole, setUserRole] = useState(null);

    useEffect(() => {
        const authToken = localStorage.getItem('auth_token');

        if (authToken) {
            axios.get(import.meta.env.VITE_API_URL + 'api/user', {
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                    'Content-Type': 'application/json',
                },
            })
                .then(response => {
                    const { data } = response;
                    setUserRole(data.data.role);
                    setIsLoggedIn(true);
                })
                .catch(error => {
                    console.error('Error fetching user data:', error);
                });

            // Mengambil data keranjang dari API
            axios.get(`${import.meta.env.VITE_API_URL}api/carts/user/home`, {
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                },
            })
                .then(response => {
                    setCartItems(response.data);
                })
                .catch(error => {
                    console.error('Error fetching cart data:', error);
                });
        }
        if (cartRefresh) {
            loadCartData();
        }
    }, [cartRefresh, refreshUserLayout]);

    const loadCartData = () => {
        const authToken = localStorage.getItem('auth_token');
        axios.get(`${import.meta.env.VITE_API_URL}api/carts/user/home`, {
            headers: {
                'Authorization': `Bearer ${authToken}`,
            },
        })
            .then(response => {
                setCartItems(response.data);
                setCartRefresh(false);
            })
            .catch(error => {
                console.error('Error fetching cart data:', error);
            });
    };

    const removeProduct = (cartId) => {
        const authToken = localStorage.getItem('auth_token');
        axios.delete(`${import.meta.env.VITE_API_URL}api/carts/del/${cartId}`, {
            headers: {
                'Authorization': `Bearer ${authToken}`,
            },
        })
            .then(response => {
                setCartItems(prevCartItems => {
                    const updatedCartItems = prevCartItems.filter(item => item.id !== cartId);
                    return updatedCartItems;
                });

                setCartRefresh(true);
            })
            .catch(error => {
                console.error('Error removing product:', error);
            });
    };

    return (
        <>
            {assets && <link rel="stylesheet" href={`${window.location.origin}/public/assets/css/bootstrap.min.css`} />}
            {assets && <link rel="stylesheet" href={`${window.location.origin}/public/assets/css/plugins/owl-carousel/owl.carousel.css`} />}
            {assets && <link rel="stylesheet" href={`${window.location.origin}/public/assets/css/plugins/flickity.css`} />}
            {assets && <link rel="stylesheet" href={`${window.location.origin}/public/assets/css/plugins/magnific-popup/magnific-popup.css`} />}
            {assets && <link rel="stylesheet" href={`${window.location.origin}/public/assets/css/style.css`} />}
            {assets && <link rel="stylesheet" href={`${window.location.origin}/public/assets/css/demos/demo-21.css`} />}
            {assets && <link rel="stylesheet" href={`${window.location.origin}/public/assets/css/main.css`} />}

            <div className="top-banner d-flex align-items-center justify-content-center">
                <img src={`${window.location.origin}/assets/images/PIERAS PROPOLINSE.png`} alt="color_atas" />
            </div>

            <nav className="box navbar navbar-expand-lg navbar-light bg-white sticky-header">

                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src={`${window.location.origin}/public/logo.png`} width="94" height="118" alt="" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarNavDropdown">
                        <ul className="navbar-nav w-100 nav justify-content-center">
                            <li className="nav-item dropdown mx-3">
                                <a className="nav-link text-uppercase" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Mouthwash
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <Link className="dropdown-item" to="/bigsize">Big Size</Link>
                                    <Link className="dropdown-item" to="/travelsize">Travel Size</Link>
                                </div>
                            </li>
                            <li className="nav-item dropdown mx-3">
                                <a className="nav-link text-uppercase" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Toothbrush
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <Link className="dropdown-item" to="/home">Home</Link>
                                    <Link className="dropdown-item" to="/holiday">Holiday</Link>
                                </div>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link text-uppercase" to="/collaboration">Collaboration</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link text-uppercase" to="/bundling">Bundling</Link>
                            </li>
                        </ul>
                        <div className="header-right d-flex justify-content-end align-items-center">

                            <div className="header-search mr-3">
                                <a href="#" className="search-toggle" role="button" title="Search">
                                    <i className="icon-search" />
                                </a>
                                <form action="#" method="get">
                                    <div className="header-search-wrapper">
                                        <label htmlFor="q" className="sr-only">
                                            Search
                                        </label>
                                        <input type="search" className="form-control" name="q" id="q" placeholder="Search in..." required="" />
                                    </div>
                                </form>
                            </div>

                            <div className="header-login ml-3 d-flex justify-content-end">

                                {isLoggedIn && userRole === 'user' ? (
                                    <Link to={"/user"}>
                                        <img
                                            src={`${window.location.origin}/assets/images/login.png`}
                                            alt="color_atas"
                                            width={22}
                                            height={34}
                                        />
                                    </Link>
                                ) : (
                                    <>
                                        <a type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <img
                                                src={`${window.location.origin}/assets/images/login.png`}
                                                alt="color_atas"
                                                width={22}
                                                height={34}
                                            />
                                        </a>

                                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-dialog">
                                                {showLogin && (
                                                    <Login
                                                        showRegistration={showRegistration}
                                                        showLupaPassword={showLupaPassword}
                                                    />
                                                )}
                                                {showRegister && (
                                                    <Register
                                                        showLoginFromRegister={showLoginFromRegister}
                                                    />
                                                )}
                                                {showLupaPasswordModal && (
                                                    <LupaPassword
                                                        showLoginFromLupaPassword={showLoginFromLupaPassword}
                                                        showResetCode={showResetCode}
                                                    />
                                                )}
                                                {showResetCodeModal && (
                                                    <ResetCodeModal
                                                        showResetPassword={showResetPassword}
                                                    />
                                                )}
                                                {showResetPasswordModal && (
                                                    <ResetPasswordModal
                                                        showResetSuccess={showResetSuccess}
                                                        code={resetCode}
                                                    />
                                                )}

                                                {showResetSuccessModal && (
                                                    <ResetSuccessModal
                                                        showLoginFromRegister={showLoginFromRegister}
                                                    />
                                                )}

                                            </div>
                                        </div>
                                    </>
                                )}


                            </div>

                            {!isLoggedIn ? (
                                <>
                                    <a type="button" className="ml-3" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                                        <img
                                            src={`${window.location.origin}/assets/images/keranjang.png`}
                                            alt="color_atas"
                                            width={22}
                                            height={34}
                                        />
                                    </a>

                                    <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                            {showLogin && (
                                                <Login
                                                    showRegistration={showRegistration}
                                                    showLupaPassword={showLupaPassword}
                                                />
                                            )}
                                            {showRegister && (
                                                <Register
                                                    showLoginFromRegister={showLoginFromRegister}
                                                />
                                            )}
                                            {showLupaPasswordModal && (
                                                <LupaPassword
                                                    showLoginFromLupaPassword={showLoginFromLupaPassword}
                                                    showResetCode={showResetCode}
                                                />
                                            )}
                                            {showResetCodeModal && (
                                                <ResetCodeModal
                                                    showResetPassword={showResetPassword}
                                                />
                                            )}
                                            {showResetPasswordModal && (
                                                <ResetPasswordModal
                                                    showResetSuccess={showResetSuccess}
                                                    code={resetCode}
                                                />
                                            )}

                                            {showResetSuccessModal && (
                                                <ResetSuccessModal
                                                    showLoginFromRegister={showLoginFromRegister}
                                                />
                                            )}

                                        </div>
                                    </div>
                                </>
                            ) : (
                                <div className="dropdown cart-dropdown mr-3">
                                    <a href="#" className="dropdown-toggle" role="button" data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        data-display="static"
                                    >
                                        <img
                                            src={`${window.location.origin}/assets/images/keranjang.png`}
                                            alt="color_atas"
                                            width={19}
                                            height={20}
                                        />
                                        {/* <span className="cart-count">2</span> */}
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <div className="dropdown-cart-products">
                                            {cartItems.map((item, index) => (
                                                <CartItem
                                                    key={index}
                                                    name={item.barang.nm_brg}
                                                    price={item.barang.hrg_brg}
                                                    quantity={item.quantity}
                                                    image={item.barang.image}
                                                    cartId={item.id}
                                                    onRemove={() => removeProduct(item.id)}
                                                />
                                            ))}
                                        </div>
                                        {/* <div className="dropdown-cart-total">
                                            <span>Total</span>
                                            <span className="cart-total-price">$160.00</span>
                                        </div> */}
                                        {/* End .dropdown-cart-total */}
                                        <div className="dropdown-cart-action mt-2">
                                            {/* <a href="cart.html" className="btn btn-primary">
                                                View Cart
                                            </a> */}
                                            {hasItemsInCart ? (
                                                <Link
                                                    to={'/checkout'}
                                                    className="btn btn-outline-primary-2 w-100"
                                                >
                                                    <span>View More</span>
                                                    <i className="icon-long-arrow-right" />
                                                </Link>
                                            ) : (
                                                <button
                                                    className="btn disabled w-100"
                                                >
                                                    <span>No Product</span>
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </nav>

            {children}

            <div className="bg-footer mt-auto">
                <div className="container-footer">
                    <div className="container service ">
                        <div className="col-lg-4">
                            <div className="my-5 d-flex justify-content-center align-items-center">
                                <span className="icon-box-icon mr-3 mb-0">
                                    <Link to="/findstore">
                                        <img src={`${window.location.origin}/assets/images/find-store.png`} />
                                    </Link>
                                </span>
                                <div className="icon-box-content">
                                    <Link to="/findstore">
                                        <h3 className="icon-box-title mb-0">Find Store</h3>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="my-5 d-flex justify-content-center align-items-center">
                                <span className="icon-box-icon mr-3 mb-0">
                                    <Link to="/becomereseller">
                                        <img src={`${window.location.origin}/assets/images/become-reseller.png`} />
                                    </Link>
                                </span>
                                <div className="icon-box-content">
                                    <Link to="/becomereseller">
                                        <h3 className="icon-box-title mb-0">Become Reseller</h3>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="my-5 d-flex justify-content-center align-items-center">
                                <span className="icon-box-icon text-dark mr-3 mb-0">
                                    <Link to="/faq">
                                        <img src={`${window.location.origin}/assets/images/faq.png`} />
                                    </Link>
                                </span>
                                <div className="icon-box-content">
                                    <Link to="/faq">
                                        <h3 className="icon-box-title mb-0">FAQ</h3>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container text-center">
                        <p>
                            "Produk yang asli sudah ber-BPOM dan memiliki kadaluarsa hanya di
                            Pieras propolinse indonesia. Jangan sampai salah beli karena
                            diluar sana banyak barang palsu yang bisa menyebabkan gigi rusak
                            dan kanker mulut " .{" "}
                        </p>
                    </div>
                    <hr className="" />

                    <div className="container">

                        <div className="row">
                            <div className="col-md-4 d-flex align-items-center justify-content-center mt-3">
                                <div className="w-100">
                                    <h5>
                                        <strong>Hey, let's Join!</strong>
                                    </h5>
                                    <form action="#" className="">
                                        <div className="input-group">
                                            <input className="bg-email mb-1 mr-3" type="email" placeholder="Email Address" aria-label="Email Adress" required="" />
                                            <div className="col-xl mb-1 p-0">
                                                <button className="bg-subcribe" type="submit">
                                                    <span>Subscribe</span>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div className="col-md-4 d-flex justify-content-center mt-3">
                                <div>
                                    <h6>
                                        <strong>INFO</strong>
                                    </h6>
                                    <ul className="widget-list">
                                        <li>
                                            <Link to="https://wa.me/6289504869238">Contact US</Link>
                                        </li>
                                        <li>
                                            <Link to="/about">About US</Link>
                                        </li>
                                        <li>
                                            <Link to="/findstore">Market Place</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-md-4 d-flex justify-content-center mt-3">
                                <div>
                                    <h6>
                                        <strong>ACCOUNT</strong>
                                    </h6>
                                    <ul className="widget-list">
                                        <li>
                                            <Link to="/privacypolicy">Privacy Policy</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="footer-bottom">
                        <div className="container">
                            <p className="footer-copyright">© PBP Group 2023 |</p>
                            <div className="social-icons social-icons-color">
                                <Link
                                    to="https://www.facebook.com/pieraspropolinseindonesia?mibextid=ZbWKwL"
                                    className="social-icon social-facebook"
                                    title="Facebook"
                                    target="_blank"
                                >
                                    <i className="icon-facebook-f"></i>
                                </Link>

                                <Link
                                    to="https://instagram.com/propolinseindonesia?igshid=MzRlODBiNWFlZA=="
                                    className="social-icon social-instagram"
                                    title="Instagram"
                                    target="_blank"
                                >
                                    <i className="icon-instagram"></i>
                                </Link>

                                <Link
                                    to="https://www.tiktok.com/@pieraspropolinseofficial?_t=8eWb1Q6Otnk&_r=1"
                                    className="social-icon social-instagram"
                                >
                                    <img
                                        src="./public/tiktok.png"
                                        alt="Logo"
                                        width={12}
                                        height={12}
                                    />
                                </Link>

                                <Link
                                    to="https://wa.me/6289504869238"
                                    className="social-icon social-whatsapp"
                                    title="whatsapp"
                                    target="_blank"
                                >
                                    <i className="icon-whatsapp"></i>
                                </Link>

                                <Link
                                    to="https://tokopedia.link/iLURJBXoXBb"
                                    className="social-icon social-instagram"
                                >
                                    <img
                                        src="./public/tokopedia.png"
                                        alt="Logo"
                                        width={20}
                                        height={20}
                                    />
                                </Link>

                                <Link
                                    to="https://shopee.co.id/theababysofficial"
                                    className="social-icon social-instagram"
                                >
                                    <img
                                        src="./public/shopee.png"
                                        alt="Logo"
                                        width={20}
                                        height={20}
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {assets && <script src={`${window.location.origin}/public/assets/js/jquery.min.js`}></script>}
            {assets && <script src={`${window.location.origin}/public/assets/js/bootstrap.bundle.min.js`}></script>}
            {assets && <script src={`${window.location.origin}/public/assets/js/jquery.hoverIntent.min.js`}></script>}
            {assets && <script src={`${window.location.origin}/public/assets/js/jquery.waypoints.min.js`}></script>}
            {assets && <script src={`${window.location.origin}/public/assets/js/superfish.min.js`}></script>}
            {assets && <script src={`${window.location.origin}/public/assets/js/owl.carousel.min.js`}></script>}
            {assets && <script src={`${window.location.origin}/public/assets/js/jquery.magnific-popup.min.js`}></script>}
            {assets && <script src={`${window.location.origin}/public/assets/js/demos/demo-21.js`}></script>}
            {assets && <script src={`${window.location.origin}/public/assets/js/flickity.js`}></script>}
            {assets && <script src={`${window.location.origin}/public/assets/js/main.js`}></script>}
        </>
    );
}

export default UserLayout;
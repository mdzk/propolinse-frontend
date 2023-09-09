import React from "react";
import { Link } from "react-router-dom";
import { useAssets } from "../components/AssetsContext";

function UserLayout({ children }) { // Ambil children sebagai argumen dari komponen
    const { assets } = useAssets();

    return (
        <>
            {assets && <link rel="stylesheet" href="./public/assets/css/bootstrap.min.css" />}
            {assets && <link rel="stylesheet" href="./public/assets/css/plugins/owl-carousel/owl.carousel.css" />}
            {assets && <link rel="stylesheet" href="./public/assets/css/plugins/flickity.css" />}
            {assets && <link rel="stylesheet" href="./public/assets/css/plugins/magnific-popup/magnific-popup.css" />}
            {assets && <link rel="stylesheet" href="./public/assets/css/style.css" />}
            {assets && <link rel="stylesheet" href="./public/assets/css/demos/demo-21.css" />}
            {assets && <link rel="stylesheet" href="./public/assets/css/main.css" />}

            <div className="top-banner d-flex align-items-center justify-content-center">
                <img src="assets/images/PIERAS PROPOLINSE.png" alt="color_atas" />
            </div>

            <nav className="box navbar navbar-expand-lg navbar-light bg-white sticky-header">

                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src="./public/logo.png" width="94" height="118" alt="" />
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

                            <div className="header-login ml-3">
                                <a href="/loginpage">
                                    <img
                                        src="assets/images/login.png"
                                        alt="color_atas"
                                        width={22}
                                        height={34}
                                    />
                                </a>
                            </div>

                            <div className="dropdown cart-dropdown mr-3">
                                <a href="#" className="dropdown-toggle" role="button" data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    data-display="static"
                                >
                                    <img
                                        src="assets/images/keranjang.png"
                                        alt="color_atas"
                                        width={19}
                                        height={20}
                                    />
                                    <span className="cart-count">2</span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <div className="dropdown-cart-products">
                                        <div className="product">
                                            <div className="product-cart-details">
                                                <h4 className="product-title">
                                                    <a href="product.html">
                                                        Beige knitted elastic runner shoes
                                                    </a>
                                                </h4>
                                                <span className="cart-product-info">
                                                    <span className="cart-product-qty">1</span>x $84.00
                                                </span>
                                            </div>
                                            {/* End .product-cart-details */}
                                            <figure className="product-image-container">
                                                <a href="product.html" className="product-image">
                                                    <img
                                                        src="assets/images/carousel/1.jpeg"
                                                        alt="product"
                                                    />
                                                </a>
                                            </figure>
                                            <a
                                                href="#"
                                                className="btn-remove"
                                                title="Remove Product"
                                            >
                                                <i className="icon-close" />
                                            </a>
                                        </div>
                                        {/* End .product */}
                                        <div className="product">
                                            <div className="product-cart-details">
                                                <h4 className="product-title">
                                                    <a href="product.html">
                                                        Blue utility pinafore denim dress
                                                    </a>
                                                </h4>
                                                <span className="cart-product-info">
                                                    <span className="cart-product-qty">1</span>x $76.00
                                                </span>
                                            </div>
                                            {/* End .product-cart-details */}
                                            <figure className="product-image-container">
                                                <a href="product.html" className="product-image">
                                                    <img
                                                        src="assets/images/carousel/2.jpeg"
                                                        alt="product"
                                                    />
                                                </a>
                                            </figure>
                                            <a
                                                href="#"
                                                className="btn-remove"
                                                title="Remove Product"
                                            >
                                                <i className="icon-close" />
                                            </a>
                                        </div>
                                        {/* End .product */}
                                    </div>
                                    {/* End .cart-product */}
                                    <div className="dropdown-cart-total">
                                        <span>Total</span>
                                        <span className="cart-total-price">$160.00</span>
                                    </div>
                                    {/* End .dropdown-cart-total */}
                                    <div className="dropdown-cart-action">
                                        <a href="cart.html" className="btn btn-primary">
                                            View Cart
                                        </a>
                                        <a
                                            href="checkout.html"
                                            className="btn btn-outline-primary-2"
                                        >
                                            <span>Checkout</span>
                                            <i className="icon-long-arrow-right" />
                                        </a>
                                    </div>
                                </div>
                            </div>

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
                                        <img src="assets/images/find-store.png" />
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
                                        <img src="assets/images/become-reseller.png" />
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
                                        <img src="assets/images/faq.png" />
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

            {assets && <script src="./public/assets/js/jquery.min.js"></script>}
            {assets && <script src="./public/assets/js/bootstrap.bundle.min.js"></script>}
            {assets && <script src="./public/assets/js/jquery.hoverIntent.min.js"></script>}
            {assets && <script src="./public/assets/js/jquery.waypoints.min.js"></script>}
            {assets && <script src="./public/assets/js/superfish.min.js"></script>}
            {assets && <script src="./public/assets/js/owl.carousel.min.js"></script>}
            {assets && <script src="./public/assets/js/jquery.magnific-popup.min.js"></script>}
            {assets && <script src="./public/assets/js/demos/demo-21.js"></script>}
            {assets && <script src="./public/assets/js/flickity.js"></script>}
            {assets && <script src="./public/assets/js/main.js"></script>}
        </>
    );
}

export default UserLayout;
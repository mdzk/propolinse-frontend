import React from "react";
import { Link } from "react-router-dom";

function Header(params) {
    return (
        <>

            <div class="top-banner d-flex align-items-center justify-content-center">
                <img src="assets/images/PIERAS PROPOLINSE.png" alt="color_atas" />
            </div>

            <nav class="box navbar navbar-expand-lg navbar-light bg-white sticky-header">
                <a class="navbar-brand" href="/">
                    <img src="./public/logo.png" width="94" height="118" alt="" />
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-between" id="navbarNavDropdown">
                    <ul class="navbar-nav w-100 nav justify-content-center">
                        <li class="nav-item dropdown mx-3">
                            <a class="nav-link text-uppercase" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Mouthwash
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a class="dropdown-item" href="/originalsize">Original Size</a>
                                <a class="dropdown-item" href="/travelsize">Travel Size</a>
                            </div>
                        </li>
                        <li class="nav-item dropdown mx-3">
                            <a class="nav-link text-uppercase" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Toothbrush
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a class="dropdown-item" href="/home">Home</a>
                                <a class="dropdown-item" href="/holiday">Holiday</a>
                            </div>
                        </li>
                        <li class="nav-item dropdown mx-3">
                            <a class="nav-link text-uppercase" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Collaboration
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a class="dropdown-item" href="/temenfokus">Temen Fokus</a>
                                <a class="dropdown-item" href="/pastagigi">Pasta Gigi</a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-uppercase" href="#">Bundling</a>
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
                            <Link to="/loginpage">
                                <img
                                    src="assets/images/login.png"
                                    alt="color_atas"
                                    width={22}
                                    height={34}
                                />
                            </Link>
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
                                                    src="assets/images/products/cart/product-1.jpg"
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
                                                    src="assets/images/products/cart/product-2.jpg"
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
            </nav>
        </>
    );
}
export default Header;

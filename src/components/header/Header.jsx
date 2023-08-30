import React from "react";
import { Link } from "react-router-dom";

function Header(params) {
  return (
    <>
      <link href="/assets/css/main.css?url" rel="stylesheet" />

      <div className="top-banner d-flex align-items-center justify-content-center">
        <img src="assets/images/PIERAS PROPOLINSE.png" alt="color_atas" />
      </div>

      <nav className="box navbar navbar-expand-lg navbar-light bg-white sticky-header">
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

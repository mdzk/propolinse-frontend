import React from "react";

function CartItem({ props }) {
    return (
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
    );
}

export default CartItem;
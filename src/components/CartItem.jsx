import React from "react";

function CartItem(props) {
    const handleRemoveClick = () => {
        props.onRemove();
    };

    return (
        <div className="product">
            <div className="product-cart-details">
                <h4 className="product-title">
                    <a href="product.html">
                        {props.name}
                    </a>
                </h4>
                <span className="cart-product-info">
                    <span className="cart-product-qty">{props.quantity}</span>x Rp{props.price}
                </span>
            </div>
            <figure className="product-image-container">
                <a href="product.html" className="product-image">
                    <img
                        src={import.meta.env.VITE_API_URL + "storage/posts/" + props.image}
                        alt="product"
                    />
                </a>
            </figure>
            <button
                className="btn-remove"
                title="Remove Product"
                onClick={props.onRemove}
            >
                <i className="icon-close" />
            </button>
        </div>
    );
}

export default CartItem;

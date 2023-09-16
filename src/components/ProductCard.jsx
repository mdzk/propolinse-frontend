import React from "react";
import { Link } from "react-router-dom";

function ProductCard(props) {
    return (
        <div className="col-md-3">
            <div className="product demo21">
                <figure className="product-media">
                    <span className="product-label label-new">New</span>
                    <Link className="d-flex justify-content-center" to="/sakuraoriginal">
                        <img
                            src="../../../public/assets/images/big/sakura.png"
                            alt="Product image"
                        />
                    </Link>
                </figure>
                <div className="product-body text-center">
                    <div className="product-cat mt-2">
                        <a href="#">Pieras Propolinse</a>
                    </div>
                    <h3 className="product-title">
                        <Link to="/sakuraoriginal">{props.title}</Link>
                    </h3>
                    <div className="product-price">
                        <span className="cur-price">Rp195.000</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
import React from "react";
import { Link } from "react-router-dom";
import CurrencyFormat from 'react-currency-format';

function ProductCard(props) {
    const apiUrl = import.meta.env.VITE_API_URL + "storage/posts/";
    return (
        <div className="col-md-3">
            <div className="product demo21">
                <figure className="product-media">
                    <span className="product-label label-new">New</span>
                    <Link className="d-flex justify-content-center" to={"/detail/" + props.id}>
                        <img
                            src={apiUrl + props.image}
                            alt="Product image"
                            style={{ height: "230px" }}
                        />
                    </Link>
                </figure>
                <div className="product-body text-center">
                    <div className="product-cat mt-2">
                        <a href="#">{props.category}</a>
                    </div>
                    <h3 className="product-title">
                        <Link to={"/detail/" + props.id}>{props.title}</Link>
                    </h3>
                    <div className="product-price">
                        <span className="cur-price">
                            <CurrencyFormat value={props.price} displayType={'text'} thousandSeparator={true} prefix={'Rp'} />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
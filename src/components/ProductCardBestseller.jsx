import React from "react";
import { Link } from "react-router-dom";
import CurrencyFormat from 'react-currency-format';

function ProductCardBestseller(props) {
    const apiUrl = import.meta.env.VITE_API_URL + "storage/posts/";
    return (
        <div className="owl-item" style={{ width: "200.5px", marginRight: 20 }} >
            <div className="product demo21">
                <figure className="">
                    <Link className="d-flex justify-content-center" to={"/detail/" + props.id}>
                        <img
                            className="img-home"
                            src={apiUrl + props.image}
                            alt="Product image"
                            style={{ height: "230px" }}
                        />
                    </Link>
                </figure>
                <div className="product-body text-center">
                    <h3 className="product-title">
                        <Link to={"/detail/" + props.id}>{props.title}</Link>

                    </h3>
                    <div className="product-price">

                        <span className="hightlight-home">
                            <CurrencyFormat value={props.price} displayType={'text'} thousandSeparator={true} prefix={'Rp'} />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCardBestseller;
import React from "react";
import { Link } from "react-router-dom";


const Collaboration = () => {
    return (
        <>
            <main className="main">
                <div className="container bestsellers">
                    <div className="heading">
                        <h2 className="title ">Collaboration (4)</h2>
                    </div>

                    <div className="row">
                        <div className="col-md-3">
                            <div className="product demo21">
                                <figure className="product-media">
                                    <span className="product-label label-new">New</span>
                                    <Link className="d-flex justify-content-center" to="/temenfokus">
                                        <img style={{ height: "335px" }}
                                            src="../../../public/assets/images/collaboration/temenfokus.png"
                                            alt="Product image"
                                        />
                                    </Link>
                                </figure>
                                <div className="product-body text-center">
                                    <div className="product-cat mt-2">
                                        <a href="#">Collaboration</a>
                                    </div>
                                    <h3 className="product-title">
                                        <Link to="/temenfokus">Temen Fokus</Link>
                                    </h3>
                                    <div className="product-price">
                                        <span className="cur-price">Rp195.000</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="product demo21">
                                <figure className="product-media">
                                    <span className="product-label label-new">New</span>
                                    <Link className="d-flex justify-content-center" to="/orangeoriginal">
                                        <img style={{ height: "335px" }}
                                            src="../../../public/assets/images/collaboration/lemon.png"
                                            alt="Product image"
                                        />
                                    </Link>
                                </figure>
                                <div className="product-body text-center">
                                    <div className="product-cat mt-2">
                                        <a href="#">Collaboration</a>
                                    </div>
                                    <h3 className="product-title">
                                        <Link to="/orangeoriginal">Pasta Del Capitano
                                            Sicily Lemon</Link>
                                    </h3>
                                    <div className="product-price">
                                        <span className="cur-price">Rp195.000</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="product demo21">
                                <figure className="product-media">
                                    <span className="product-label label-new">New</span>
                                    <Link className="d-flex justify-content-center" to="/blackoriginal">
                                        <img style={{ height: "335px" }}
                                            src="../../../public/assets/images/collaboration/recipe.png"
                                            alt="Product image"
                                        />
                                    </Link>
                                </figure>
                                <div className="product-body text-center">
                                    <div className="product-cat mt-2">
                                        <a href="#">Collaboration</a>
                                    </div>
                                    <h3 className="product-title">
                                        <Link to="/blackoriginal">Pasta Del Capitano
                                            Original Recipe</Link>
                                    </h3>
                                    <div className="product-price">
                                        <span className="cur-price">Rp195.000</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="product demo21">
                                <figure className="product-media">
                                    <span className="product-label label-new">New</span>
                                    <Link className="d-flex justify-content-center" to="/whiteoriginal">
                                        <img style={{ height: "335px" }}
                                            src="../../../public/assets/images/collaboration/whitening.png"
                                            alt="Product image"
                                        />
                                    </Link>
                                </figure>
                                <div className="product-body text-center">
                                    <div className="product-cat mt-2">
                                        <a href="#">Collaboration</a>
                                    </div>
                                    <h3 className="product-title">
                                        <Link to="/whiteoriginal">Pasta Del Capitano
                                            Whitening</Link>
                                    </h3>
                                    <div className="product-price">
                                        <span className="cur-price">Rp195.000</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </>
    );
};

export default Collaboration;

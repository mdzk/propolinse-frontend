import React from "react";
import { Link } from "react-router-dom";


const TravelSize = () => {
  return (
    <>
      <main className="main">
        <div className="container bestsellers">
          <div className="heading">
            <h2 className="title ">Mouthwash Travel Size (5)</h2>
          </div>

          <div className="row">
            <div className="col-md-3">
              <div className="product demo21">
                <figure className="product-media">
                  <span className="product-label label-new">New</span>
                  <Link className="d-flex justify-content-center" to="/sakuraoriginal">
                    <img
                      src="../../../public/assets/images/travel/sakura.png"
                      alt="Product image"
                    />
                  </Link>
                </figure>
                <div className="product-body text-center">
                  <div className="product-cat mt-2">
                    <a href="#">Pieras Propolinse</a>
                  </div>
                  <h3 className="product-title">
                    <Link to="/sakuraoriginal">Sakura Big Size 150mL</Link>
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
                    <img
                      src="../../../public/assets/images/travel/orange.png"
                      alt="Product image"
                    />
                  </Link>
                </figure>
                <div className="product-body text-center">
                  <div className="product-cat mt-2">
                    <a href="#">Pieras Propolinse</a>
                  </div>
                  <h3 className="product-title">
                    <Link to="/orangeoriginal">Orange Big Size 150mL</Link>
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
                    <img
                      src="../../../public/assets/images/travel/black.png"
                      alt="Product image"
                    />
                  </Link>
                </figure>
                <div className="product-body text-center">
                  <div className="product-cat mt-2">
                    <a href="#">Pieras Propolinse</a>
                  </div>
                  <h3 className="product-title">
                    <Link to="/blackoriginal">Black Big Size 150mL</Link>
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
                    <img
                      src="../../../public/assets/images/travel/white.png"
                      alt="Product image"
                    />
                  </Link>
                </figure>
                <div className="product-body text-center">
                  <div className="product-cat mt-2">
                    <a href="#">Pieras Propolinse</a>
                  </div>
                  <h3 className="product-title">
                    <Link to="/whiteoriginal">Dental White Big Size 150mL</Link>
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
                  <Link className="d-flex justify-content-center" to="/yuzuoriginal">
                    <img
                      src="../../../public/assets/images/travel/yuzu.png"
                      alt="Product image"
                    />
                  </Link>
                </figure>
                <div className="product-body text-center">
                  <div className="product-cat mt-2">
                    <a href="#">Pieras Propolinse</a>
                  </div>
                  <h3 className="product-title">
                    <Link to="/yuzuoriginal">Yuzu Big Size 150mL</Link>
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

export default TravelSize;

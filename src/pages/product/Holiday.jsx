import React from "react";
import { Link } from "react-router-dom";


const Holiday = () => {
  return (
    <>
      <main className="main">
        <div className="container bestsellers">
          <div className="heading">
            <h2 className="title ">Toothbrush Holiday (5)</h2>
          </div>

          <div className="row">
            <div className="col-md-3">
              <div className="product demo21">
                <figure className="product-media">
                  <span className="product-label label-new">New</span>
                  <Link className="d-flex justify-content-center" to="/sakuraoriginal">
                    <img style={{ width: "500px" }}
                      src="../../../public/assets/images/holiday/red.png"
                      alt="Product image"
                    />
                  </Link>
                </figure>
                <div className="product-body text-center">
                  <div className="product-cat mt-2">
                    <a href="#">Electric Toothbrush</a>
                  </div>
                  <h3 className="product-title">
                    <Link to="/sakuraoriginal">Holiday Christmas Red</Link>
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
                      src="../../../public/assets/images/holiday/white.png"
                      alt="Product image"
                    />
                  </Link>
                </figure>
                <div className="product-body text-center">
                  <div className="product-cat mt-2">
                    <a href="#">Electric Toothbrush</a>
                  </div>
                  <h3 className="product-title">
                    <Link to="/orangeoriginal">IONPA Holiday White</Link>
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
                      src="../../../public/assets/images/holiday/rose.png"
                      alt="Product image"
                    />
                  </Link>
                </figure>
                <div className="product-body text-center">
                  <div className="product-cat mt-2">
                    <a href="#">Electric Toothbrush</a>
                  </div>
                  <h3 className="product-title">
                    <Link to="/blackoriginal">IONPA Holiday Rose Gold</Link>
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
                      src="../../../public/assets/images/holiday/blue.png"
                      alt="Product image"
                    />
                  </Link>
                </figure>
                <div className="product-body text-center">
                  <div className="product-cat mt-2">
                    <a href="#">Electric Toothbrush</a>
                  </div>
                  <h3 className="product-title">
                    <Link to="/whiteoriginal">Head Refills Holiday Blue</Link>
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
                      src="../../../public/assets/images/holiday/sand.png"
                      alt="Product image"
                    />
                  </Link>
                </figure>
                <div className="product-body text-center">
                  <div className="product-cat mt-2">
                    <a href="#">Electric Toothbrush</a>
                  </div>
                  <h3 className="product-title">
                    <Link to="/yuzuoriginal">Head Refills Holiday Blue</Link>
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

export default Holiday;

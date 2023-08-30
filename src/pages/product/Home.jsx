import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <>
      <main className="main">
        <div className="container bestsellers">
          <div className="heading">
            <h2 className="title ">Toothbrush Home (5)</h2>
          </div>

          <div className="row">
            <div className="col-md-3">
              <div className="product demo21">
                <figure className="product-media">
                  <span className="product-label label-new">New</span>
                  <Link className="d-flex justify-content-center" to="/sakuraoriginal">
                    <img style={{ width: "500px" }}
                      src="../../../public/assets/images/home/black.png"
                      alt="Product image"
                    />
                  </Link>
                </figure>
                <div className="product-body text-center">
                  <div className="product-cat mt-2">
                    <a href="#">Electric Toothbrush</a>
                  </div>
                  <h3 className="product-title">
                    <Link to="/sakuraoriginal">IONPA Home Black</Link>
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
                      src="../../../public/assets/images/home/gold.png"
                      alt="Product image"
                    />
                  </Link>
                </figure>
                <div className="product-body text-center">
                  <div className="product-cat mt-2">
                    <a href="#">Electric Toothbrush</a>
                  </div>
                  <h3 className="product-title">
                    <Link to="/orangeoriginal">IONPA Home Gold</Link>
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
                      src="../../../public/assets/images/home/white.png"
                      alt="Product image"
                    />
                  </Link>
                </figure>
                <div className="product-body text-center">
                  <div className="product-cat mt-2">
                    <a href="#">Electric Toothbrush</a>
                  </div>
                  <h3 className="product-title">
                    <Link to="/blackoriginal">IONPA Home White</Link>
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
                      src="../../../public/assets/images/home/pink.png"
                      alt="Product image"
                    />
                  </Link>
                </figure>
                <div className="product-body text-center">
                  <div className="product-cat mt-2">
                    <a href="#">Electric Toothbrush</a>
                  </div>
                  <h3 className="product-title">
                    <Link to="/whiteoriginal">Head Refills Pink</Link>
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
                      src="../../../public/assets/images/home/green.png"
                      alt="Product image"
                    />
                  </Link>
                </figure>
                <div className="product-body text-center">
                  <div className="product-cat mt-2">
                    <a href="#">Electric Toothbrush</a>
                  </div>
                  <h3 className="product-title">
                    <Link to="/yuzuoriginal">Head Refills Green</Link>
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

export default Home;

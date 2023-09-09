import React from "react";
import { Link } from "react-router-dom";
import UserLayout from "../../layouts/UserLayout";


const Bundling = () => {
  return (
    <UserLayout>
      <main className="main">
        <div className="container bestsellers">
          <div className="heading">
            <h2 className="title ">Bundling (4)</h2>
          </div>

          <div className="row">
            <div className="col-md-3">
              <div className="product demo21">
                <figure className="product-media">
                  <span className="product-label label-new">New</span>
                  <Link className="d-flex justify-content-center" to="/temenfokus">
                    <img style={{ height: "335px" }}
                      src="../../../public/assets/images/bundling/4.png"
                      alt="Product image"
                    />
                  </Link>
                </figure>
                <div className="product-body text-center">
                  <div className="product-cat mt-2">
                    <a href="#">Bundling</a>
                  </div>
                  <h3 className="product-title">
                    <Link to="/temenfokus">Bundling 4 Package
                      Mouthwash</Link>
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
                      src="../../../public/assets/images/bundling/7.png"
                      alt="Product image"
                    />
                  </Link>
                </figure>
                <div className="product-body text-center">
                  <div className="product-cat mt-2">
                    <a href="#">Bundling</a>
                  </div>
                  <h3 className="product-title">
                    <Link to="/orangeoriginal">Full Series 7 Flavours
                      of Mouthwash</Link>
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
                      src="../../../public/assets/images/bundling/toothbrush.png"
                      alt="Product image"
                    />
                  </Link>
                </figure>
                <div className="product-body text-center">
                  <div className="product-cat mt-2">
                    <a href="#">Bundling</a>
                  </div>
                  <h3 className="product-title">
                    <Link to="/blackoriginal">Mouthwash Set
                      Toothbrush</Link>
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
                      src="../../../public/assets/images/bundling/limited.png"
                      alt="Product image"
                    />
                  </Link>
                </figure>
                <div className="product-body text-center">
                  <div className="product-cat mt-2">
                    <a href="#">Bundling</a>
                  </div>
                  <h3 className="product-title">
                    <Link to="/whiteoriginal">Bundling Hokkaido Limited Edition</Link>
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
    </UserLayout>
  );
};

export default Bundling;

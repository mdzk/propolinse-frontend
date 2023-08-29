import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const Bundling = () => {
  return (
    <>
      <Header />
      <main className="main">
        <div className="container bestsellers">
          <div className="heading">
            <h2 className="title ">Bundling (4)</h2>
          </div>
          <div
            className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow owl-loaded owl-drag"
            data-toggle="owl"
            data-owl-options='{
                  "nav": true, 
                  "dots": false,
                  "margin": 20,
                  "loop": false,
                  "responsive": {
                      "0": {
                          "items":2
                      },
                      "768": {
                          "items":3
                      },
                      "992": {
                          "items":4
                      }
                  }
              }'
          >
            <div className="owl-stage-outer">
              <div
                className="owl-stage"
                style={{
                  transform: "translate3d(0px, 0px, 0px)",
                  transition: "all 0s ease 0s",
                  width: 1853,
                }}
              >
                <div
                  className="owl-item"
                  style={{ width: "350.5px", marginRight: 20 }}
                >
                  <div className="product demo21">
                    <figure className="product-media">
                      <a href="/bundling1">
                        <img
                          src="assets/images/demos/demo-20/bundling(1).jpg"
                          alt="Product image"
                          className="product-image"
                        />
                      </a>
                    </figure>
                    <div className="product-body text-center mt-3">
                      <div className="product-cat">
                        <a href="#">Bundling 4 Package</a>
                      </div>
                      <h3 className="product-title">
                        <a href="/bundling1">Rangkaian Bundling (1)</a>
                      </h3>
                      <div className="product-price">
                        <span className="cur-price">Rp1.490.000</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item"
                  style={{ width: "350.5px", marginRight: 20 }}
                >
                  <div className="product demo21">
                    <figure className="product-media">
                      <span className="product-label label-new">New</span>
                      <a href="/bundling2">
                        <img
                          src="assets/images/demos/demo-20/bundling(2).jpg"
                          alt="Product image"
                          className="product-image"
                        />
                      </a>
                    </figure>
                    <div className="product-body text-center mt-3">
                      <div className="product-cat">
                        <a href="#">Full Series 7 Flavoures</a>
                      </div>
                      <h3 className="product-title">
                        <a href="product.html">Rangkaian Bundling (2)</a>
                      </h3>
                      <div className="product-price">
                        <span className="cur-price">Rp3.475.000</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item"
                  style={{ width: "350.5px", marginRight: 20 }}
                >
                  <div className="product demo21">
                    <figure className="product-media">
                      <a href="/bundling3">
                        <img
                          src="assets/images/demos/demo-20/bundling(3).jpg"
                          alt="Product image"
                          className="product-image"
                        />
                      </a>
                    </figure>
                    <div className="product-body text-center mt-3">
                      <div className="product-cat">
                        <a href="#">Mouthwash Set Toothbrus</a>
                      </div>
                      <h3 className="product-title">
                        <a href="/bundling3">Rangkaian Bundling (3)</a>
                      </h3>
                      <div className="product-price">
                        <span className="cur-price">Rp2.595.000</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item"
                  style={{ width: "350.5px", marginRight: 20 }}
                >
                  <div className="product demo21">
                    <figure className="product-media">
                      <a href="/bundling4">
                        <img
                          src="assets/images/demos/demo-20/bundling(4).jpg"
                          alt="Product image"
                          className="product-image"
                        />
                      </a>
                    </figure>
                    <div className="product-body text-center mt-3">
                      <div className="product-cat">
                        <a href="#">Hokkaido Limited Edition</a>
                      </div>
                      <h3 className="product-title">
                        <a href="/bundling4">Rangkaian Bundling (4)</a>
                      </h3>
                      <div className="product-price">
                        <span className="cur-price">Rp2.685.000</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Bundling;

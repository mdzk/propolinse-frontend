import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const TravelSize = () => {
  return (
    <>
      <Header />
      <main className="main">
        <div className="container bestsellers">
          <div className="heading">
            <h2 className="title ">Mouthwash(4)</h2>
          </div>
          <div
            className="owl-carousel  owl-loaded "
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
                      <a href="/sakuratravel">
                        <img
                          src="assets/images/demos/demo-20/sakura-travel-size.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                      </a>
                    </figure>
                    <div className="product-body text-center">
                      <div className="product-cat mt-2">
                        <a href="#">Pieras Propolinse</a>
                      </div>
                      <h3 className="product-title">
                        <a href="/sakuratravel">Sakura Travel Size 150 mL</a>
                      </h3>
                      <div className="product-price">
                        <span className="cur-price">Rp195.000</span>
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
                      <a href="/yuzutravel">
                        <img
                          src="assets/images/demos/demo-20/yuzu-travel-size.jpg"
                          alt="Product image"
                          className="/yuzutravel"
                        />
                      </a>
                    </figure>
                    <div className="product-body text-center">
                      <div className="product-cat mt-2">
                        <a href="#">Pieras Propolinse</a>
                      </div>
                      <h3 className="product-title">
                        <a href="/yuzutravel">Yuzu Travel Size 150mL</a>
                      </h3>
                      <div className="product-price">
                        <span className="cur-price">Rp195.000</span>
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
                      <a href="/whitetravel">
                        <img
                          src="assets/images/demos/demo-20/white-travel-size.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                      </a>
                    </figure>
                    <div className="product-body text-center">
                      <div className="product-cat mt-2">
                        <a href="#">Pieras Propolinse</a>
                      </div>
                      <h3 className="product-title">
                        <a href="/whitetravel">Yuzu Travel Size 150mL</a>
                      </h3>
                      <div className="product-price">
                        <span className="cur-price">Rp195.000</span>
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
                      <a href="/blacktravel">
                        <img
                          src="assets/images/demos/demo-20/black-travel-size.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                      </a>
                    </figure>
                    <div className="product-body text-center">
                      <div className="product-cat mt-2">
                        <a href="#">Pieras Propolinse</a>
                      </div>
                      <h3 className="product-title">
                        <a href="/blacktravel">Black Travel Size 150mL</a>
                      </h3>
                      <div className="product-price">
                        <span className="cur-price">Rp195.000</span>
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

export default TravelSize;

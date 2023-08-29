import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const TemenFokus = () => {
  return (
    <>
      <Header />
      <main className="main">
        <div className="container bestsellers">
          <div className="heading">
            <h2 className="title ">Temen Fokus (2)</h2>
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
                      <a href="/temenfokus1">
                        <img
                          src="assets/images/demos/demo-20/temenfokus.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                      </a>
                    </figure>
                    <div className="product-body text-center mt-3">
                      <div className="product-cat">
                        <a href="#">Temen Fokus</a>
                      </div>
                      <h3 className="product-title">
                        <a href="/temenfokus1"> 1 BOX </a>
                      </h3>
                      <div className="product-price">
                        <span className="cur-price">Rp199.000</span>
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
                      <a href="/temenfokus2">
                        <img
                          src="assets/images/demos/demo-20/temenfokus.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                      </a>
                    </figure>
                    <div className="product-body text-center mt-3">
                      <div className="product-cat">
                        <a href="#">Temen Fokus</a>
                      </div>
                      <h3 className="product-title">
                        <a href="/temenfokus2">2 BOX</a>
                      </h3>
                      <div className="product-price">
                        <span className="cur-price">Rp375.000</span>
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

export default TemenFokus;

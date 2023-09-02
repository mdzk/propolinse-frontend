import React, { useEffect, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  useLayoutEffect(() => {
    $('.owl-carousel').owlCarousel({
      "nav": false,
      "dots": false,
      "margin": 20,
      "loop": false,
      "responsive": {
        "0": {
          "items": 2
        },
        "768": {
          "items": 3
        },
        "992": {
          "items": 7
        }
      }
    });
    $('.carousel').flickity({ "pauseAutoPlayOnHover": false, "autoPlay": 1500, "setGallerySize": false, "imagesLoaded": true, "prevNextButtons": false, "pageDots": false });
  }, []);
  return (
    <main className="main">
      <h6 className="darkWhite text">
        Cegah penumpukan karang gigi dan bau mulut dari sekarang!
      </h6>

      <div className="container">
        <div className="carousel-container">
          <div className="carousel" >
            <div className="carousel-cell">
              <img src="assets/images/demos/demo-21/slider/slide-1.png" className="carousel-cell-img" alt="orange tree" />
            </div>
            <div className="carousel-cell">
              <img src="assets/images/demos/demo-21/slider/slide-2.png" className="carousel-cell-img" alt="orange tree" />
            </div>
            <div className="carousel-cell">
              <img src="assets/images/demos/demo-21/slider/slide-3.png" className="carousel-cell-img" alt="orange tree" />
            </div>
          </div>
        </div>
      </div>


      <div className="heading">
        <div className="margin-bestsellers">
          <h2 className="title text-center">
            <u>Best Sellers</u>
          </h2>
        </div>
      </div>

      <div className="container">
        <div className="owl-carousel  owl-loaded" data-toggle="owl">
          <div className="owl-stage-outer">
            <div
              className="owl-stage"
              style={{
                transform: "translate3d(0px, 0px, 0px)",
                transition: "all 0s ease 0s",
                width: 800,
              }}
            >

              <div className="owl-item" style={{ width: "200.5px", marginRight: 20 }} >
                <div className="product demo21">
                  <figure className="">
                    <Link to="/blackoriginal">
                      <img className="img-home" src="assets/images/carousel/1.jpeg" alt="Product image" />
                    </Link>
                  </figure>
                  <div className="product-body text-center">
                    <h3 className="product-title">
                      <Link to="/blackoriginal">Refresh Black</Link>
                    </h3>
                    <div className="product-price">
                      <span className="hightlight-home">Rp385.000</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="owl-item active" style={{ width: "200.5px", marginRight: 20 }} >
                <div className="product demo21">
                  <figure className="">
                    <Link to="/sakuraoriginal">
                      <img className="img-home" src="assets/images/carousel/2.jpeg" alt="Product image" />
                    </Link>
                  </figure>
                  <div className="product-body text-center">
                    <h3 className="product-title">
                      <Link to="/sakuraoriginal">Sakura</Link>
                    </h3>
                    <div className="product-price">
                      <span className="hightlight-home">Rp380.000</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="owl-item" style={{ width: "200.5px", marginRight: 20 }} >
                <div className="product demo21">
                  <figure className="">
                    <Link to="/yuzuoriginal">
                      <img className="img-home" src="assets/images/carousel/3.jpeg" alt="Product image" />
                    </Link>
                  </figure>
                  <div className="product-body text-center">
                    <h3 className="product-title">
                      <Link to="/yuzuoriginal">Yuzu</Link>
                    </h3>
                    <div className="product-price">
                      <span className="hightlight-home">Rp380.000</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="owl-item" style={{ width: "200.5px", marginRight: 20 }} >
                <div className="product demo21">
                  <figure className="">
                    <Link to="/purehoneyoriginal">
                      <img className="img-home" src="assets/images/carousel/4.jpeg" alt="Product image" />
                    </Link>
                  </figure>
                  <div className="product-body text-center">
                    <h3 className="product-title">
                      <Link to="/purehoneyoriginal">Pure Honey</Link>
                    </h3>
                    <div className="product-price">
                      <span className="hightlight-home">Rp360.000</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="owl-item" style={{ width: "200.5px", marginRight: 20 }} >
                <div className="product demo21">
                  <figure className="">
                    <Link to="/matchaoriginal">
                      <img className="img-home" src="assets/images/carousel/5.jpeg" alt="Product image" />
                    </Link>
                  </figure>
                  <div className="product-body text-center">
                    <h3 className="product-title">
                      <Link to="/matchaoriginal">Matcha Green Tea</Link>
                    </h3>
                    <div className="product-price">
                      <span className="hightlight-home">Rp380.000</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="owl-item" style={{ width: "200.5px", marginRight: 20 }} >
                <div className="product demo21">
                  <figure className="">
                    <Link to="/whiteoriginal">
                      <img className="img-home" src="assets/images/carousel/6.jpeg" alt="Product image" />
                    </Link>
                  </figure>
                  <div className="product-body text-center">
                    <h3 className="product-title">
                      <Link to="/whiteoriginal">Dental Whitening</Link>
                    </h3>
                    <div className="product-price">
                      <span className="hightlight-home">Rp380.000</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="owl-item" style={{ width: "200.5px", marginRight: 20 }} >
                <div className="product demo21">
                  <figure className="">
                    <Link to="/orangeoriginal">
                      <img className="img-home" src="assets/images/carousel/7.jpeg" alt="Product image" />
                    </Link>
                  </figure>
                  <div className="product-body text-center">
                    <h3 className="product-title">
                      <Link to="/orangeoriginal">Original Orange</Link>
                    </h3>
                    <div className="product-price">
                      <span className="hightlight-home">Rp360.000</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="owl-item" style={{ width: "200.5px", marginRight: 20 }} >
                <div className="product demo21">
                  <figure className="">
                    <Link to="/holiday">
                      <img className="img-home" src="assets/images/carousel/8.jpeg" alt="Product image" />
                    </Link>
                  </figure>
                  <div className="product-body text-center">
                    <h3 className="product-title">
                      <Link to="/holiday">Toothbrush Electric Holiday</Link>
                    </h3>
                    <div className="product-price">
                      <span className="hightlight-home">Rp799.000</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="owl-item" style={{ width: "200.5px", marginRight: 20 }} >
                <div className="product demo21">
                  <figure className="">
                    <Link to="/home">
                      <img className="img-home" src="assets/images/carousel/9.jpeg" alt="Product image" />
                    </Link>
                  </figure>
                  <div className="product-body text-center">
                    <h3 className="product-title">
                      <Link to="/home">Toothbrush Electric Home</Link>
                    </h3>
                    <div className="product-price">
                      <span className="hightlight-home">Rp899.000</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="owl-item" style={{ width: "200.5px", marginRight: 20 }} >
                <div className="product demo21">
                  <figure className="">
                    <Link to="/temenfokus">
                      <img className="img-home" src="assets/images/carousel/10.jpeg" alt="Product image" />
                    </Link>
                  </figure>
                  <div className="product-body text-center">
                    <h3 className="product-title">
                      <Link to="/temenfokus">Temen Fokus</Link>
                    </h3>
                    <div className="product-price">
                      <span className="hightlight-home">Rp199.000</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Homepage;

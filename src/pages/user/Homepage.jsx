import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UserLayout from '../../layouts/UserLayout';
import "../../../public/assets/js/jquery.min.js"
import "../../../public/assets/js/owl.carousel.min.js"
import "../../../public/assets/js/flickity.js"
import ProductCardBestseller from '../../components/ProductCardBestseller';
import axios from 'axios';

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

  const [bestsellers, setBestsellers] = useState([]);

  useEffect(() => {
    axios.get(import.meta.env.VITE_API_URL + 'api/bestseller')
      .then(response => {
        setBestsellers(response.data);
      })
      .catch(error => {
        console.error('Error fetching bestsellers:', error);
      });
  }, []);

  return (
    <UserLayout>
      <main className="main">
        <h6 className="darkWhite text">
          Cegah penumpukan karang gigi dan bau mulut dari sekarang!
        </h6>

        <div className="container">
          <div className="carousel-container">
            <div className="carousel" >
              <div className="carousel-cell">
                <img src="assets/images/slider/slide-1.png" className="carousel-cell-img" alt="orange tree" />
              </div>
              <div className="carousel-cell">
                <img src="assets/images/slider/slide-2.png" className="carousel-cell-img" alt="orange tree" />
              </div>
              <div className="carousel-cell">
                <img src="assets/images/slider/slide-3.png" className="carousel-cell-img" alt="orange tree" />
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
                {/* Mapping data bestsellers ke komponen ProductCardBestseller */}
                {bestsellers.map(bestseller => (
                  <ProductCardBestseller
                    key={bestseller.barang_id}
                    title={bestseller.nm_brg}
                    id={bestseller.barang_id}
                    price={bestseller.hrg_brg}
                    image={bestseller.barang_image}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </UserLayout>
  );
};

export default Homepage;

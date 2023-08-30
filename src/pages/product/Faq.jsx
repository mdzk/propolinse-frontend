import React from "react";

const Faq = () => {
  return (
    <>
      <div class="top-findstore d-flex align-items-center justify-content-center">
        <h6 className="page-title text-black mb-0">
          We are available in more than 100 stores throughout
          Indonesia
        </h6>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center d-flex justify-content-center">
            <img src="../../../public/assets/images/faq/free.png" alt="" />
            <div>
              <b>Free Shipping</b>
              <p>Fee Shipping for orders two botle 600ml</p>
            </div>
          </div>
          <div className="col-md-6">

            <div className="accordion accordion-rounded" id="accordion-1">
              <h2 className="card-title">
                <a className="collapsed" role="button" data-toggle="collapse" href="#collapse-4" aria-expanded="false" aria-controls="collapse-4" >
                  Kapan barang saya dikirim & mendapat resi pengiriman?
                </a>
              </h2>
              <div id="collapse-4" className="collapse" aria-labelledby="heading-4" data-parent="#accordion-1">
                <div className="card-body">
                  Nullam malesuada erat ut turpis. Suspendisse urna
                  nibh, viverra non, semper suscipit, posuere a, pede.
                  Donec nec justo eget felis facilisis fermentum.Lorem
                  ipsum dolor sit amet, consectetuer adipiscing elit.
                  Donec odio. Quisque volutpat mattis eros. Lorem ipsum
                  dolor sit amet, consectetuer adipiscing elit. Donec
                  odio. Quisque volutpat mattis eros.
                </div>
              </div>

              <h2 className="card-title">
                <a className="collapsed" role="button" data-toggle="collapse" href="#collapse-1" aria-expanded="false" aria-controls="collapse-1" >
                  Pengirimannya menggunakan apa? Dan berapa ongkos kirimnya?
                </a>
              </h2>
              <div id="collapse-1" className="collapse" aria-labelledby="heading-4" data-parent="#accordion-1">
                <div className="card-body">
                  Nullam malesuada erat ut turpis. Suspendisse urna
                  nibh, viverra non, semper suscipit, posuere a, pede.
                  Donec nec justo eget felis facilisis fermentum.Lorem
                  ipsum dolor sit amet, consectetuer adipiscing elit.
                  Donec odio. Quisque volutpat mattis eros. Lorem ipsum
                  dolor sit amet, consectetuer adipiscing elit. Donec
                  odio. Quisque volutpat mattis eros.
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </>
  );
};

export default Faq;

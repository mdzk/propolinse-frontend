import React from "react";

const Faq = () => {
  return (
    <>
      <main className="">
        <>
          <>
            <div class="top-findstore d-flex align-items-center justify-content-center">
              <h6 className="page-title text-black mb-0">
                We are available in more than 100 stores throughout
                Indonesia
              </h6>
            </div>

            <div className="container">
              <div className="col">
                <div className="row">
                  <div className="accordion accordion-rounded" id="accordion-1">
                    <div className="card  card-sm ">
                      <img
                        className="icon-faq"
                        src="./public/fee-shipping.png"
                        alt="Product image"
                      />
                      <h7 div className="tittle-icon-faq">
                        Fee Shipping
                      </h7>
                      <h7 div className="tittle-icon-faq">
                        Fee Shipping for Orders two botle 600ml
                      </h7>
                      <h2 className="card-title">
                        <a
                          role="button"
                          data-toggle="collapse"
                          href="#collapse-3"
                          aria-expanded="false"
                        >
                          Kapan barang saya dikirim dan mendapat resi
                          pengiriman?
                        </a>
                      </h2>

                      <div id="collapse-3" data-parent="#accordion-1">
                        <div className="card-body ">
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

                    <div className="card card-box card-sm ">
                      <div className="card-header" id="heading-4">
                        <h2 className="card-title">
                          <a
                            className="collapsed"
                            role="button"
                            data-toggle="collapse"
                            href="#collapse-4"
                            aria-expanded="false"
                            aria-controls="collapse-4"
                          >
                            My item has become faulty
                          </a>
                        </h2>
                      </div>
                      <div
                        id="collapse-4"
                        className="collapse"
                        aria-labelledby="heading-4"
                        data-parent="#accordion-1"
                      >
                        <div className="card-body ">
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

                  <div className="list-findstore">
                    <div className="row">
                      <div className="col-xl-5col">
                        <img src="./public/fee-shipping.png"></img>
                        <ul className="">
                          <li>
                            <a href="#">•Bintang Supermarket Seminyak</a>
                          </li>
                        </ul>
                      </div>
                      <div className=" col-xl-5col "></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        </>

        <></>
      </main>
    </>
  );
};

export default Faq;

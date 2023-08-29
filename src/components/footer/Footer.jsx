import React from "react";
import { Link } from "react-router-dom";

// import '../../../public/assets/css/style.css'
// import '../../../public/assets/css/main.min.css'
// import '../../../public/assets/css/bootstrap.min.css'

const Footer = () => {
  return (
    <>
      <div className="bg-footer">
        <div className="container-footer">
          <div className="container service ">
            <div className="col-lg-4">
              <div className="my-5 d-flex justify-content-center align-items-center">
                <span className="icon-box-icon mr-3 mb-0">
                  <Link to="/findstore">
                    <img src="assets/images/find-store.png" />
                  </Link>
                </span>
                <div className="icon-box-content">
                  <Link to="/findstore">
                    <h3 className="icon-box-title mb-0">Find Store</h3>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="my-5 d-flex justify-content-center align-items-center">
                <span className="icon-box-icon mr-3 mb-0">
                  <Link to="/becomereseller">
                    <img src="assets/images/become-reseller.png" />
                  </Link>
                </span>
                <div className="icon-box-content">
                  <Link to="/becomereseller">
                    <h3 className="icon-box-title mb-0">Become Reseller</h3>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="my-5 d-flex justify-content-center align-items-center">
                <span className="icon-box-icon text-dark mr-3 mb-0">
                  <Link to="/faq">
                    <img src="assets/images/faq.png" />
                  </Link>
                </span>
                <div className="icon-box-content">
                  <Link to="/faq">
                    <h3 className="icon-box-title mb-0">FAQ</h3>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className=" text-center">
            <p>
              "Produk yang asli sudah ber-BPOM dan memiliki kadaluarsa hanya di
              Pieras propolinse indonesia. Jangan sampai salah beli karena
              diluar sana banyak barang palsu yang bisa menyebabkan gigi rusak
              dan kanker mulut " .{" "}
            </p>
          </div>
          <hr className="" />

          <div className="container">

            <div className="row">
              <div className="col-md-4 d-flex align-items-center justify-content-center mt-3">
                <div className="w-100">
                  <h5>
                    <strong>Hey, let's Join!</strong>
                  </h5>
                  <form action="#" className="">
                    <div className="input-group">
                      <input className="bg-email mb-1 mr-3" type="email" placeholder="Email Address" aria-label="Email Adress" required=""/>
                      <div className="col-xl mb-1 p-0">
                        <button className="bg-subcribe" type="submit">
                          <span>Subscribe</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div className="col-md-4 d-flex justify-content-center mt-3">
                <div>
                  <h6>
                    <strong>INFO</strong>
                  </h6>
                  <ul className="widget-list">
                    <li>
                      <Link to="https://wa.me/6289504869238">Contact US</Link>
                    </li>
                    <li>
                      <Link to="/about">About US</Link>
                    </li>
                    <li>
                      <Link to="#">Market Place</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-4 d-flex justify-content-center mt-3">
                <div>
                  <h6>
                    <strong>ACCOUNT</strong>
                  </h6>
                  <ul className="widget-list">
                    <li>
                      <Link to="/privacypolicy">Privacy Policy</Link>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>

          <div className="footer-bottom">
            <div className="container">
              <p className="footer-copyright">© PBP Group 2023 |</p>
              <div className="social-icons social-icons-color">
                <Link
                  to="https://www.facebook.com/pieraspropolinseindonesia?mibextid=ZbWKwL"
                  className="social-icon social-facebook"
                  title="Facebook"
                  target="_blank"
                >
                  <i className="icon-facebook-f"></i>
                </Link>

                <Link
                  to="https://instagram.com/propolinseindonesia?igshid=MzRlODBiNWFlZA=="
                  className="social-icon social-instagram"
                  title="Instagram"
                  target="_blank"
                >
                  <i className="icon-instagram"></i>
                </Link>

                <Link
                  to="https://www.tiktok.com/@pieraspropolinseofficial?_t=8eWb1Q6Otnk&_r=1"
                  className="social-icon social-instagram"
                >
                  <img
                    src="./public/tiktok.png"
                    alt="Logo"
                    width={12}
                    height={12}
                  />
                </Link>

                <Link
                  to="https://wa.me/6289504869238"
                  className="social-icon social-whatsapp"
                  title="whatsapp"
                  target="_blank"
                >
                  <i className="icon-whatsapp"></i>
                </Link>

                <Link
                  to="https://tokopedia.link/iLURJBXoXBb"
                  className="social-icon social-instagram"
                >
                  <img
                    src="./public/tokopedia.png"
                    alt="Logo"
                    width={20}
                    height={20}
                  />
                </Link>

                <Link
                  to="https://shopee.co.id/theababysofficial"
                  className="social-icon social-instagram"
                >
                  <img
                    src="./public/shopee.png"
                    alt="Logo"
                    width={20}
                    height={20}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

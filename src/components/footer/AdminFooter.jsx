import React from "react";
import { Link } from "react-router-dom";

// import '../../../public/assets/css/style.css'
// import '../../../public/assets/css/main.min.css'
// import '../../../public/assets/css/bootstrap.min.css'

const Footer = () => {
    return (
        <>
            <div className="bg-footer">
                <div div className="container-footer">
                    <div className="container service ">
                        <div className="col-lg-4 ">
                            <div className=" icon-box-side">
                                <span className="icon-box-icon">
                                    <a href="/findstore">
                                        <img src="assets/images/find-store.png" />
                                    </a>
                                </span>
                                <div className="icon-box-content">
                                    <a href="/findstore">
                                        <h3 className="icon-box-title">Find Store</h3>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className=" col-lg-4">
                            <div className=" icon-box-side">
                                <span className="icon-box-icon ">
                                    <a href="/becomereseller">
                                        <img src="assets/images/become-reseller.png" />
                                    </a>
                                </span>
                                <div className="icon-box-content">
                                    <a href="/becomereseller">
                                        <h3 className="icon-box-title">Become Reseller</h3>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="icon-box icon-box-side">
                                <span className="icon-box-icon text-dark">
                                    <a href="/faq">
                                        <img src="assets/images/faq.png" />
                                    </a>
                                </span>
                                <div className="icon-box-content">
                                    <a href="/faq">
                                        <h3 className="icon-box-title">FAQ</h3>
                                    </a>
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
                        <h5>
                            <strong>Hey, let's Join!</strong>
                        </h5>
                        <div className="row">
                            <form action="#">
                                <div className="input-group">
                                    <input
                                        className="bg-email"
                                        type="email"
                                        placeholder="Email Address"
                                        aria-label="Email Adress"
                                        required=""
                                    />
                                    <div className="col-xl">
                                        <button className="bg-subcribe" type="submit">
                                            <span>Subscribe</span>
                                        </button>
                                    </div>
                                </div>
                            </form>

                            <div className="col-xl-5col">
                                <h6>
                                    <strong>INFO</strong>
                                </h6>
                                <ul className="widget-list">
                                    <li>
                                        <a href="https://wa.me/6289504869238">Contact US</a>
                                    </li>
                                    <li>
                                        <a href="/about">About US</a>
                                    </li>
                                    <li>
                                        <a href="#">Market Place</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-xl ">
                                <h6>
                                    <strong>ACCOUNT</strong>
                                </h6>
                                <ul className="widget-list">
                                    <li>
                                        <a href="/privacypolicy">Privacy Policy</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <div className="container">
                            <p className="footer-copyright">© PBP Group 2023 |</p>
                            <div class="social-icons social-icons-color">
                                <a
                                    href="https://www.facebook.com/pieraspropolinseindonesia?mibextid=ZbWKwL"
                                    class="social-icon social-facebook"
                                    title="Facebook"
                                    target="_blank"
                                >
                                    <i class="icon-facebook-f"></i>
                                </a>

                                <a
                                    href="https://instagram.com/propolinseindonesia?igshid=MzRlODBiNWFlZA=="
                                    class="social-icon social-instagram"
                                    title="Instagram"
                                    target="_blank"
                                >
                                    <i class="icon-instagram"></i>
                                </a>

                                <a
                                    href="https://www.tiktok.com/@pieraspropolinseofficial?_t=8eWb1Q6Otnk&_r=1"
                                    className="social-icon social-instagram"
                                >
                                    <img
                                        src="./public/tiktok.png"
                                        alt="Logo"
                                        width={12}
                                        height={12}
                                    />
                                </a>

                                <a
                                    href="https://wa.me/6289504869238"
                                    class="social-icon social-whatsapp"
                                    title="whatsapp"
                                    target="_blank"
                                >
                                    <i class="icon-whatsapp"></i>
                                </a>

                                <a
                                    href="https://tokopedia.link/iLURJBXoXBb"
                                    className="social-icon social-instagram"
                                >
                                    <img
                                        src="./public/tokopedia.png"
                                        alt="Logo"
                                        width={20}
                                        height={20}
                                    />
                                </a>

                                <a
                                    href="https://shopee.co.id/theababysofficial"
                                    className="social-icon social-instagram"
                                >
                                    <img
                                        src="./public/shopee.png"
                                        alt="Logo"
                                        width={20}
                                        height={20}
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;

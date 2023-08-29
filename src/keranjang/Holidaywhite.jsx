import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const Holidaywhite = () => {
  return (
    <>
      <Header />
      <main className="main">
        <nav aria-label="breadcrumb" className="breadcrumb-nav border-0 mb-0">
          <div className="container d-flex align-items-center"></div>
        </nav>

        <div className="container">
          <div className="row">
            <div className="product-gallery">
              <img
                src="assets/images/keranjang/holidaywhite.png"
                alt="sakura"
              ></img>
            </div>
            <div className="col-md-6">
              <div className="product-details">
                <h4>Pieras Propolinse Sakura 600mL</h4>
                <p>Get Your "Nafas Segar Sepanjang Hari"</p>
                <div className="product-content">
                  <p>
                    Obat kumur PIERAS PROPOLINSE terbuat dari propolis, ekstrak
                    teh hijau Jepang berkualitas tinggi dan xylitol alami.{" "}
                  </p>
                </div>
                <h4>Rp385.000</h4>
                <div className="row">
                  <div className="details-filter-row details-row-size">
                    <div className="product-details-quantity">
                      <input
                        type="number"
                        id="qty"
                        className="form-control"
                        defaultValue={1}
                        min={1}
                        max={10}
                        step={1}
                        data-decimals={0}
                        required=""
                        style={{ display: "none" }}
                      />
                      <div className="input-group  input-spinner">
                        <div className="input-group-prepend">
                          <button
                            style={{ minWidth: 26 }}
                            className="btn btn-decrement btn-spinner"
                            type="button"
                          >
                            <i className="icon-minus" />
                          </button>
                        </div>
                        <input
                          type="text"
                          style={{ textAlign: "center" }}
                          className="form-control "
                          required=""
                          placeholder=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="product-details-action">
                    <div className="input-group-append">
                      <button
                        style={{ minWidth: 106 }}
                        className="btn btn-increment btn-spinner mt-2"
                        type="button"
                      >
                        <i className="icon-plus" />
                      </button>
                    </div>
                    <a href="#" className="btn-product btn-cart">
                      <span>Add to Bag</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="bg-deskripsi">
                <div className="margin-deskripsi">
                  <div className="row">
                    <div className="col">
                      <div className="product-desc-content">
                        <h2>Product Information</h2>
                        <ul className="widget-list">
                          <p>🟡 Variant : Sakura </p>
                          <p>🟡 Volume : 600mL </p>
                          <p className="jarak-deskripsi">🟡 Berat : 800gr </p>
                        </ul>
                        <ul className="widget-list">
                          <p className="jarak-deskripsi">
                            Obat kumur PIERAS PROPOLINSE terbuat dari propolis
                            extracts, green tea, bunga sakura Jepang dan natural
                            xylitol.
                          </p>
                        </ul>
                        <ul className="widget-list">
                          <p>⚠️ PERHATIAN ⚠️</p>
                          <p className="jarak-deskripsi">
                            Hindari membeli barang di luar Official Store.
                            Barang diluar Official Store tidak memiliki BPOM,
                            expiry date ataupun kode keaslian. Sangat berbahaya
                            untuk kesehatan Anda karena barang tidak ber-BPOM
                            dan dapat mengakibatkan kanker mulut.
                          </p>
                        </ul>
                        <ul className="widget-list">
                          <p>
                            Obat kumur PIERAS PROPOLINSE terbuat dari propolis
                            extracts, green tea, bunga sakura Jepang dan natural
                            xylitol.
                          </p>
                        </ul>
                      </div>
                    </div>

                    <div className="col ">
                      <ul className="widget-list">
                        <p>
                          1. Varian Propolinse Sakura tidak mengandung alkohol
                          dan cocok untuk anak sejak usia 3tahun.
                        </p>
                        <p>
                          2. Propolinse Mouthwash terbuat dari propolis, ekstrak
                          teh hijau Jepang berkualitas tinggi dan xylitol alami.
                        </p>
                        <p>
                          3.Helps maintain oral cleanliness (membantu menjaga
                          keberhisan dan kesehatan mulut dan gigi).
                        </p>
                        <p>
                          4. Membantu menyembuhkan sariawan, gusi berdarah, gusi
                          bengkak dan gusi bernanah.
                        </p>
                        <p>5. Menyembuhkan sakit gigi dengan sangat cepat.</p>
                        <p>
                          6. Prevent tooth decay (mencegah pembusukan gigi
                          karena faktor lidestyle/gaya hidup kurang baik dari
                          faktor makanan, lingkungan dan juga usia yang makin
                          bertambah).
                        </p>
                        <p>
                          7. Prevent tartar buildup (mencegah pertumbuhan karang
                          gigi).
                        </p>
                        <p>
                          8. Fight Cavites (melawan pembusukan gigi yang dapat
                          berkembang menjadi lubang gigi).
                        </p>
                        <p>
                          9. Remove bad breath, plaque and baceria
                          (menghilangkan bau mulut, plak gigi dan bakteri/virus
                          berbahaya).
                        </p>
                        <p>
                          10. Natural and safe (terbuat dari bahan-bahan alami
                          dan sangat aman untuk dipakai setiap hari setelah
                          gosok gigi)
                        </p>
                        <p>
                          11. Mencerahkan gigi jika dipadukan dengan varian
                          Whitening (gigi Anda akan lebih cerah dari hari ke
                          hari).
                        </p>
                      </ul>
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

export default Holidaywhite;

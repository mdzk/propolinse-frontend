import React, { useState } from "react";

const Yuzuoriginal = () => {
  const [counter, setCounter] = useState(0);

  const handleClick1 = () => {
    setCounter(counter + 1);
  };

  const handleClick2 = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <main className="main">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-4 product-gallery">
              <img className="w-100" src="assets/images/original/yuzu.png" alt="sakura"></img>
            </div>
            <div className="col-md-8 p-5">
              <div className="product-details">
                <h4>Pieras Propolinse Yuzu 600ml</h4>
                <p>Get Your "Nafas Segar Sepanjang Hari"</p>
                <div className="product-content">
                  <p>
                    Obat kumur PIERAS PROPOLINSE terbuat dari propolis, ekstrak
                    teh hijau Jepang berkualitas tinggi dan xylitol alami.{" "}
                  </p>
                </div>
                <h4>Rp385.000</h4>
                <div className="row">

                  <div className="w-100 col-lg-3 col-sm-12 col-xs-12 mt-2 mx-3 product-count p-3">
                    <button onClick={handleClick2} className="button-count">-</button>
                    <input type="text" readonly className="number-product" value={counter} />
                    <button onClick={handleClick1} className="button-count">+</button>
                  </div>

                  <div className="col-lg-3 col-sm-12 col-xs-12 mt-2 p-0 mx-3">
                    <a href="#" className="h-100 w-100 btn btn-add p-3">
                      <span>Add to Bag</span>
                    </a>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="bg-deskripsi">
          <div className="container">
            <div className="row">
              <div className="col-md-6 p-5">
                <div className="product-desc-content">
                  <h2>Product Information</h2>
                  <ul className="widget-list p-0">
                    <p>🟡 Variant : Sakura </p>
                    <p>🟡 Volume : 600mL </p>
                    <p className="jarak-deskripsi">🟡 Berat : 800gr </p>
                  </ul>
                  <ul className="widget-list p-0">
                    <p className="jarak-deskripsi">
                      Obat kumur PIERAS PROPOLINSE terbuat dari propolis
                      extracts, green tea, bunga sakura Jepang dan natural
                      xylitol.
                    </p>
                  </ul>
                  <ul className="widget-list p-0">
                    <p>⚠️ PERHATIAN ⚠️</p>
                    <p className="jarak-deskripsi">
                      Hindari membeli barang di luar Official Store.
                      Barang diluar Official Store tidak memiliki BPOM,
                      expiry date ataupun kode keaslian. Sangat berbahaya
                      untuk kesehatan Anda karena barang tidak ber-BPOM
                      dan dapat mengakibatkan kanker mulut.
                    </p>
                  </ul>
                  <ul className="widget-list p-0">
                    <p>
                      Obat kumur PIERAS PROPOLINSE terbuat dari propolis
                      extracts, green tea, bunga sakura Jepang dan natural
                      xylitol.
                    </p>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 p-5">
                <ul className="widget-list p-0">
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
      </main>
    </>
  );
};
export default Yuzuoriginal;

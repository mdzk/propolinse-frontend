import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <main className="main">
      <div className="container mb-4">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-md-3 my-3 d-flex justify-content-center">
            <img src="../../../public/assets/images/about/left.png" alt="" />
          </div>
          <div className="col-md-6 my-3">
            <h5>
              Obat kumur Jepang No. 1 yang sudah terjual 50Jt botol di seluruh dunia.
            </h5>

            <p>obat kumur ini tersebar di Indonesia berkat kerja keras PT Permata Berlian Perkasa yang memiliki Izin Resmi untuk mengedarkan di negara Indonesia. Obat kumur satu satunya yang memiliki rasa seperti jus buah dan tidak pedas sama sekali ketika berkumur</p>
          </div>
          <div className="col-md-3 my-3 d-flex justify-content-center">
            <img src="../../../public/assets/images/about/right.png" alt="" />
          </div>
        </div>
      </div>

      <div className='bg-light p-5'>
        <div className="container">
          <h5 className='text-center'>Keaslian Produk</h5>
          <div className="row">
            <div className="col-md-4 p-5">
              <div className="bg-white h-100 text-center d-flex flex-column justify-content-center align-items-center p-5">
                <img src="../../../public/assets/images/about/bpom.png" alt="" />
                <b>Sertifikat BPOM</b>
                <p>Hanya Official Stores Pieras Propolinse yang miliki izin BPOM</p>
              </div>
            </div>
            <div className="col-md-4 p-5">
              <div className="bg-white h-100 text-center d-flex flex-column justify-content-center align-items-center p-5">
                <img src="../../../public/assets/images/about/date.png" alt="" />
                <b>Memiliki Expiry Date</b>
                <p>Hanya Official Stores Pieras Propolinse yang memiliki tanggal kadaluarsa</p>
              </div>
            </div>
            <div className="col-md-4 p-5">
              <div className="bg-white h-100 text-center d-flex flex-column justify-content-center align-items-center p-5">
                <img src="../../../public/assets/images/about/bpom.png" alt="" />
                <b>Memiliki Kode Keaslian</b>
                <p>Produk yang asli memiliki QR Kode keaslian yang langsung terhubung dengan Instragram resmi Pieras Propolinse Official Stores</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: "#F2F1EE", }} className='p-5'>
        <div className="container">
          <div className="row py-3">
            <div className="col-md-12 text-center py-5">
              <h5>Hati-hati Produk Palsu</h5>
              <p>Jangan tertipu dengan barang tiruan yang terlihat lebih murah. Hati-hati barang palsu / barang sudah kadaluarsa karna bisa menyebabkan <b>KANKER MULUT</b> Pastikan untuk beli dari Official Store kami ya. Karna banyak barang tiruan tanpa BPOM & sudah kadarluarsa beredar. Mohon extra berhati hati.</p>
            </div>
          </div>
        </div>
      </div>

      <div className='p-5 bg-light'>
        <div className="container">
          <div className="row py-3">
            <div className="col-md-12 py-5">
              <h5 className='text-center mb-3' style={{ color:"#ED2A50" }}>Apa sih bedanya Pieras Propolinse <br />
                Mouthwash ✨ dengan obat kumur lain? </h5>

              <ul className='about-list'>
                <li>
                  Mengandung bahan alami dan organik yaitu ekstrak propolis, ekstrak teh hijau Jepang dan ekstrak bunga sakura Jepang yang memberikan sensasi gentle seperti jus apel. Pieras Propolinse mouthwash tidak menimbulkan sensasi pedas dan terbakar pada mulut
                </li>
                <li>
                  Unique user experience: dimana setelah dikumur selama 30 detik sampai 1 menit, anda dapat melihatsisa-sisa plak gigi dan kotoran kotoran yang tidak terjangkau oleh sikat gigi akan berhasil rontok sempurna. Kotoran-kotoran ini jika tidak dihilangkan maka akan menumpuk dan menjadi karang gigi.
                </li>
                <li>
                  Menyembuhkan sariawan secara cepat
                </li>
                <li>
                  Menyembuhkan masalah gusi seperti gusi berdarah, gusi bengkak, radang gusi, gusi bernanah
                </li>
                <li>
                  Menghilangkan bau mulut selama lebih dari 12 jam (jika tidak makan atau minum)
                </li>
                <li>
                  Mengandung xylitol yang dapat melindungi gigi dari kerusakan, menjadikan gigi lebih sehat dan kuat
                </li>
                <li>
                  Mencegah karies gigi
                </li>
                <li>
                  Mempercepat penyembuhan saraf pada gigi berlubang
                </li>
                <li>
                  Melindungi gigi dari pertumbuhan bakteri berbahaya termasuk yang dapat menyebabkan bau mulut tidak sedap
                </li>
                <li>
                  Memelihara kebersihan dan kesehatan gigi, gusi dan mulut secara keseluruhan
                </li>
                <li>
                  Meredakan nyeri dan efek lainnya setelah proses implan gigi
                </li>
                <li>
                  Aman untuk dipakai sehari dua kali atau tanpa batasan jika memang ada keluhan yang mau disembuhkan dengan cepat
                </li>
              </ul>

            </div>
          </div>
        </div>
      </div>

    </main>
  );
};

export default About;

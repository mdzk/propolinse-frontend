import React from "react";
import UserLayout from "../../layouts/UserLayout";

const Becomereseller = () => {
  return (
    <UserLayout>
      <main className="main">
        <div className="container mb-4">
          <div className="row">
            <div className="col-md-12 my-3 text-center">
              <h4 className="text-black">
                Banyak Duit + Mulut Bersih & <br />
                Sehat ✨ Bareng PROPOLINSE?
              </h4>
              <div className="d-flex justify-content-center my-5">
                <img src="./../../public/assets/images/reseller.png" alt="" />
              </div>
              <a href="" className="btn-join">Join Now</a>
              <p className="mt-4">Mumpung slot kuota stockist masih ada kuyy join</p>
            </div>
          </div>
        </div>

        <div className='bg-light p-5'>
          <div className="container">
            <h5 className='text-center'>100% Full Support and Rewards for Every Stockist</h5>
            <div className="row">
              <div className="col-md-3 p-5">
                <div className="bg-white h-100 text-center d-flex flex-column justify-content-center align-items-center p-5">
                  <img src="../../../public/assets/images/gambar-becomereseller-1.png" alt="" />
                  <b>Sertifikat BPOM</b>
                  <p>Hanya Official Stores Pieras Propolinse yang miliki izin BPOM</p>
                </div>
              </div>
              <div className="col-md-3 p-5">
                <div className="bg-white h-100 text-center d-flex flex-column justify-content-center align-items-center p-5">
                  <img src="../../../public/assets/images/gambar-becomereseller-2.png" alt="" />
                  <b>Sertifikat BPOM</b>
                  <p>Hanya Official Stores Pieras Propolinse yang miliki izin BPOM</p>
                </div>
              </div>
              <div className="col-md-3 p-5">
                <div className="bg-white h-100 text-center d-flex flex-column justify-content-center align-items-center p-5">
                  <img src="../../../public/assets/images/gambar-becomereseller-3.png" alt="" />
                  <b>Memiliki Expiry Date</b>
                  <p>Hanya Official Stores Pieras Propolinse yang memiliki tanggal kadaluarsa</p>
                </div>
              </div>
              <div className="col-md-3 p-5">
                <div className="bg-white h-100 text-center d-flex flex-column justify-content-center align-items-center p-5">
                  <img src="../../../public/assets/images/gambar-becomereseller-4.png" alt="" />
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
                <h4 className="text-black">
                  Become Our Stockist
                </h4>
                <div className="row">
                  <div className="col">
                  </div>
                  <div className="col-md-5">
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Email Address" />
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Phone Number" />
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Alamat Store" />
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="City" />
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Zip Code" />
                    </div>
                    <div className="form-group">
                      <textarea name="" id="" cols="30" rows="10" className="form-control" placeholder="Alamat Pengiriman"></textarea>
                    </div>
                  </div>
                  <div className="col">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </UserLayout>
  );
};

export default Becomereseller;

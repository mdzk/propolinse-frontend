import React from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../../layouts/AdminLayout';

const Pesanan = () => {
    return (
        <AdminLayout>
            <div className="page-heading">
                <h3>Pesanan</h3>
            </div>
            <div className="page-content">
                <section className="row">
                    <div className="col-12 col-lg-12">
                        <div className="card">
                            <div className="card-body px-4 py-4-5">
                                <div className="table-responsive">

                                    <table className='table'>
                                        <thead>
                                            <th>Nama Pelanggan</th>
                                            <th>Nama Produk</th>
                                            <th>Kategori Produk</th>
                                            <th>Metode Pembayaran</th>
                                            <th>Tanggal Pembayaran</th>
                                            <th>Jumlah</th>
                                            <th>Total</th>
                                            <th>Bukti Pembayaran</th>
                                            <th>Aksi</th>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Santa</td>
                                                <td>Temen Fokus</td>
                                                <td>Collaboration</td>
                                                <td>BCA</td>
                                                <td>13-03-2023</td>
                                                <td>1</td>
                                                <td>Rp 199.000</td>
                                                <td>
                                                    <img src={`${window.location.origin}/assets/compiled/jpg/banana.jpg`} style={{ width: "100px", height: "100px", objectFit: "cover" }} />
                                                </td>
                                                <td>
                                                    <a href="" className='btn btn-primary'>Konfirmasi</a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </AdminLayout>
    );
};

export default Pesanan;
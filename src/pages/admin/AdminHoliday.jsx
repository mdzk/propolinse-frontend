import React from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../../layouts/AdminLayout';

const AdminHoliday = () => {
    return (
        <AdminLayout>
            <div className="page-heading d-flex justify-content-between">
                <h3>Tootbrush Holiday</h3>
                <Link to={"/admin/add"} className='btn btn-primary'>Tambah</Link>
            </div>
            <div className="page-content">
                <section className="row">
                    <div className="col-12 col-lg-12">
                        <div className="card">
                            <div className="card-body px-4 py-4-5">
                                <div className="table-responsive">
                                    <table className='table'>
                                        <thead>
                                            <tr>
                                                <th>No</th>
                                                <th>Judul Produk</th>
                                                <th>Deskripsi</th>
                                                <th>Harga</th>
                                                <th className='text-center'>Aksi</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Temen Fokus</td>
                                                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
                                                <td>Rp 199.000</td>
                                                <td className='d-flex justify-content-evenly'>
                                                    <Link to="/admin/edit" className='btn btn-primary'>Ubah</Link>

                                                    <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                        Hapus
                                                    </button>

                                                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                        <div className="modal-dialog">
                                                            <div className="modal-content">
                                                                <div className="modal-header">
                                                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Peringatan</h1>
                                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                </div>
                                                                <div className="modal-body">
                                                                    Data akan dihapus secara permanen, Apakah anda yakin ingin menghapus?
                                                                </div>
                                                                <div className="modal-footer">
                                                                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Batal</button>
                                                                    <button type="button" className="btn btn-success">Iya</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
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

export default AdminHoliday;
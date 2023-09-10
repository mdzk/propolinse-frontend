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
                                <table className='table'>
                                    <thead>
                                        <th>No</th>
                                        <th>Judul Produk</th>
                                        <th>Deskripsi</th>
                                        <th>Harga</th>
                                        <th className='text-center'>Aksi</th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Temen Fokus</td>
                                            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
                                            <td>Rp 199.000</td>
                                            <td className='d-flex justify-content-evenly'>
                                                <Link to="/admin/edit" className='btn btn-primary'>Ubah</Link>

                                                <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    Hapus
                                                </button>

                                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                    <div class="modal-dialog">
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <h1 class="modal-title fs-5" id="exampleModalLabel">Peringatan</h1>
                                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div class="modal-body">
                                                                Data akan dihapus secara permanen, Apakah anda yakin ingin menghapus?
                                                            </div>
                                                            <div class="modal-footer">
                                                                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Batal</button>
                                                                <button type="button" class="btn btn-success">Iya</button>
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
                </section>
            </div>
        </AdminLayout>
    );
};

export default AdminHoliday;
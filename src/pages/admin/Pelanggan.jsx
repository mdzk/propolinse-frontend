import React from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../../layouts/AdminLayout';

const Pelanggan = () => {
    return (
        <AdminLayout>
            <div className="page-heading">
                <h3>Daftar Pelanggan</h3>
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
                                                <th>Email</th>
                                                <th>Nama Pelanggan</th>
                                                <th>Tanggal Buat</th>
                                                <th>Aksi</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>santa@mail.com</td>
                                                <td>Santa</td>
                                                <td>15 Mei 2023</td>
                                                <td>
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

export default Pelanggan;
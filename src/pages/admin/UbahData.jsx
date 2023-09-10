import React from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../../layouts/AdminLayout';

const UbahData = () => {
    return (
        <AdminLayout>
            <div className="page-heading">
                <h3>Ubah Data</h3>
            </div>
            <div className="page-content">
                <section className="row">
                    <div className="col-12 col-lg-12">
                        <div className="card">
                            <div className="card-content">
                                <div className="card-body">
                                    <form className="form form-vertical">
                                        <div className="form-body">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <label for="first-name-vertical"
                                                        >Judul Produk</label
                                                        >
                                                        <input
                                                            type="text"
                                                            id="first-name-vertical"
                                                            className="form-control"
                                                            name="fname"
                                                            placeholder="Teman Fokus"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <label for="email-id-vertical">Deskripsi</label>
                                                        <textarea
                                                            className="form-control"
                                                            placeholder='Berguna untuk ...'
                                                        >
                                                        </textarea>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label for="first-name-vertical"
                                                                >Harga</label
                                                                >
                                                                <input
                                                                    type="text"
                                                                    id="first-name-vertical"
                                                                    className="form-control"
                                                                    name="fname"
                                                                    placeholder="120.000"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label for="contact-info-vertical"
                                                                >Gambar</label
                                                                >
                                                                <input className="form-control" type="file" id="formFile" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 d-flex justify-content-end">
                                                    <Link to={"/admin/collaboration"}
                                                        type="reset"
                                                        className="btn btn-primary me-1 mb-1"
                                                    >
                                                        Batal
                                                    </Link>
                                                    <button
                                                        type="submit"
                                                        className="btn btn-success me-1 mb-1"
                                                    >
                                                        Simpan
                                                    </button>

                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </AdminLayout>
    );
};

export default UbahData;
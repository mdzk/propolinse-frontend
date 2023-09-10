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
                        <div class="card">
                            <div class="card-content">
                                <div class="card-body">
                                    <form class="form form-vertical">
                                        <div class="form-body">
                                            <div class="row">
                                                <div class="col-12">
                                                    <div class="form-group">
                                                        <label for="first-name-vertical"
                                                        >Judul Produk</label
                                                        >
                                                        <input
                                                            type="text"
                                                            id="first-name-vertical"
                                                            class="form-control"
                                                            name="fname"
                                                            placeholder="Teman Fokus"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <div class="form-group">
                                                        <label for="email-id-vertical">Deskripsi</label>
                                                        <textarea
                                                            class="form-control"
                                                            placeholder='Berguna untuk ...'
                                                        >
                                                        </textarea>
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label for="first-name-vertical"
                                                                >Harga</label
                                                                >
                                                                <input
                                                                    type="text"
                                                                    id="first-name-vertical"
                                                                    class="form-control"
                                                                    name="fname"
                                                                    placeholder="120.000"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div class="form-group">
                                                                <label for="contact-info-vertical"
                                                                >Gambar</label
                                                                >
                                                                <input class="form-control" type="file" id="formFile" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-12 d-flex justify-content-end">
                                                    <Link to={"/admin/collaboration"}
                                                        type="reset"
                                                        class="btn btn-primary me-1 mb-1"
                                                    >
                                                        Batal
                                                    </Link>
                                                    <button
                                                        type="submit"
                                                        class="btn btn-success me-1 mb-1"
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
import React from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../../layouts/AdminLayout';

const KategoriProduk = () => {
    return (
        <AdminLayout>
            <div className="page-heading">
                <h3>Kelola Kategori Produk</h3>
            </div>
            <div className="page-content">
                <section className="row">
                    <div className="col-6 col-lg-6">
                        <div className="card">
                            <div className="card-body px-4 py-4-5">
                                <table className='table'>
                                    <thead>
                                        <th>No</th>
                                        <th>Nama</th>
                                        <th>Action</th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Mouthwash</td>
                                            <td>
                                                <div class="dropdown">
                                                    <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        Size
                                                    </button>
                                                    <ul class="dropdown-menu">
                                                        <li><Link class="dropdown-item" to={"/admin/bigsize"}>600ml</Link></li>
                                                        <li><Link class="dropdown-item" to={"/admin/travelsize"}>150ml</Link></li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Toothbrush</td>
                                            <td>
                                                <div class="dropdown">
                                                    <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        Type
                                                    </button>
                                                    <ul class="dropdown-menu">
                                                        <li><Link class="dropdown-item" to={"/admin/home"}>Home</Link></li>
                                                        <li><Link class="dropdown-item" to={"/admin/holiday"}>Holiday</Link></li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Collaboration</td>
                                            <td>
                                                <Link to="/admin/collaboration" className='btn btn-primary'>Detail</Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>Bundling</td>
                                            <td>
                                                <Link to={"/admin/bundling"} className='btn btn-primary'>Detail</Link>
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

export default KategoriProduk;
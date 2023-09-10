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
                    <div className="col-lg-6 col-md-12">
                        <div className="card">
                            <div className="card-body px-4 py-4-5">
                                <div className="table-responsive">
                                    <table className='table'>
                                        <thead>
                                            <tr>
                                                <th>No</th>
                                                <th>Nama</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Mouthwash</td>
                                                <td>
                                                    <div className="dropdown">
                                                        <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                            Size
                                                        </button>
                                                        <ul className="dropdown-menu">
                                                            <li><Link className="dropdown-item" to={"/admin/bigsize"}>600ml</Link></li>
                                                            <li><Link className="dropdown-item" to={"/admin/travelsize"}>150ml</Link></li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Toothbrush</td>
                                                <td>
                                                    <div className="dropdown">
                                                        <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                            Type
                                                        </button>
                                                        <ul className="dropdown-menu">
                                                            <li><Link className="dropdown-item" to={"/admin/home"}>Home</Link></li>
                                                            <li><Link className="dropdown-item" to={"/admin/holiday"}>Holiday</Link></li>
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
                    </div>
                </section>
            </div>
        </AdminLayout>
    );
};

export default KategoriProduk;
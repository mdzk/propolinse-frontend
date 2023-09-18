import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../../layouts/AdminLayout';
import ProductRow from '../../components/ProductRow';
import axios from 'axios';

const AdminBigSize = () => {
    const apiUrl = import.meta.env.VITE_API_URL + "api/";
    const [data, setdata] = useState({
        barang: [],
    });
    const [isLoading, setisLoading] = useState(false);
    const [isError, setisError] = useState(false);

    useEffect(() => {
        setisLoading(true);
        axios
            .get(apiUrl + "kategori?category_name=home")
            .then((response) => {
                setdata(response.data);
                setisLoading(false);
            })
            .catch((err) => {
                setisError(true);
                setisLoading(false);
            });
    }, []);
    return (
        <AdminLayout>
            <div className="page-heading d-flex justify-content-between">
                <h3>Big Size 600ml</h3>
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
                                                <th>Hastag</th>
                                                <th>Deskripsi</th>
                                                <th>Harga</th>
                                                <th>Deskripsi Lengkap</th>
                                                <th>Gambar</th>
                                                <th className='text-center'>Aksi</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {isLoading ? (
                                                <p>Loading data ...</p>
                                            ) : (
                                                data.barang.map((product, index) => (
                                                    <ProductRow
                                                        index={index + 1}
                                                        key={product.id}
                                                        id={product.id}
                                                        title={product.nm_brg}
                                                        tag={product.tag}
                                                        description={product.ket_brg}
                                                        category={product.jenis_brg}
                                                        price={product.hrg_brg}
                                                        image={product.image}
                                                    />
                                                ))
                                            )}
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

export default AdminBigSize;
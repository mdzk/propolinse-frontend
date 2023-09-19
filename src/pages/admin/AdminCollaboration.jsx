import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../../layouts/AdminLayout';
import ProductRow from '../../components/ProductRow';
import axios from 'axios';

const AdminCollaboration = () => {
    const apiUrl = import.meta.env.VITE_API_URL + "api/";
    const [data, setData] = useState({
        barang: [],
    });
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios
            .get(apiUrl + "kategori?category_name=collaboration")
            .then((response) => {
                setData(response.data);
                setIsLoading(false);
            })
            .catch((err) => {
                setIsError(true);
                setIsLoading(false);
            });
    }, []);

    // Fungsi untuk menghapus item dari state data.barang
    const handleDeleteItem = (itemId) => {
        // Membuat salinan array barang yang tidak mencakup item yang dihapus
        const updatedBarang = data.barang.filter((barang) => barang.id !== itemId);
        setData({ ...data, barang: updatedBarang });
    };

    return (
        <AdminLayout>
            <div className="page-heading d-flex justify-content-between">
                <h3>Collaboration</h3>
                <Link to={"/admin/add/collaboration"} className='btn btn-primary'>Tambah</Link>
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
                                                <tr>
                                                    <td><p>Loading data ...</p></td>
                                                </tr>
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
                                                        onDelete={() => handleDeleteItem(product.id)} // Fungsi onDelete untuk menghapus item
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

export default AdminCollaboration;

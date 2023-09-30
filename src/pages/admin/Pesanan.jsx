import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../../layouts/AdminLayout';
import OrderRow from '../../components/OrderRow';
import axios from 'axios';

const Pesanan = () => {
    const apiUrl = import.meta.env.VITE_API_URL + "api/";
    const authToken = localStorage.getItem('auth_token');

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios
            .get(apiUrl + "admin/pesanan", {
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                    'Content-Type': 'application/json',
                },
            })
            .then((response) => {
                setData(response.data);
                console.log(response.data);
                setIsLoading(false);
            })
            .catch((err) => {
                setIsError(true);
                setIsLoading(false);
            });
    }, []);

    const handleConfirmItem = (checkoutId) => {
        const updatedData = data.filter((item) => item.checkout_id !== checkoutId);
        setData(updatedData);
    };
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
                                            <tr>
                                                <th>Nama Pelanggan</th>
                                                <th>Alamat</th>
                                                <th>Kode Pos</th>
                                                <th>Nama Produk</th>
                                                <th>Jumlah Produk</th>
                                                <th>Sub Total</th>
                                                <th>Pengiriman</th>
                                                <th>Total Pembayaran</th>
                                                <th>Transfer Bank</th>
                                                <th>Tanggal Pembayaran</th>
                                                <th>Bukti Pembayaran</th>
                                                <th>Aksi</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {isLoading ? (
                                                <tr>
                                                    <td><p>Loading data ...</p></td>
                                                </tr>
                                            ) : (
                                                data.map((product) => (
                                                    <OrderRow
                                                        key={product.checkout_id}
                                                        id={product.checkout_id}
                                                        name={product.nama}
                                                        address={product.alamat}
                                                        product={product.nm_brg}
                                                        quantity={product.quantity}
                                                        sub_total={product.sub_total}
                                                        courier={product.pengiriman}
                                                        total={product.total_bayar}
                                                        bank={product.bank}
                                                        date={product.created_at}
                                                        image={product.image}
                                                        onDelete={() => handleConfirmItem(product.checkout_id)} // Fungsi onDelete untuk menghapus item
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

export default Pesanan;
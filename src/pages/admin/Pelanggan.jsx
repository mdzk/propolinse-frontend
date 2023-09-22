import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../../layouts/AdminLayout';
import axios from 'axios';
import PelangganRow from '../../components/PelangganRow';

const Pelanggan = () => {
    const apiUrl = import.meta.env.VITE_API_URL + "api/";
    const [data, setData] = useState({
        data: [],
    });
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios
            .get(apiUrl + "user/all")
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

    const handleDeleteItem = (itemId) => {
        const updatedData = data.data.filter((data) => data.id !== itemId);
        setData({ ...data, data: updatedData });
    };

    return (
        <AdminLayout>
            <div className="page-heading d-flex justify-content-between">
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
                                                <th>Tgl Buat</th>
                                                <th className='text-center'>Aksi</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {isLoading ? (
                                                <tr>
                                                    <td><p>Loading data ...</p></td>
                                                </tr>
                                            ) : (
                                                data.data.map((product, index) => (
                                                    <PelangganRow
                                                        index={index + 1}
                                                        key={product.id}
                                                        id={product.id}
                                                        email={product.email}
                                                        name={product.name}
                                                        date={product.tgl_lhr}
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

export default Pelanggan;

import React, { useState } from 'react';
import { Link, redirect, useParams } from 'react-router-dom';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';

const TambahData = () => {
    const { tipe } = useParams();
    const [formData, setFormData] = useState({
        harga: '',
        stok: '',
        judulProduk: '',
        hastag: '',
        deskripsi: '',
        deskripsiUmum: '',
        kodeBarang: '',
        gambar: null, // Ini akan berisi file gambar yang diunggah
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        if (name === 'gambar') {
            setFormData({
                ...formData,
                [name]: files[0], // Mengambil file pertama dari input gambar
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const authToken = localStorage.getItem('auth_token');
            const headers = {
                'Authorization': `Bearer ${authToken}`,
                'Content-Type': 'multipart/form-data', // Set tipe konten sebagai multipart/form-data
            };

            const data = new FormData();
            data.append('kd_brg', formData.kodeBarang);
            data.append('hrg_brg', formData.harga);
            data.append('stok', formData.stok);
            data.append('nm_brg', formData.judulProduk);
            data.append('tag', formData.hastag);
            data.append('type_size', tipe);
            data.append('ket_brg', formData.deskripsi);
            data.append('desk_umum', formData.deskripsiUmum);
            data.append('berat_brg', 600);
            data.append('jenis_brg', "Mouthwash");
            data.append('image', formData.gambar); // Mengirim file gambar

            const response = await axios.post(import.meta.env.VITE_API_URL + 'api/barang', data, { headers });
            console.log('success');
            window.location.href = '/admin/' + tipe;
        } catch (error) {
            if (error.response) {
                console.error('Error:', error.response.data);
            } else if (error.request) {
                console.error('Network Error:', error.request);
            } else {
                console.error('Error:', error.message);
            }
        }
    };

    return (
        <AdminLayout>
            <form onSubmit={handleSubmit} className="form form-vertical" encType="multipart/form-data">
                <div className="form-body">
                    <div className="row">
                        <div className="col-12">
                            <div className="form-group">
                                <label htmlFor="first-name-vertical"
                                >Kode Barang</label
                                >

                                <input
                                    type="text"
                                    name="kodeBarang"
                                    className="form-control"
                                    placeholder="Teman Fokus"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-group">
                                <label htmlFor="first-name-vertical"
                                >Judul Produk</label
                                >

                                <input
                                    type="text"
                                    name="judulProduk"
                                    className="form-control"
                                    placeholder="Teman Fokus"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-group">
                                <label htmlFor="first-name-vertical"
                                >Stok Produk</label
                                >

                                <input
                                    type="text"
                                    name="stok"
                                    className="form-control"
                                    placeholder="10"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-group">
                                <label htmlFor="first-name-vertical">
                                    Hastag
                                </label>

                                <input
                                    type="text"
                                    name="hastag"
                                    className="form-control"
                                    placeholder="#mantap"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-group">
                                <label htmlFor="email-id-vertical">Deskripsi</label>
                                <textarea
                                    className="form-control"
                                    placeholder='Berguna untuk ...'
                                    onChange={handleChange}
                                    name="deskripsi"
                                >
                                </textarea>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="first-name-vertical"
                                        >Harga</label
                                        >
                                        <input
                                            type="text"
                                            name="harga"
                                            className="form-control"
                                            placeholder="120.000"
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="contact-info-vertical"
                                        >Gambar</label
                                        >
                                        <input
                                            type="file"
                                            name="gambar"
                                            className="form-control"
                                            accept="image/*"
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-group">
                                <label htmlFor="email-id-vertical">Deskripsi Umum</label>
                                <textarea
                                    rows={5}
                                    className="form-control"
                                    name='deskripsiUmum'
                                    placeholder='Berguna untuk ...'
                                    onChange={handleChange}
                                >
                                </textarea>
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
        </AdminLayout>
    );
};

export default TambahData;
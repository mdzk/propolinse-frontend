import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';

const TambahDataBak = () => {
    const { tipe } = useParams();

    const [formData, setFormData] = useState({
        judulProduk: '',
        hastag: '',
        deskripsi: '',
        harga: '',
        gambar: null, // Ini akan berisi file gambar yang diunggah
        deskripsiUmum: '',
    });

    const handleInputChange = (e) => {
        const { name, value, files } = e.target;

        // Jika input adalah file gambar, simpan file ke dalam formData
        if (name === 'gambar') {
            setFormData({
                ...formData,
                [name]: files[0],
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Buat objek FormData dan tambahkan nilai-nilai form
        const data = new FormData();
        data.append('kd_brg', 90);
        data.append('hrg_brg', formData.harga);
        data.append('stok', formData.stok);
        data.append('nm_brg', formData.judulProduk);
        data.append('tag', formData.hastag);
        data.append('type_size', tipe);
        data.append('ket_brg', formData.deskripsi);
        data.append('desk_umum', formData.deskripsiUmum);
        data.append('berat_brg', 600);
        data.append('image', formData.gambar);
        data.append('jenis_brg', 'Mouthwash');

        // Kirim permintaan POST menggunakan Axios
        axios
            .post('https://contoh.com/api/barang', data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${authToken}`, // Ganti dengan token yang sesuai
                },
            })
            .then((response) => {
                console.log('Data berhasil ditambahkan:', response.data);
            })
            .catch((error) => {
                console.error('Gagal menambahkan data:', error);
            });
    };

    return (
        <AdminLayout>
            <div className="page-heading">
                <h3>Tambah Data Produk</h3>
            </div>
            <div className="page-content">
                <section className="row">
                    <div className="col-12 col-lg-12">
                        <div className="card">
                            <div className="card-content">
                                <div className="card-body">
                                    <form className="form form-vertical">
                                        <div className="form-body">
                                            <form onSubmit={handleSubmit}>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="form-group">
                                                            <label for="first-name-vertical"
                                                            >Judul Produk</label
                                                            >

                                                            <input
                                                                type="text"
                                                                name="judulProduk"
                                                                value={formData.judulProduk}
                                                                className="form-control"
                                                                placeholder="Teman Fokus"
                                                                onChange={handleInputChange}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="form-group">
                                                            <label for="first-name-vertical"
                                                            >Stok Produk</label
                                                            >

                                                            <input
                                                                type="text"
                                                                name="stok"
                                                                value={formData.stok}
                                                                className="form-control"
                                                                placeholder="10"
                                                                onChange={handleInputChange}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="form-group">
                                                            <label for="first-name-vertical">
                                                                Hastag
                                                            </label>

                                                            <input
                                                                type="text"
                                                                name="hastag"
                                                                alue={formData.hastag}
                                                                className="form-control"
                                                                placeholder="#mantap"
                                                                onChange={handleInputChange}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="form-group">
                                                            <label for="email-id-vertical">Deskripsi</label>
                                                            <textarea
                                                                className="form-control"
                                                                placeholder='Berguna untuk ...'
                                                                onChange={handleInputChange}
                                                                name="deskripsi"
                                                                value={formData.deskripsi}
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
                                                                        name="harga"
                                                                        value={formData.harga}
                                                                        className="form-control"
                                                                        placeholder="120.000"
                                                                        onChange={handleInputChange}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="form-group">
                                                                    <label for="contact-info-vertical"
                                                                    >Gambar</label
                                                                    >
                                                                    <input
                                                                        type="file"
                                                                        name="gambar"
                                                                        className="form-control"
                                                                        accept='image/*'
                                                                        onChange={handleInputChange} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="form-group">
                                                            <label for="email-id-vertical">Deskripsi Umum</label>
                                                            <textarea
                                                                rows={5}
                                                                className="form-control"
                                                                name='deskripsiUmum'
                                                                value={formData.deskripsiUmum}
                                                                placeholder='Berguna untuk ...'
                                                                onChange={handleInputChange}
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
                                            </form>
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

export default TambahDataBak;
import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';

const TambahData = () => {
    const { tipe } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        kodeBarang: '',
        judulProduk: '',
        stok: '',
        hastag: '',
        deskripsi: '',
        harga: '',
        gambar: null,
        deskripsiUmum: '',
    });

    const [apiErrors, setApiErrors] = useState({});
    const handleChange = (e) => {
        const { name, value, files } = e.target;

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
        setApiErrors({ ...apiErrors, [name]: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const authToken = localStorage.getItem('auth_token');
            const headers = {
                'Authorization': `Bearer ${authToken}`,
                'Content-Type': 'multipart/form-data',
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
            data.append('image', formData.gambar);

            const response = await axios.post(import.meta.env.VITE_API_URL + 'api/barang', data, { headers });
            console.log('success');
            navigate('/admin/' + tipe);
        } catch (error) {
            if (error.response) {
                console.error('Error:', error.response.data);
                setApiErrors(error.response.data.errors);
                console.error(error.response.data.errors);
            } else if (error.request) {
                console.error('Network Error:', error.request);
            } else {
                console.error('Error:', error.message);
            }
        }
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
                                                            className={`form-control ${apiErrors.kd_brg && 'is-invalid'}`}
                                                            placeholder="001"
                                                            onChange={handleChange}
                                                        />
                                                        {apiErrors.kd_brg && (
                                                            <div className="invalid-feedback">{apiErrors.kd_brg[0]}</div>
                                                        )}
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
                                                            className={`form-control ${apiErrors.nm_brg && 'is-invalid'}`}
                                                            placeholder="Teman Fokus"
                                                            onChange={handleChange}
                                                        />
                                                        {apiErrors.nm_brg && (
                                                            <div className="invalid-feedback">{apiErrors.nm_brg[0]}</div>
                                                        )}
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
                                                            className={`form-control ${apiErrors.stok && 'is-invalid'}`}
                                                            placeholder="10"
                                                            onChange={handleChange}
                                                        />
                                                        {apiErrors.stok && (
                                                            <div className="invalid-feedback">{apiErrors.stok[0]}</div>
                                                        )}
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
                                                            className={`form-control ${apiErrors.tag && 'is-invalid'}`}
                                                            placeholder="#mantap"
                                                            onChange={handleChange}
                                                        />
                                                        {apiErrors.tag && (
                                                            <div className="invalid-feedback">{apiErrors.tag[0]}</div>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <label htmlFor="email-id-vertical">Deskripsi</label>
                                                        <textarea
                                                            className={`form-control ${apiErrors.ket_brg && 'is-invalid'}`}
                                                            placeholder='Berguna untuk ...'
                                                            onChange={handleChange}
                                                            name="deskripsi"
                                                        >
                                                        </textarea>
                                                        {apiErrors.ket_brg && (
                                                            <div className="invalid-feedback">{apiErrors.ket_brg[0]}</div>
                                                        )}
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
                                                                    className={`form-control ${apiErrors.hrg_brg && 'is-invalid'}`}
                                                                    placeholder="120.000"
                                                                    onChange={handleChange}
                                                                />
                                                                {apiErrors.hrg_brg && (
                                                                    <div className="invalid-feedback">{apiErrors.hrg_brg[0]}</div>
                                                                )}
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
                                                                    className={`form-control ${apiErrors.image && 'is-invalid'}`}
                                                                    accept="image/*"
                                                                    onChange={handleChange}
                                                                />
                                                                {apiErrors.image && (
                                                                    <div className="invalid-feedback">{apiErrors.image[0]}</div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <label htmlFor="email-id-vertical">Deskripsi Umum</label>
                                                        <textarea
                                                            rows={5}
                                                            className={`form-control ${apiErrors.desk_umum && 'is-invalid'}`}
                                                            name='deskripsiUmum'
                                                            placeholder='Berguna untuk ...'
                                                            onChange={handleChange}
                                                        >
                                                        </textarea>
                                                        {apiErrors.desk_umum && (
                                                            <div className="invalid-feedback">{apiErrors.desk_umum[0]}</div>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="col-12 d-flex justify-content-end">
                                                    <Link to={"/admin/" + tipe}
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
        </AdminLayout >
    );
};

export default TambahData;
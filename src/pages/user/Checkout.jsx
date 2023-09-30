import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import UserLayout from "../../layouts/UserLayout";
import axios from "axios";
import CurrencyFormat from 'react-currency-format';

const Checkout = () => {
    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate();
    const [totalPayment, setTotalPayment] = useState(0);
    const [formData, setFormData] = useState({
        nama: "",
        alamat: "",
        kode_pos: "",
        bank: "",
        gambar: null
    });

    const authToken = localStorage.getItem('auth_token');
    const { userId } = useParams();

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}api/carts/user`, {
            headers: {
                'Authorization': `Bearer ${authToken}`,
            },
        })
            .then(response => {
                setCartItems(response.data);

                // Hitung total pembayaran
                const subTotal = response.data.reduce((total, item) => total + item.sub_total, 0);
                const totalPayment = subTotal + 42000;
                setTotalPayment(totalPayment);
            })
            .catch(error => {
                console.error('Error fetching cart data:', error);
            });
    }, [authToken]);

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

    const handleSubmit = (e) => {
        e.preventDefault();
        const productIds = cartItems.map(item => item.id);

        const payload = new FormData(); // Gunakan FormData untuk mengirim gambar
        payload.append('productIds', JSON.stringify(productIds));
        payload.append('nama', formData.nama);
        payload.append('alamat', formData.alamat);
        payload.append('kode_pos', formData.kode_pos);
        payload.append('pengiriman', 'jne');
        payload.append('ongkir', 42000);
        payload.append('bank', formData.bank);
        payload.append('image', formData.gambar);

        const headers = {
            Authorization: `Bearer ${authToken}`,
            'Content-Type': 'multipart/form-data',
        };

        axios.post(`${import.meta.env.VITE_API_URL}api/checkout/input`, payload, { headers })
            .then(response => {
                console.log('Checkout berhasil:', response.data);
                navigate('/checkout/success');
            })
            .catch(error => {
                console.error('Error saat checkout:', error.response.data);
                setApiErrors(error.response.data.errors);
            });
    };

    return (
        <UserLayout>
            <main className="main">
                <div className="container">
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <div className="row">
                            <div className="col-md-8 p-5">
                                <h5>Detail Pesanan</h5>
                                <div className="bg-light border p-4">
                                    <table className="w-100">
                                        <thead>
                                            <tr>
                                                <th>Produk</th>
                                                <th>Jumlah</th>
                                                <th>Subtotal</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cartItems.map(item => (
                                                <tr key={item.id}>
                                                    <td>{item.barang.nm_brg}</td>
                                                    <td>{item.quantity}</td>
                                                    <td>
                                                        <CurrencyFormat
                                                            value={item.sub_total}
                                                            displayType={'text'}
                                                            thousandSeparator={true}
                                                            prefix={'Rp'}
                                                        />
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="form-group mt-2">
                                    <h5>Nama</h5>
                                    <input
                                        type="text"
                                        className={`form-control ${apiErrors.nama && 'is-invalid'}`}
                                        placeholder="Budi"
                                        name="nama"
                                        value={formData.nama}
                                        onChange={handleChange}
                                    />
                                    {apiErrors.nama && (
                                        <div className="invalid-feedback">{apiErrors.nama[0]}</div>
                                    )}
                                </div>
                                <div className="form-group mt-2">
                                    <h5>Alamat</h5>
                                    <input
                                        type="text"
                                        className={`form-control ${apiErrors.alamat && 'is-invalid'}`}
                                        placeholder="Lampung, Indonesia"
                                        name="alamat"
                                        value={formData.alamat}
                                        onChange={handleChange}
                                    />
                                    {apiErrors.alamat && (
                                        <div className="invalid-feedback">{apiErrors.alamat[0]}</div>
                                    )}
                                </div>
                                <div className="form-group mt-2">
                                    <h5>Kode Pos</h5>
                                    <input
                                        type="number"
                                        className={`form-control ${apiErrors.kode_pos && 'is-invalid'}`}
                                        placeholder="34991"
                                        name="kode_pos"
                                        value={formData.kode_pos}
                                        onChange={handleChange}
                                    />
                                    {apiErrors.kode_pos && (
                                        <div className="invalid-feedback">{apiErrors.kode_pos[0]}</div>
                                    )}
                                </div>
                                <div className="form-group mt-2">
                                    <h5>Pengiriman</h5>
                                    <div className="w-100 border p-4 d-flex justify-content-between">
                                        <img src={`${window.location.origin}/assets/images/jne.png`} alt="" />
                                        <span className="font-weight-bold">Rp42.000,-</span>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-4 p-5">
                                <h5>Total Pembayaran</h5>
                                <h4 style={{ color: "#D12D2D" }}>
                                    <CurrencyFormat
                                        value={totalPayment}
                                        displayType={'text'}
                                        thousandSeparator={true}
                                        prefix={'Rp'}
                                    />
                                </h4>
                                <div className="form-group mt-5">
                                    <h5>Transfer Dari Bank</h5>
                                    <select
                                        name="bank"
                                        className={`form-control w-100 ${apiErrors.bank && 'is-invalid'}`}
                                        value={formData.bank}
                                        onChange={handleChange}
                                    >
                                        <option value="Mandiri" selected>Mandiri</option>
                                        <option value="BNI">BNI</option>
                                        <option value="BRI">BRI</option>
                                        <option value="BCA">BCA</option>
                                    </select>
                                    {apiErrors.bank && (
                                        <div className="invalid-feedback">{apiErrors.bank[0]}</div>
                                    )}
                                </div>
                                <div className="mt-5">
                                    <h5>Info Pembayaran</h5>
                                    <div className="px-5 py-3 font-weight-bold bg-light">
                                        Gunakan ATM/Banking/mBanking/Setor <br /> tunai untuk transfer ke rekening berikut ini
                                    </div>
                                    <div className="px-5 py-3" style={{
                                        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
                                    }}>
                                        <div className="w-100 d-flex justify-content-between align-items-center">
                                            <img src={`${window.location.origin}/assets/images/bca.png`} alt="" />
                                            <span className="text-info">Salin</span>
                                        </div>
                                        <p>
                                            No Rekening : 6460387220 <br />
                                            Nama Rekening : Merry Soemargo
                                        </p>
                                    </div>
                                </div>
                                <div className="form-group mt-5">
                                    <h5>Upload Bukti Pembayaran</h5>
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
                                <button type="submit" className="btn btn-pink">Next Step</button>
                            </div>
                        </div>
                    </form>
                </div>
            </main>
        </UserLayout>
    );
};

export default Checkout;

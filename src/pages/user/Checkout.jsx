import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import UserLayout from "../../layouts/UserLayout";
import axios from "axios";
import CurrencyFormat from 'react-currency-format';

const Checkout = () => {
    const [cartItems, setCartItems] = useState([]);
    const [totalPayment, setTotalPayment] = useState(0); // Total pembayaran

    useEffect(() => {
        // Ambil data keranjang dari API dengan header auth_token
        const authToken = localStorage.getItem('auth_token');

        axios.get(`${import.meta.env.VITE_API_URL}api/carts/user`, {
            headers: {
                'Authorization': `Bearer ${authToken}`,
            },
        })
            .then(response => {
                setCartItems(response.data);

                // Hitung total pembayaran
                const subTotal = response.data.reduce((total, item) => total + item.sub_total, 0);
                const totalPayment = subTotal + 42000; // Total pembayaran ditambah biaya pengiriman
                setTotalPayment(totalPayment);
            })
            .catch(error => {
                console.error('Error fetching cart data:', error);
            });
    }, []);
    return (
        <UserLayout>
            <main className="main">
                <div className="container">
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
                                <input type="text" className="form-control" placeholder="Budi" />
                            </div>
                            <div className="form-group mt-2">
                                <h5>Alamat</h5>
                                <input type="text" className="form-control" placeholder="Lampung, Indonesia" />
                            </div>
                            <div className="form-group mt-2">
                                <h5>Kode Pos</h5>
                                <input type="number" className="form-control" placeholder="34991" />
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
                                <select name="" id="" className="w-100 form-control">
                                    <option value="">Hello</option>
                                    <option value="">Iya</option>
                                </select>
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
                                        < img src={`${window.location.origin}/assets/images/bca.png`} alt="" />
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
                                <input type="file" className="form-control" />
                            </div>
                            <button type="submit" className="btn btn-pink">Next Step</button>
                        </div>
                    </div>
                </div>

            </main >
        </UserLayout >
    );
};
export default Checkout;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import CurrencyFormat from 'react-currency-format';
import axios from "axios";

function OrderRow(props) {
    const [isConfirmed, setIsConfirm] = useState(false);
    const apiUrl = import.meta.env.VITE_API_URL + "storage/posts/";
    const authToken = localStorage.getItem('auth_token');

    const handleConfirm = () => {
        setIsConfirm(true);

        const apiUrl = `${import.meta.env.VITE_API_URL}api/konfirm/${props.id}`;

        axios
            .post(apiUrl, {
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                    'Content-Type': 'application/json',
                },
            })
            .then((response) => {
                console.log('Data berhasil dikonfirmasi:', response);
                setIsConfirm(false);

                if (props.onDelete) {
                    props.onDelete();
                }
            })
            .catch((error) => {
                console.error('Kesalahan saat menghapus data:', error.response);
                setIsConfirm(false);
            });
    };

    return (

        <tr>
            <td>{props.name}</td>
            <td>{props.address}</td>
            <td>{props.zip}</td>
            <td>{props.product}</td>
            <td>{props.quantity}</td>
            <td>
                <CurrencyFormat value={props.sub_total} displayType={'text'} thousandSeparator={true} prefix={'Rp'} />
            </td>
            <td>{props.courier}</td>
            <td>
                <CurrencyFormat value={props.total} displayType={'text'} thousandSeparator={true} prefix={'Rp'} />
            </td>
            <td>{props.bank}</td>
            <td>{props.date}</td>
            <td>
                <img src={apiUrl + props.image} style={{ width: "100px", height: "100px", objectFit: "cover" }} />
            </td>
            <td>
                {/* Tombol untuk membuka modal */}
                <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target={`#exampleModal${props.id}`}
                >
                    Konfirmasi
                </button>

                {/* Modal */}
                <div className="modal fade" id={`exampleModal${props.id}`} tabIndex="-1" aria-labelledby={`exampleModalLabel${props.id}`} aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id={`exampleModalLabel${props.id}`}>Peringatan</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                Apakah anda yakin ingin konfirmasi pesanan ini?
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Batal</button>
                                <button
                                    type="button"
                                    onClick={handleConfirm}
                                    disabled={isConfirmed}
                                    className="btn btn-success"
                                    data-bs-dismiss="modal"
                                >
                                    {isConfirmed ? 'Menkonfirmasi...' : 'Iya'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </td>
        </tr>
    );
};

export default OrderRow;

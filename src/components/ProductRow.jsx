import React, { useState } from "react";
import { Link } from "react-router-dom";
import CurrencyFormat from 'react-currency-format';
import axios from "axios";

function ProductRow(props) {
    const [isDeleting, setIsDeleting] = useState(false);
    const apiUrl = import.meta.env.VITE_API_URL + "storage/posts/";

    const handleDelete = () => {
        setIsDeleting(true);

        const apiUrl = `${import.meta.env.VITE_API_URL}api/delete/${props.id}`;

        axios
            .delete(apiUrl)
            .then((response) => {
                console.log('Data berhasil dihapus:', response);
                setIsDeleting(false);

                // Panggil fungsi onDelete yang diteruskan dari AdminBigSize
                if (props.onDelete) {
                    props.onDelete();
                }
            })
            .catch((error) => {
                console.error('Kesalahan saat menghapus data:', error.response.data);
                setIsDeleting(false);
            });
    };

    return (
        <tr>
            <td>{props.index}</td>
            <td>{props.title}</td>
            <td>{props.tag}</td>
            <td>{props.description}</td>
            <td>
                <CurrencyFormat value={props.price} displayType={'text'} thousandSeparator={true} prefix={'Rp'} />
            </td>
            <td>{props.description}</td>
            <td>
                <img
                    className="rounded"
                    src={apiUrl + props.image}
                    alt="Product image"
                    style={{ height: "100px", width: "100px", objectFit: "cover" }}
                />
            </td>
            <td>
                <Link to={"/admin/edit/" + props.id} className='btn btn-primary'>Ubah</Link>

                {/* Tombol untuk membuka modal */}
                <button
                    type="button"
                    className="btn btn-danger"
                    data-bs-toggle="modal"
                    data-bs-target={`#exampleModal${props.id}`}
                >
                    Hapus
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
                                Data akan dihapus secara permanen, Apakah anda yakin ingin menghapus?
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Batal</button>
                                <button
                                    type="button"
                                    onClick={handleDelete}
                                    disabled={isDeleting}
                                    className="btn btn-success"
                                    data-bs-dismiss="modal"
                                >
                                    {isDeleting ? 'Menghapus...' : 'Iya'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </td>
        </tr>
    );
};

export default ProductRow;

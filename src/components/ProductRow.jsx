import React from "react";
import { Link } from "react-router-dom";
import CurrencyFormat from 'react-currency-format';

function ProductRow(props) {
    const apiUrl = import.meta.env.VITE_API_URL + "storage/posts/";
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
                    src={apiUrl + props.image}
                    alt="Product image"
                    style={{ height: "230px" }}
                />
            </td>
            <td className='d-flex justify-content-evenly'>
                <Link to="/admin/edit" className='btn btn-primary'>Ubah</Link>

                <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Hapus
                </button>

                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Peringatan</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                Data akan dihapus secara permanen, Apakah anda yakin ingin menghapus?
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Batal</button>
                                <button type="button" className="btn btn-success">Iya</button>
                            </div>
                        </div>
                    </div>
                </div>
            </td>
        </tr>
    );
};

export default ProductRow;
import React from "react";
import CurrencyFormat from 'react-currency-format';

function OrderHistoryRow(props) {
    const apiUrl = import.meta.env.VITE_API_URL + "storage/posts/";

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
                <button disabled className='btn btn-outline-primary'>Lunas</button>
            </td>
        </tr>
    );
};

export default OrderHistoryRow;

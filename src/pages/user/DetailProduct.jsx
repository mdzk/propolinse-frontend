import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import UserLayout from "../../layouts/UserLayout";
import axios from "axios";
import CurrencyFormat from 'react-currency-format';

const DetailProduct = () => {
    const { id } = useParams();
    const apiUrl = import.meta.env.VITE_API_URL;

    const [counter, setCounter] = useState(0);

    const handleClick1 = () => {
        if (counter < data.stok) {
            setCounter(counter + 1);
        }
    };

    const handleClick2 = () => {
        if (counter > 0) {
            setCounter(counter - 1);
        }
    };

    const [data, setData] = useState({
        id: null,
        email: null,
        hrg_brg: 0,
        stok: null,
        nm_brg: null,
        ket_brg: null,
        image: null,
        berat_brg: null,
        jenis_brg: null,
    });
    const [isLoading, setisLoading] = useState(false);
    const [isError, setisError] = useState(false);

    useEffect(() => {
        setisLoading(true);
        axios
            .get(apiUrl + "api/barang/" + id)
            .then((response) => {
                setData(response.data.data);
                setisLoading(false);
            })
            .catch((err) => {
                setisError(true);
                setisLoading(false);
            });
    }, []);

    return (
        <UserLayout>
            {isLoading ? <p>Loading data</p> : null}
            <main className="main">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-4 product-gallery d-flex justify-content-center">
                            <img style={{ maxHeight: "313px" }} src={apiUrl + "storage/posts/" + data.image} alt="sakura"></img>
                        </div>
                        <div className="col-md-8 p-5">
                            <div className="product-details">
                                <h4>{data.nm_brg}</h4>
                                <p>{data.tag}</p>
                                <div className="product-content">
                                    <p>
                                        {data.ket_brg}
                                    </p>
                                </div>
                                <h4>
                                    <CurrencyFormat value={data.hrg_brg} displayType={'text'} thousandSeparator={true} prefix={'Rp'} />
                                </h4>
                                <div className="row">

                                    <div className="w-100 col-lg-3 col-sm-12 col-xs-12 mt-2 mx-3 product-count p-3">
                                        <button onClick={handleClick2} className="button-count">-</button>
                                        <input type="text" className="number-product" value={counter} />
                                        <button onClick={handleClick1} className="button-count">+</button>
                                    </div>

                                    <div className="col-lg-3 col-sm-12 col-xs-12 mt-2 p-0 mx-3">
                                        <a href="#" className="h-100 w-100 btn btn-add p-3">
                                            <span>Add to Bag</span>
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="bg-deskripsi">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 p-5">
                                <div className="product-desc-content">
                                    <h2>Product Information</h2>
                                    <p>
                                        {data.desk_umum}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </UserLayout>
    );
};
export default DetailProduct;
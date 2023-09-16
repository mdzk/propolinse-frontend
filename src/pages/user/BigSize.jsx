import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserLayout from "../../layouts/UserLayout";
import axios from "axios";
import ProductCard from "../../components/ProductCard";

const BigSize = () => {
    const apiUrl = import.meta.env.VITE_API_URL + "api/";
    const [data, setdata] = useState({
        barang: [],
    });
    const [isLoading, setisLoading] = useState(false);
    const [isError, setisError] = useState(false);

    useEffect(() => {
        setisLoading(true);
        axios
            .get(apiUrl + "kategori?category_name=Home")
            .then((response) => {
                setdata(response.data);
                setisLoading(false);
            })
            .catch((err) => {
                setisError(true);
                setisLoading(false);
            });
    }, []);

    if (isLoading) return <h1>Loading data</h1>;
    return (
        <UserLayout>
            <main className="main">
                <div className="container bestsellers">
                    <div className="heading">
                        <h2 className="title ">Mouthwash Big Size (7)</h2>
                    </div>

                    <div className="row">
                        {data.barang.map((product) => (
                            <ProductCard
                                id={product.id}
                                title={product.nm_brg}
                                category={product.jenis_brg}
                                price={product.hrg_brg}
                                image={product.image}
                            />
                        ))}
                    </div>
                </div>
            </main>
        </UserLayout>
    );
};

export default BigSize;

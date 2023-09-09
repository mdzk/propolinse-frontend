import React from "react";
import { Link } from "react-router-dom";
import { useAssets } from "../components/AssetsContext";

function Admin({ children }) { // Ambil children sebagai argumen dari komponen
    const { assets } = useAssets();

    return (
        <>
            {assets && <link rel="stylesheet" href="/materialize.min.css" />}

            <h1>Ini adalah Layout Admin</h1>
            <Link to={"/admin"}>Dashboard</Link > |
            <Link to={"/admin/article"}>Article</Link> |
            <Link to={"/"}>Home</Link>

            {children} {/* Gunakan children langsung di sini */}
        </>
    );
}

export default Admin;
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAssets } from "../utilities/AssetsContext";

function AuthLayout({ children }) {
    const { assets } = useAssets();
    const location = useLocation();
    const isActive = (path) => location.pathname === path;
    return (
        <>
            {assets && (
                <link
                    rel="stylesheet"
                    href={`${window.location.origin}/public/assets/compiled/css/app.css`}
                />
            )}
            {assets && (
                <link
                    rel="stylesheet"
                    href={`${window.location.origin}/public/assets/compiled/css/auth.css`}
                />
            )}
            <div id="auth">
                <div class="row h-100">
                    <div class="col-lg-7 d-none d-lg-block">
                        <div id="auth-right"></div>
                    </div>
                    <div class="col-lg-5 col-12">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}

export default AuthLayout;
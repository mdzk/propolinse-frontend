import React from "react";
import { useAssets } from "../utilities/AssetsContext";

function AuthLayout({ children }) {
    const { assets } = useAssets();
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
                <div className="row h-100">
                    <div className="col-lg-7 d-none d-lg-block">
                        <div id="auth-right"></div>
                    </div>
                    <div className="col-lg-5 col-12">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}

export default AuthLayout;
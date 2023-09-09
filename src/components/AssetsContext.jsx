import React, { createContext, useContext, useState } from "react";

const AssetsContext = createContext(); 

export function useAssets() {
    return useContext(AssetsContext);
}

export function AssetsProvider({ children }) {
    const [assets, setAssets] = useState(true);

    const toggleAsset = (assetName) => {
        setAssets((prevAssets) => ({
            ...prevAssets,
            [assetName]: !prevAssets[assetName],
        }));
    };

    return (
        <AssetsContext.Provider value={{ assets, toggleAsset }}>
            {children}
        </AssetsContext.Provider>
    );
}

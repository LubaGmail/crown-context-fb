import { createContext, useState, useEffect } from "react";

import SHOP_DATA from '../../src/shop-data.json'
import { getCategories } from "../utils/firebase/firebase.utils";

export const ProductContext = createContext({
    products: null,
    setProducts: () => null,
    categoryMap: null,
});

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [categoriesMap, setCategoryMap] = useState({})
    const value = { products, setProducts, categoriesMap };

    useEffect(() => {
        const getData = async () => {
            let data = await getCategories()
            setProducts(data)
        }
        getData()

    }, [])

    useEffect(() => {
        let map = products.reduce((acc, el, i) => {
            const { title, items } = el
            const category = title.toLowerCase()
            acc[category] = items
            return acc
        }, {}) 
        setCategoryMap(map)

    }, [products])
    
    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    )
    
};

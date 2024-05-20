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

    /**
        (5) [{…}, {…}, {…}, {…}, {…}]
            0:   {title: 'Hats', items: Array(9)}
                                        0: {featured: false, name: 'Brown Brim', price: 25, id: 1, imageUrl: 'https:/...}
     */
    useEffect(() => {
        const getData = async () => {
            let data = await getCategories()
            setProducts(data)
        }
        getData()
    }, [])

    /**
       {hats: Array(9), jackets: Array(5), mens: Array(6), sneakers: Array(8), womens: Array(7)}
        hats: 
                0: {id: 1, imageUrl: 'https://i..png', featured: false, name: 'Brown Brim', price: 25}
     */
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

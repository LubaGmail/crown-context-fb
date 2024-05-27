import { createContext, useState, useEffect } from "react";
import { gql, useQuery } from '@apollo/client';

import SHOP_DATA from '../../src/shop-data.json'

export const ProductContext = createContext({
    products: null,
    categoryMap: null,
    loading: false
});

const COLLECTIONS = gql`
    query GetCollections {
        collections {
        id
        title
        items {
            id
            name
            price
            imageUrl
        }
    }
}`;

export const ProductProvider = ({ children }) => {
    /**
        collections: Array(5)
                    0:  id: "cjwuuj5bz000i0719rrtw5gqk"
                        title: "Hats"
                        items: (9) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
                                    0: {__typename: 'Item', 
                                        id: 'cjwuuj5ip000j0719taw0mjdz',
                                        name: 'Brown Brim',
                                        price: 25,
                                        imageUrl: 'https://i.ibb..'
                                    }
                    1:  id: "cjwuun2fa001907195roo7iyk"
                        title: ...
     */
         
    const { loading, error, data } = useQuery(COLLECTIONS);

    const [products, setProducts] = useState([]);
    const [categoriesMap, setCategoryMap] = useState({})
    const value = { products, categoriesMap, loading };

    useEffect(() => {
        if (data) {
            const { collections } = data;
            setProducts(collections)
        }
    }, [data])

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

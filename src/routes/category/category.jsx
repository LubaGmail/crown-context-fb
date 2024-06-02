import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';

import ProductCard from "../../components/product-card/product-card";
import Spinner from "../../components/spinner/spinner";

import './category.styles.scss'

const GET_CATEGORY = gql`
    query ($title: String!) {
        getCollectionsByTitle(title: $title) {
            title
            id
            items {
                id
                name
                price
                imageUrl
            }
        }
    }
`

const Category = () => {
    const { category } = useParams();
    const { loading, error, data } = useQuery(
        GET_CATEGORY,
        {
            variables:
                { title: category }
        }
    )

    // const { categoriesMap, loading } = useContext(ProductContext)
    const [categoryProducts, setCategoryProducts] = useState([]);

    /**
        data
            getCollectionsByTitle: 
                id: "cjwuuj5bz000i0719rrtw5gqk"
                items: [{..}, {..}, ..]
                title: 'Hats'
    */
    useEffect(() => {
        if (data) {
            const { getCollectionsByTitle: { items } } = data       // nested destructure
            setCategoryProducts(items);
        }
    }, [data, category])
    
    return (
        <>
            <h4>Category: {category}</h4>
            {
                loading ? (
                    <Spinner />
                ) : (
                    <div className='single-category-container'>
                        {categoryProducts?.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                )
            }
        </>
    )
}

export default Category
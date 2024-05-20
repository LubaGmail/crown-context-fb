import { useContext, Fragment, useEffect, useState } from "react";
import { Routes, Route, Link, Outlet, useParams } from 'react-router-dom';

import ProductCard from "../../components/product-card/product-card";

import { ProductContext } from "../../contexts/shop.context";

import './category.styles.scss'

const Category = () => {
    const { category } = useParams();
    let { categoriesMap } = useContext(ProductContext)
    const [categoryProducts, setCategoryProducts] = useState([]);

    useEffect(() => {
        setCategoryProducts(categoriesMap[category])
    }, [category, categoriesMap])
    
   
    return (
        <>
            <h4>Category: {category}</h4>
            <div className='single-category-container'>
                {categoryProducts?.map((product, i) => (
                     <ProductCard key={product.id} product={product} />
                )) }
            </div>
        </>
    )
}

export default Category
import { useContext, Fragment } from "react";
import { Routes, Route, Link, Outlet, useParams } from 'react-router-dom';

import ProductCard from "../../components/product-card/product-card"; 

import './categories-preview.styles.scss'

const CategoriesPreview = ({ categoriesMap }) => {
    
    return (
        <>
            <h3>CategoriesPreview</h3>
            {
                Object.keys(categoriesMap).map((title) => {
                    return <Fragment key={title}>
                        <Link to={`/shop/${title}`}>
                            <h2>
                                <span>{title.toUpperCase()}</span>
                            </h2>
                        </Link>
                        <div className="categories-preview-container">
                            {categoriesMap[title].map((product, i) => (
                                <Fragment key={i} >
                                    {i < 3 && <ProductCard product={product} />}
                                </Fragment>
                                
                            )) }
                         </div>
                      </Fragment>
                })   
            }    
            
        </>
    )
}

export default CategoriesPreview
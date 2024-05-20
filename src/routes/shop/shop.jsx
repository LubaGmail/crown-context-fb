import { useContext, Fragment } from "react";
import { Routes, Route, Link, Outlet, useParams  } from 'react-router-dom';

import { ProductContext } from "../../contexts/shop.context";

import CategoriesPreview from "../categories-preview/categories-preview";
import Category from "../category/category";

const Shop = () => {
    let { categoriesMap } = useContext(ProductContext)

    return (
        <>
            <Routes>
                <Route index element={<CategoriesPreview categoriesMap={categoriesMap} />} />
                <Route path=':category' element={<Category />} />
            </Routes>

            {/* <Outlet /> */}
        </>
    )
}

export default Shop

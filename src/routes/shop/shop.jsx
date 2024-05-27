import { useContext, Fragment } from "react";
import { Routes, Route, Link, Outlet, useParams  } from 'react-router-dom';

import { ProductContext } from "../../contexts/shop.context";

import CategoriesPreview from "../categories-preview/categories-preview";
import Category from "../category/category";

const Shop = () => {

    return (
        <>
            <Routes>
                <Route index element={<CategoriesPreview />} />
                <Route path=':category' element={<Category />} />
            </Routes>

            {/* <Outlet /> */}
        </>
    )
}

export default Shop

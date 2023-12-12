import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import AllTrendingPage from "../pages/AllTrendingPage/AllTrendingPage";
import CategoryPage from "../pages/CategoryPage/CategoryPage";
import GifPage from "../pages/GifPage/GifPage";

const MainRoutes = () => {
    return (
        <React.Suspense fallback={<span>...Loading</span>} >
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/all-trending-page" element={<AllTrendingPage/>}/>
                    <Route path="/category-page/:index" element={<CategoryPage/>}/>
                    <Route path="/gif-page/:id" element={<GifPage/>}/>
                </Routes>
            </BrowserRouter>
        </React.Suspense>
    )
}

export default MainRoutes;
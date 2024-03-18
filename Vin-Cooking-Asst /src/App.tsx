import React, { useState, useEffect } from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./components/Home";
import {Loader} from "./components/Loader";
import {Cook} from "./components/cook";
import IngredientsPage from "./components/IngredientsPage";
import ProductsPage from "./components/ProductsPage";

function App() {
    return (
        <div className="App font-nunito h-full">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}>
                    </Route>
                    <Route path={"/ingredients-page"} element={<IngredientsPage />}>
                    </Route>
                    <Route path={"/products-page"} element={<ProductsPage />}>
                    </Route>
                    <Route path={"/loader"} element={<Loader />}>
                    </Route>
                    <Route path={"/cook"} element={<Cook />}>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

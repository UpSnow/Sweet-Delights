
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../pages/Login/Login";
import Details from "../pages/DetailsProduct/Details";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Homen";
import CartProduct from "../pages/CartProduct/CartProduct"
import Checkout from "../pages/Checkout/Checkout";
import Address from "../pages/Addresses/Address";

import LayoutPage from "../components/LayoutPage/LayoutPage";


import CartProvider from "../context/CartContext";





const AppRoutes = () => {
    return (
        <Router>
            <CartProvider>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/cadastro" element={<Register />} />


                    <Route element={<LayoutPage />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/details" element={<Details />} />
                        <Route path="/carrinho" element={<CartProduct />} />
                        <Route path="/checkout" element={<Checkout/>} />
                        <Route path="/address" element={<Address/>} />

                    </Route>

                </Routes>
            </CartProvider>
        </Router>
    )
}

export default AppRoutes

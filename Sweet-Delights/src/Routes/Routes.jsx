
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../pages/Login/Login";
import Details from "../pages/DetailsProduct/Details";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Homen";
import CartProduct from "../pages/CartProduct/CartProduct"
import Checkout from "../pages/Checkout/Checkout";
import Address from "../pages/Addresses/Address";
import Promotion from "../pages/Promotion/Promotion";


import Categories from "../pages/Categories/Categories"
import Loja from "../pages/Loja/Loja";

import LayoutPage from "../components/LayoutPage/LayoutPage";


import { CartProvider } from "../context/CartContext";
import { AuthProvider } from "../context/AuthContext";


import PrivateRoute from "../components/PrivateRoute/PrivateRoute";





const AppRoutes = () => {
    return (
        <Router>
            <AuthProvider>
                <CartProvider>
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/cadastro" element={<Register />} />


                        <Route element={<LayoutPage />}>
                            <Route path="/" element={<Home />} />
                            <Route path="/home" element={<Home />} />
                            <Route path="/promocao" element={<Promotion />} />
                            <Route path="/details/:id" element={<Details />} />
                            <Route path="/carrinho" element={<CartProduct />} />


                            <Route path="/categorias" element={<Categories />} />
                            <Route path="/loja/:categoria" element={<Loja />} />

                            <Route path="/checkout" element={
                                <PrivateRoute>
                                    <Checkout />
                                </PrivateRoute>

                            } />
                            <Route path="/address" element={
                                <PrivateRoute>
                                    <Address />
                                </PrivateRoute>

                            } />

                        </Route>

                    </Routes>
                </CartProvider>
            </AuthProvider>
        </Router>
    )
}

export default AppRoutes

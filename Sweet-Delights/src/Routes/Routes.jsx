
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import LayoutPage from "../components/LayoutPage/LayoutPage";
import Details from "../pages/DetailsProduct/Details.jsx";
import CartProduct from "../pages/CartProduct/CartProduct.jsx";

const AppRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/layout" element={<LayoutPage/>}/>
                <Route path="/details" element={<Details/>}/>
                <Route path="/cartProduct" element={<CartProduct/>}/>
            </Routes>
        </Router>
    )
}

export default AppRoutes




import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../pages/Login/Login";
import Details from "../pages/DetailsProduct/Details";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Homen";

import LayoutPage from "../components/LayoutPage/LayoutPage";




const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Register />} />

                <Route  element={<LayoutPage />}>
                <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/details" element={<Details />} />

                </Route>

            </Routes>
        </Router>
    )
}

export default AppRoutes

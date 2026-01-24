
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import LayoutPage from "../components/LayoutPage/LayoutPage";
import Details from "../pages/DetailsProduct/Details";


const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route element={<LayoutPage />}>
                    <Route path="/details" element={<Details />} />
                </Route>

            </Routes>
        </Router>
    )

}

export default AppRoutes

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import LayoutPage from "../components/LayoutPage/LayoutPage";


const AppRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/layout" element={<LayoutPage/>}/>
            </Routes>
        </Router>
    )

}

export default AppRoutes


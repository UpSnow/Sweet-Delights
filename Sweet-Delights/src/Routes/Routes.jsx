
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import LayoutPage from "../components/LayoutPage/LayoutPage";
import Details from "../pages/DetailsProduct/Details.jsx";


const AppRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/layout" element={<LayoutPage/>}/>
                 <Route path="/details" element={<Details/>} />
            </Routes>
        </Router>
    )

}

export default AppRoutes



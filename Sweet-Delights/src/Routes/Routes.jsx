<<<<<<< HEAD
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

=======
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login.jsx";
import Details from "../pages/DetailsProduct/Details.jsx";

export default function AppRoutes() {
  return (
    <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/details" element={<Details/>} />
    </Routes>
  );
}
>>>>>>> feat/product-details-page

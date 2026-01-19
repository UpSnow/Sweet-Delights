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

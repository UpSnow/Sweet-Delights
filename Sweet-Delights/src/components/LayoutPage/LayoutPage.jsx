import React from "react";
import './LayoutPage.css'
import Button from "../Button/Button";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import r from "../../assets/logo.png"
import Login from "../../pages/Login/Login";
import { useNavigate } from "react-router-dom";
const LayoutPage = ({ children }) => {
    const navigate = useNavigate();
    return (

        <div className="layout-page-container">
            <div className="layout-page-sidebar">
                <div className="layout-page-logo">
                    <img src="/src/assets/logo.png" alt="Logo"/>
                    <p>Sweet Delights</p>
                </div>
                <div className="layout-page-menu">
                    <a href="/Categorias" >Categorias </a>
                    <a href="/products" >Destaques </a>
                    <a href="/orders" >Promoçoes </a>
                </div>
                <div className="layout-page-user-buttons">
                    <Button icon={<FaUserCircle />} onClick={() => navigate('/login')} variant="primary">Login</Button>
                    <Button icon={<FaShoppingCart />} variant="secondary">| Itens</Button>
                </div>

            </div>
            {children}
            <div className="wave-container">
                
            </div>
        </div>
    )
}
export default LayoutPage;
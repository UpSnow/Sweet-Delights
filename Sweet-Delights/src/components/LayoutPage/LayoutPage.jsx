import React from "react";
import './LayoutPage.css';
import Button from "../Button/Button";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { Link, Outlet, useNavigate } from "react-router-dom";
import r from "../../assets/logo.png";
import Background from "../../assets/img/Background.png"

const LayoutPage = () => {
    const navigate = useNavigate();

    return (
        <div className="layout-page-container">
            
            {/* Sidebar */}
            <div className="layout-page-sidebar">
                
                {/* Logo */}
                <div className="layout-page-logo">
                    <img src={r} alt="Logo" />
                    <p>Sweet Delights</p>
                </div>

                {/* Menu */}
                <div className="layout-page-menu">
                    <Link to="/Categorias">Categorias</Link>
                    <Link to="/products">Destaques</Link>
                    <Link to="/orders">Promoções</Link>
                </div>

                {/* User Buttons */}
                <div className="layout-page-user-buttons">
                    <Button 
                        icon={<FaUserCircle />} 
                        onClick={() => navigate('/login')} 
                        variant="primary"
                    >
                        Login
                    </Button>

                    <Button icon={<FaShoppingCart />} variant="secondary">
                        | Itens
                    </Button>
                </div>
            </div>

            {/* Área principal onde as rotas filhas serão renderizadas */}
            <div className="layout-page-content">
                <Outlet />
            </div>

            {/* Footer / onda */}
            <div className="wave-container">
                {/* Aqui pode colocar o SVG da onda ou outro conteúdo */}
                <img src={Background} alt="" />
            </div>
        </div>
    );
}

export default LayoutPage;

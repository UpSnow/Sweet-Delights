import React from "react";
import './LayoutPage.css';
import Button from "../Button/Button";
import { FaUserCircle } from "react-icons/fa";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import Background from "../../assets/img/Background.png"
import { FaBasketShopping } from "react-icons/fa6";



import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";

const LayoutPage = () => {
    const { totalItems } = useCart()
    const navigate = useNavigate();

    const { user, logout, isAuthenticated } = useAuth();


    const handleUserClick = () => {
        if (isAuthenticated) {
            logout();
            navigate("/")
        } else {
            navigate('/login')
        }

    }

    return (
        <div className="layout-page-container">

            {/* header */}
            <div className="layout-page-header">

                {/* Logo */}
                <div className="layout-page-logo" onClick={() => navigate("/home")}>
                    <img src={Logo} alt="Logo" />
                    <p>Sweet Delights</p>
                </div>

                {/* Menu */}
                <div className="layout-page-menu">
                    <Link to="/Categorias">Categorias</Link>
                    <Link to="/home#destaques">Destaques</Link>
                    <Link to="/promocao">Promoções</Link>
                </div>

                {/* User Buttons */}
                <div className="layout-page-user-buttons">
                    <Button

                        onClick={handleUserClick}
                        variant="primary"
                    >
                        {isAuthenticated && user
                            ? `Sair (${user.nome})`
                            : "Login"}
                    </Button>

                    <Button icon={<FaBasketShopping />} onClick={() => navigate('/carrinho')} variant="secondary">
                        | {totalItems} Itens
                    </Button>
                    {isAuthenticated ? (
                        <Link to="/perfil" className="profile-icon-link">
                            <div className="profile-icon-container">
                                <FaUserCircle />
                            </div>
                        </Link>
                    ) : null}

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

import { useEffect } from "react";
import "./Home.css"
import logo from "../../assets/logo.png"
import ProductCard from "../../components/ProductCard/ProductCard";
import { Link, useLocation,useNavigate } from "react-router-dom"


import { useCart } from "../../context/CartContext";


const products = [
    {
        id: 1,
        name: "Brownie",
        price: 5.0,
        image: logo,
    },
    {
        id: 2,
        name: "Cookie",
        price: 3.5,
        image: logo,
    },
    {
        id: 3,
        name: "Trufa",
        price: 2.0,
        image: logo,
    },
    {
        id: 4,
        name: "Bolo de Pote",
        price: 7.0,
        image: logo,
    },

];

const Home = () => {

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.hash === "#destaques") {
            const section = document.getElementById("destaques");

            section?.scrollIntoView({ behavior: "smooth" });

            // 🔥 remove o #destaques da URL
            navigate(location.pathname, { replace: true }); // o que é pathname?
        }
    }, [location, navigate]);

    const { addToCart } = useCart();

    return (
        <div className="container-home">
            <header className="header-home">
                <img src={logo} />
                <div className="header-home-texto">
                    <h1>Sweet Delights</h1>
                    <p>Brownies, Cookie, Trufas e muito mais</p>
                </div>
            </header>
            <div className="home-content">
                <h2>Popular</h2>
                <div className="home-product">
                    {products.map((product) =>
                        <ProductCard
                            key={product.id}
                            name={product.name}
                            price={product.price}
                            image={product.image}
                            onAdd={() => addToCart(product)}
                        />
                    )}
                </div>
            </div>
            <h2 className="home-texto-h2">Categorias</h2>
            <div className="home-categories">
                <p>Bolo no Pote </p>
                <span className="divider"></span>
                <p>Mousse</p>
                <span className="divider"></span>
                <p>Trufas</p>
                <span className="divider"></span>
                <Link to="/categorias" className="link-mais">Mais...</Link>
            </div>
            <h2 className="home-texto-h2" id="destaques">Mais Vendidos da Semana</h2>
            <div className="home-product-2">
                {products.map((product) =>
                    <ProductCard
                        key={product.id}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                        onAdd={() => addToCart(product)}
                    />
                )}
            </div>
            <div className="home-search">
                <h1>
                    Um doce é pequeno, mas a
                    <br /> felicidade que traz é gigante.
                </h1>
                <p>Pesquise seu doce favorito</p>
            </div>
            <footer className="footer">
                <div className="footer-brand">
                    <h2>Cantinho Doce</h2>
                    <p>Doces feitos com carinho 🍰</p>
                </div>

                <div className="footer-columns">
                    <div>
                        <h4>Company</h4>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/careers">Careers</Link>
                    </div>

                    <div>
                        <h4>Quick Links</h4>
                        <Link to="/orders">Order Tracking</Link>
                        <Link to="/faq">FAQs</Link>
                    </div>

                    <div>
                        <h4>Legal</h4>
                        <Link to="/terms">Terms & Conditions</Link>
                        <Link to="/privacy">Privacy Policy</Link>
                    </div>
                </div>
            </footer>



        </div>
    )

}

export default Home
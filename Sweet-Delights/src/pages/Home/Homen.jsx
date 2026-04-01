import { useEffect, useState } from "react";
import "./Home.css"
import logo from "../../assets/logo.png"
import ProductCard from "../../components/ProductCard/ProductCard";
import { Link, useLocation, useNavigate } from "react-router-dom"


import { useCart } from "../../context/CartContext";

import { getProdutos, getMaisVendidos } from "../../api/productApi";
import ScrollContainer from "../../components/ScrollContainer/ScrollContainer";
import MainScrollContainer from "../../components/MainScrollContainer/MainScrollContainer";
import Loading from "../../components/Loading/Loading";
import ErrorState from "../../components/ErrorState/ErrorState";


const Home = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const { addToCart } = useCart();

    const [produtos, setProdutos] = useState([]);
    const [maisVendidos, setMaisVendidos] = useState([]);


    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false)

    useEffect(() => {
        const loadAllData = async () => {
            try {
                setError(false); // Reseta o erro antes de tentar
                const [resProdutos, resMaisVendidos] = await Promise.all([
                    getProdutos(),
                    getMaisVendidos()
                ]);

                setProdutos(resProdutos);
                setMaisVendidos(resMaisVendidos);

            } catch (error) {
                console.error("Erro ao buscar dados:", error);
                setError(true); // Se a API falhar, ativamos o erro

            } finally {
                setLoading(false);
            }

        }
        loadAllData();

    },[])

    // Efeito do Scroll (mantido igual)
    useEffect(() => {
        if (!loading && location.hash === "#destaques") {
            // 1. Procuramos a DIV que tem o scroll (sua viewport)
            const viewport = document.querySelector(".main-scroll-viewport");
            // 2. Procuramos o título dos destaques
            const section = document.getElementById("destaques");

            if (viewport && section) {
                // Calculamos a distância do título dentro da div de scroll
                const distance = section.offsetTop - 20; // 20px de margem do topo

                viewport.scrollTo({
                    top: distance,
                    behavior: "smooth"
                });

                // Limpa a URL
                navigate(location.pathname, { replace: true });
            }
        }
    }, [location, navigate, loading]);

    if (error) {
    return (
        <ErrorState 
            mensagem="Erro ao carregar os doces" 
            onRetry={() => window.location.reload()} // Ou chamar loadAllData de novo
        />
    );
}

    if (loading) {
        return <Loading />
    }

    return (


        <MainScrollContainer height="calc(100vh - 40px)">
            <div className="container-home">

                <header className="header-home">
                    <img src={logo} />
                    <div className="header-home-texto">
                        <h1>Sweet Delights</h1>
                        <p>Brownies, Cookie, Trufas e muito mais</p>
                    </div>
                </header>
                <div className="home-content">
                    <div className="home-inner-container"> {/* Div auxiliar para controle */}
                        <h2 style={{ color: "white" }}>Popular</h2>
                        <ScrollContainer>
                            {produtos.map((product) =>
                                <ProductCard
                                    key={product.id}
                                    id={product.id}
                                    name={product.name}
                                    price={product.price}
                                    image={product.image}
                                    onAdd={() => addToCart(product)}
                                />
                            )}
                        </ScrollContainer>
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
                <div className="home-section">
                    <h2 className="home-texto-h2" id="destaques">Mais Vendidos da Semana</h2>

                    <ScrollContainer>
                        {maisVendidos.map((product) =>
                            <ProductCard
                                key={product.id}
                                id={product.id}
                                name={product.name}
                                price={product.price}
                                image={product.image}
                                onAdd={() => addToCart(product)}
                            />
                        )}
                    </ScrollContainer>


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
        </MainScrollContainer>

    )

}

export default Home
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useCart } from "../../context/CartContext";
import BackButton from "../../components/BackButton/BackButton";
import { getProdutos } from "../../api/productApi";
import { useState, useEffect } from "react";
import "./Loja.css"; // Não esqueça do import!

const Loja = () => {
    const { categoria } = useParams();
    const [produtos, setProdutos] = useState([]);
    const { addToCart } = useCart();

    useEffect(() => {
        getProdutos().then(setProdutos);
    }, []);

    const productFiltered = produtos.filter(
        (p) => p.category.toLowerCase() === categoria.toLowerCase()
    );

    return (
        <div className="loja-page">
            <div style={{ width: '100%', maxWidth: '1200px' }}>
                <BackButton variant="2" />
            </div>

            <h1>{categoria}</h1>

            {productFiltered.length > 0 ? (
                <div className="products-grid">
                    {productFiltered.map((produto) => (
                        <ProductCard
                            key={produto.id}
                            id={produto.id}
                            image={produto.image}
                            name={produto.name}
                            price={produto.price}
                            onAdd={() => addToCart(produto)}
                        />
                    ))}
                </div>
            ) : (
                <p className="no-products">Nenhum doce encontrado nesta categoria ainda... 🧁</p>
            )}
        </div>
    );
};

export default Loja;
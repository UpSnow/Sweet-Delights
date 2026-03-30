import ProductCard from "../../components/ProductCard/ProductCard";
import logo from "../../assets/logo.png"
import "./Promotion.css"
import { useCart } from "../../context/CartContext";
import { useEffect, useState } from "react";

import { getPromocoes } from "../../api/productApi";
import BackButton from "../../components/BackButton/BackButton";
import ScrollContainer from "../../components/ScrollContainer/ScrollContainer";

const Promotion = () => {

  const { addToCart } = useCart();
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    getPromocoes().then(setProdutos)

  }, [])

  return (
    <div className="promocoes-page">
       <div style={{ width: '100%', maxWidth: '1200px' }}>
                <BackButton variant="2" />
            </div>
      <h1>🔥 Promoções</h1>

      {produtos.length > 0 ? (
        <ScrollContainer>
          {produtos.map((produto) => (
            <ProductCard
              key={produto.id}
              id={produto.id}
              image={produto.image}
              name={produto.name}
              oldPrice={produto.oldPrice}
              price={produto.price}
              onAdd={() => addToCart(produto)}
            />
          ))}
        </ScrollContainer>
          
      ) : (
        <p className="no-promotions">Fique atento! Novas ofertas em breve... 🍰</p>
      )}
    </div>
  );
}

export default Promotion
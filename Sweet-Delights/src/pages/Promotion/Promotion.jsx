import ProductCard from "../../components/ProductCard/ProductCard";
import logo from "../../assets/logo.png"
import "./Promotion.css"
import { useCart } from "../../context/CartContext";

 const Promotion=()=> {

    const {addToCart}= useCart();

  const productPromotion = [
    {
      id: 1,
      name: "Bolo de Chocolate",
      price: 19.90,
      oldPrice: 29.90,
      image: logo
    },
    {
      id: 2,
      name: "Cupcake",
      price: 6.90,
      oldPrice: 9.90,
      image: logo
    },
    {
      id: 3,
      name: "Donut",
      price: 4.50,
      oldPrice: 7.00,
      image: logo
    }
  ];

  
  return (
    <div className="promocoes-page">

      <h1>🔥 Promoções</h1>

      <div className="products-grid">
        {productPromotion.map((produto) => (
          <ProductCard
            key={produto.id}
            image={produto.image}
            name={produto.name}
            oldPrice={produto.oldPrice}
            price={produto.price}
            onAdd={() => addToCart(produto)}
          />
        ))}
      </div>

    </div>
  );
}

export default Promotion
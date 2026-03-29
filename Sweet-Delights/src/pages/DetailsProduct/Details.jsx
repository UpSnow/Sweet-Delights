import { useParams } from "react-router-dom";
import"./Details.css"
import Button from "../../components/Button/Button";

import { useCart } from "../../context/CartContext";



const Details = () => {
  const { id } = useParams(); // o que esse useParams faz?

  const { addToCart } = useCart();

  const produtos = [
    {
      id: 1,
      name: "Bolo de Chocolate",
      price: 20,
      description: "Delicioso bolo com cobertura cremosa",
      image: "/images/bolo.jpg",
    },
    {
      id: 2,
      name: "Cupcake",
      price: 8,
      description: "Cupcake fofinho com recheio",
      image: "/images/cupcake.jpg",
    },
  ];

  const produto = produtos.find((p) => p.id === Number(id)); // ele só da certo de encontrar um com id igual é iiso?


  if (!produto) return <p>Produto não encontrado</p>;

  return (
    <div className="details-page">

      <img src={produto.image} alt={produto.name} />

      <h1>{produto.name}</h1>

      <p>{produto.description}</p>

      <h2>R$ {produto.price.toFixed(2)}</h2>

      <Button onClick={() => addToCart(produto)}>Adicionar ao carrinho</Button>

    </div>
  );
}
export default Details
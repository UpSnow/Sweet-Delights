import { useParams } from "react-router-dom";
import "./Details.css"
import Button from "../../components/Button/Button";

import { useCart } from "../../context/CartContext";
import { getProdutoById } from "../../api/productApi";

import { useState, useEffect } from "react";
import BackButton from "../../components/BackButton/BackButton";



const Details = () => {
  const { id } = useParams(); // pega o id da URL

  const { addToCart } = useCart();

  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    const fetchProduto = async () => {
      try {
        const data = await getProdutoById(id);
        setProduto(data);
      } catch (err) {
        setErro("Produto não encontrado");
      } finally {
        setLoading(false);
      }
    };

    fetchProduto();
  }, [id]);

  // 🔄 loading
  if (loading) return <p>Carregando...</p>;

  // ❌ erro
  if (erro) return <p>{erro}</p>;

  return (
    <div className="details-page">
      <div style={{ width: '100%', maxWidth: '1000px'}}>
        <BackButton variant="2" />
      </div>

      <div className="details-container">
        {/* Lado Esquerdo: Imagem */}
        <div className="details-image">
          <img src={produto.image} alt={produto.name} />
        </div>

        {/* Lado Direito: Informações */}
        <div className="details-info">
          <h1>{produto.name}</h1>

          <div className="details-meta">
            <span>⭐ {produto.rating}</span>
            <span>📦 Estoque: {produto.stock}</span>
          </div>

          <p className="details-description">{produto.description}</p>

          <h2 className="details-price">R$ {produto.price.toFixed(2)}</h2>

          <div style={{ width: '100%', maxWidth: '300px' }}>
            <Button onClick={() => addToCart(produto)}>
              Adicionar ao carrinho
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Details
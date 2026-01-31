import "./ProductCard.css";
import { FaPlus } from "react-icons/fa";

export default function ProductCard({ image, name, price, onAdd }) {
  return (
    <div className="product-card">
      <div className="image-container">
        <img src={image} alt={name} />
      </div>

      <div className="card-footer">
        <span className="product-name">{name}</span>

        <button className="add-button" onClick={onAdd}>
          <FaPlus />
        </button>
      </div>

      <span className="product-price">
        {price.toFixed(2).replace(".", ",")}
      </span>
    </div>
  );
}

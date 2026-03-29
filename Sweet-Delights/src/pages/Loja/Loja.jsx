import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useCart } from "../../context/CartContext";
import BackButton from "../../components/BackButton/BackButton";


const Loja = () => {

    const { categoria } = useParams();

    const {addToCart} = useCart();

    const produtos = [
        {
            id: 1,
            name: "Bolo de Chocolate",
            price: 20,
            category: "Bolos",
            image: "/images/bolo.jpg",
        },
        {
            id: 2,
            name: "Cupcake de Morango",
            price: 8,
            category: "Cupcakes",
            image: "/images/cupcake.jpg",
        },
        {
            id: 3,
            name: "Donut de Chocolate",
            price: 6,
            category: "Donuts",
            image: "/images/donut.jpg",
        },
    ];

    const productFiltered = produtos.filter(
        (p) => p.category === categoria
    )

    return (
        <div className="loja-page">
            <BackButton variant= "2"/>
            <h1>{categoria}</h1>

            <div className="products-grid">
                {productFiltered.map((produto) => (
                    <ProductCard
                        key={produto.id}
                        image={produto.image}
                        name={produto.name}
                        price={produto.price}
                        onAdd={() => addToCart(produto)}
                    />
                ))}
            </div>
        </div>

    )




}

export default Loja
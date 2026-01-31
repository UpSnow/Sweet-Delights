import React from "react";
import "./Home.css"
import logo from "../../assets/logo.png"
import ProductCard from "../../components/ProductCard/ProductCard";

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
    return (
        <div className="container-home">
            <div className="header-home">
                <img src={logo} />
                <div className="header-home-texto">
                    <h1>Sweet Delights</h1>
                    <p>Brownies, Cookie, Trufas e muito mais</p>
                </div>
            </div>
            <div className="home-content">
                <h2>Popular</h2>
                <div className="home-product">
                    {products.map((product) =>
                        <ProductCard
                            key={product.id}
                            name={product.name}
                            price={product.price}
                            image={product.image}
                            onAdd={() => console.log("Adicionar:", product.name)}
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
                <p>Mousse</p>
                <span className="divider"></span>
                <p>Mais...</p>
            </div>
            <h2 className="home-texto-h2">Mais Vendidos da Semana</h2>
            <div className="home-product-2">
                {products.map((product) =>
                    <ProductCard
                        key={product.id}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                        onAdd={() => console.log("Adicionar:", product.name)}
                    />
                )}
            </div>
            <div className="home-search">
                <h1>
                     Um doce é pequeno, mas a 
                    <br />felicidade que traz é gigante.
                    </h1>
                <p>Pesquise seu doce favorito</p>

            </div>



        </div>
    )

}

export default Home
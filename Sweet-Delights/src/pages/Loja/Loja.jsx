import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useCart } from "../../context/CartContext";
import BackButton from "../../components/BackButton/BackButton";
import { getProdutos } from "../../api/productApi";
import { useState, useEffect } from "react";
import "./Loja.css"; 

import ScrollContaine from "../../components/ScrollContainer/ScrollContainer"


import Loading from "../../components/Loading/Loading";
import ErrorState from "../../components/ErrorState/ErrorState";
const Loja = () => {
    const { categoria } = useParams();
    const [produtos, setProdutos] = useState([]);
    const { addToCart } = useCart();

     const [ loading,setLoading]= useState(true);
     const [error, setError] = useState(false)


    useEffect(()=>{

        const loadAllData = async()=>{
            try {
                setError(false)
                

                const[resProdutos]= await Promise.all([
                    getProdutos()
                ]);
                setProdutos(resProdutos)
                
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
                setError(true)
                
            } finally{
                setLoading(false)
            }

        }
        loadAllData();

       
    },[])

    if(error){
        return(
            <ErrorState
             mensagem="Erro ao carregar os doces" 
            onRetry={() => window.location.reload()} />
        )
    }

    if(loading){
        return <Loading/>
    } 

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
                    <ScrollContaine>
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
                    </ScrollContaine>
                </div>
                
            ) : (
                <p className="no-products">Nenhum doce encontrado nesta categoria ainda... 🧁</p>
            )}
           
        </div>
         
        
    );
};

export default Loja;
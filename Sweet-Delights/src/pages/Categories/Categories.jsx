import { useNavigate, } from "react-router-dom";
import "./Categories.css";

import { useState, useEffect } from "react";
import { getCategorias } from "../../api/productApi";
import BackButton from "../../components/BackButton/BackButton";


import MainScrollContainer from "../../components/MainScrollContainer/MainScrollContainer";

const Categories = () => {

    const [categorias, setCategorias]= useState([])

    const navigate = useNavigate();


    useEffect(()=>{

        getCategorias().then(setCategorias)
    },[])


   

return(
    <div className="categorias-page">
        <MainScrollContainer height="calc(80vh - 40px)" >
        <div style={{ width: '100%', maxWidth: '1000px' }}>
            <BackButton variant="2"/>
        </div>
        
        <h1>Categorias</h1>

        <div className="categorias-grid">

            {categorias.map((cat)=>(
                <div

                key= {cat.id}
                className="categoria-card"
                onClick={() => navigate(`/loja/${cat.nome}`)}
                >
                    <img src={cat.imagem} alt={cat.nome}/>
                    <p>{cat.nome}</p>

                </div>

            ))}

        </div>
        </MainScrollContainer>


    </div>
)

}

export default Categories
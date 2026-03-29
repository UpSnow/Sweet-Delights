import { useNavigate } from "react-router-dom";
import "./Categories.css";


const Categories = () => {

    const navigate = useNavigate();

    const categorias = [
        { id: 1, nome: "Bolos", imagem: "/images/bolo.jpg" },
        { id: 2, nome: "Cupcakes", imagem: "/images/cupcake.jpg" },
        { id: 3, nome: "Donuts", imagem: "/images/donut.jpg" },
        { id: 4, nome: "Doces", imagem: "/images/doces.jpg" },
    ];

return(
    <div className="categorias-page">
        
        <h1>Categorias</h1>

        <div className="categorias-grid">

            {categorias.map((cat)=>(
                <div

                key= {cat.id}
                className="categoria-card"
                onClick={() => navigate(`/loja/${cat.nome}`)}
                >
                    <img src={cat.imagem}alt={cat.nome}/>
                    <p>{cat.nome}</p>

                </div>

            ))}

        </div>


    </div>
)

}

export default Categories
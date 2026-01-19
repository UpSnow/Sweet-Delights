import Button from "../../components/Button/Button"
import "./Details.css"

function Details(){
    return(
        <section>
            <div className="container">
                    <div className="product">
                        <div className="productCard">
                            <img src="" alt="" />
                            <div className="productCard2">
                                <h5>Brownie</h5>
                                <p>5,00</p>
                                <Button variant="tertiary">Carrinho de Compras</Button>                                
                            </div>
                        </div>
                        <div className="productDetails">
                            <h1>Brownie</h1>
                            <h2>Descrição</h2>
                            <p>Brownie de chocolate com uma textura macia e fudgy.</p>
                            <h2>Ingredientes</h2>
                            <p>Chocolate, açúcar, farinha, ovos, manteiga, cacau em pó</p>
                            <h2>Alégicos</h2>
                            <p>Contém: Ovos, Trigo</p>
                        </div>                     
                    </div>
            </div>
        </section>
    )
}

export default Details
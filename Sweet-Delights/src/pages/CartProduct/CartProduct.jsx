import "./CartProduct.css"

function CartProduct (){
    return (
        <div>
            <section>
                <h2>Carrinho</h2>
                <div>
                    <img src="" alt="" />
                    <h1>Brownie</h1>
                    <p>5,00</p>
                </div>
                <div>
                    <button>+</button>
                    <p>1</p>
                    <button>-</button>
                </div>
            </section>
            <section>
                <p>Forma de pagamento</p>
                <h1>SubTotal</h1>
                <div>
                    <form>
                        <label>
                            <img src="" alt="" />
                            <input type="radio" name="pagamento" value="1"/>
                        </label>
                        <label>
                            <img src="" alt="" />
                            <input type="radio" name="pagamento" value="2"/>
                        </label>
                        <label>
                            <img src="" alt="" />
                            <input type="radio" name="pagamento" value="3"/>
                        </label>
                        <button type="submit">Finalizar</button>
                    </form>
                </div>
            </section>       
        </div>
    )
}

export default CartProduct
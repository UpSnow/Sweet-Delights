import { useState } from "react";

import "./CartProduct.css"
import QuantityControl from "../../components/QuantityControl/QuantityControl"

function CartProduct (){
    const [quantity, setQuantity] = useState(1);
    const stock = 5;
    
    return (
        <div>
            <section>
                <h2>Carrinho</h2>
                <div>
                    <h1>Brownie</h1>
                    <p>5,00</p>
                </div>
                <div>
                    <h2>Produto X</h2>

                    <QuantityControl
                        value={quantity}
                        min={1}
                        max={stock}
                        onChange={setQuantity}
                    />
                </div>
            </section>
            <section>
                <p>Forma de pagamento</p>
                <h1>SubTotal</h1>
                <div>
                    <form>
                        <label>
                            <input type="radio" name="pagamento" value="1"/>
                        </label>
                        <label>

                            <input type="radio" name="pagamento" value="2"/>
                        </label>
                        <label>

                            <input type="radio" name="pagamento" value="3"/>
                        </label>
                        <button type="submit">Finalizar</button>
                    </form>
                </div>
            </section>       
        </div>
    )
}

export default CartProduct;
import { useState } from "react";

import "./CartProduct.css"
import QuantityControl from "../../components/QuantityControl/QuantityControl"
import { useCart } from "../../context/CartContext";
import {  useNavigate } from "react-router-dom";

import Button from "../../components/Button/Button";

function CartProduct() {
    const navigate = useNavigate()



    const { cart, removeFromCart, updateQuantity, total, clearCart } = useCart()
    const stock = 10;


    return (// preciso que me explique  essa parte do map e do cart.legnhts para que serve por qual motivo tenho que fazer
        <div>
            <h1>Carrinho</h1>
            {cart.length === 0 ? (
                <p>Carrinho está vazio</p>
            ) : (
                <div>
                    {cart.map(item => (
                        <div key={item.id}>
                            <img src={item.image} alt={item.image} width={80} />
                            <h3>{item.name}</h3>
                            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                <p>Quantidade:</p>

                                <QuantityControl
                                    value={item.quantity}
                                    min={0}
                                    max={stock}
                                    onChange={(newValue) =>
                                        updateQuantity(item.id, newValue)
                                    }
                                />
                            </div>
                            <p>Preço: R$ {item.price.toFixed(2)}</p>

                            <Button variant="secondary" onClick={() => removeFromCart(item.id)}>
                                Remover

                            </Button>
                            <hr />
                        </div>
                    ))}

                    <h2>Total: R$ {total.toFixed(2)}</h2>

                    <button onClick={clearCart}>
                        🧹 Limpar Carrinho
                    </button>

                    <button onClick={()=>navigate("/address")} style={{ marginLeft: "10px" }}>
                        💳 Finalizar Pedido
                    </button>


                </div>

            )}

            

        </div>

    );
};
export default CartProduct;
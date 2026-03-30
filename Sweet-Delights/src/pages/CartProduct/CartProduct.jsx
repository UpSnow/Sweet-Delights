import { useState } from "react";

import "./CartProduct.css"
import QuantityControl from "../../components/QuantityControl/QuantityControl"
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

import Button from "../../components/Button/Button";

import MainScrollContainer from "../../components/MainScrollContainer/MainScrollContainer";
import BackButton from "../../components/BackButton/BackButton";

function CartProduct() {
    const navigate = useNavigate()



    const { cart, removeFromCart, updateQuantity, total, clearCart } = useCart()
    const stock = 10;


    return (// preciso que me explique  essa parte do map e do cart.legnhts para que serve por qual motivo tenho que fazer
        <MainScrollContainer height="calc(100vh - 40px)" >
            <div className="cart-background">


                <div className="cart-container">
                    <BackButton variant="2"/>
                    <h1>Carrinho</h1>
                    {cart.length === 0 ? (
                        <p className="empty-msg">Carrinho está vazio 🧁</p>
                    ) : (
                        <div>
                            {cart.map(item => (
                                <div key={item.id} className="cart-item">
                                    <img src={item.image} alt={item.image} width={80} />
                                    <h3>{item.name}</h3>


                                    <div className="cart-item-info">
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
                                    <p className="price-tag">Preço: R$ {item.price.toFixed(2)}</p>

                                    <Button variant="secondary" onClick={() => removeFromCart(item.id)}>
                                        Remover

                                    </Button>
                                    <hr />
                                </div>
                            ))}

                            <div className="cart-summary">
                                <h2>Total: R$ {total.toFixed(2)}</h2>
                                <div className="cart-buttons">
                                    <Button onClick={clearCart} variant="tertiary">
                                        Limpar Carrinho
                                    </Button>
                                    <Button onClick={() => navigate("/address")}>
                                        Finalizar Pedido
                                    </Button>
                                </div>
                            </div>
                        </div>

                    )}


                </div>
            </div>
        </MainScrollContainer>

    );
};
export default CartProduct;
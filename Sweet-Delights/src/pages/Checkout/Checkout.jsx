import { useState } from "react";
import { useCart } from "../../context/CartContext";
import "./Checkout"

import Input from "../../components/Input/Input"

import Button from "../../components/Button/Button"

const Checkout = () => {

    const { cart, total, clearCart } = useCart();


    const [cardNumber, setCardNumber] = useState("");
    const [name, setName] = useState("");

    //O que esses estados fazem e para quer servem?
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);


    function handlePayment(e) {
        e.preventDefault(); // por qual motivo tenho que usar isso sempre?


        setTimeout(() => { // me explique o que essa parte faz
            setLoading(false)
            setSuccess(true)
            clearCart();
        }, 2000);

       
    }
     if (success) {// a logica é se success for true jogo uma mensagem de sucesso ?
            return (
                <div className="">
                    <h1>✅ Pagamento aprovado!</h1>
                    <p>Seu pedido foi realizado com sucesso 🎉</p>
                </div>
            );
        }




    return (
        <div className="">
            <h1>Checkout</h1>

            <h3>Total: R$ {total.toFixed(2)}</h3>

            <form onSubmit={handlePayment}>
                <Input
                    type={'text'}
                    placeholder="Nome no cartão"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required

                >

                </Input>

                <Input 
                    type="text"
                    placeholder="Número do cartão"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    required>
                </Input>
       
               <Button variant="secondary" type="submit" disabled= {loading}>  {/* Para que server o disabled? */}
                    {loading ? "Processando....." : "Paga"}
                </Button>


            </form>
        </div>

    );

}

export default Checkout
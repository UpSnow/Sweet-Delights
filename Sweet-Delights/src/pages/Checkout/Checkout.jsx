import { useState, useEffect} from "react";
import { useCart } from "../../context/CartContext";
import "./Checkout"
import {  useNavigate } from "react-router-dom";

import Input from "../../components/Input/Input"
import Button from "../../components/Button/Button"


import { formatCVV, formatCardNumber, formatExpiry, formatName } from "../../utils/validarCartao/mascara";
import { validarCampoCard, validarFormularioCard } from "../../utils/validarCartao/validarCartao";

const Checkout = () => {

    const { cart, total, clearCart } = useCart();

    const [dados, setDados] = useState({
        cardNumber: "",
        expiry: "",
        cvv: "",
        name: ""
    });

    //O que esses estados fazem e para quer servem?
    const [erros, setErros] = useState({});
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const navigate = useNavigate()

     useEffect(() => { // preciso que me explique essa parte e como funciona
    if (success) {
      const timer = setTimeout(() => {
        navigate("/");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [success]);


    function handleChange(e) { // preciso entender como a logica funciona, ja que passsamos no onChange

        const { name, value } = e.target

        let formattedValue = value;
        // 🔹 aplica máscara baseado no campo
        if (name === "cardNumber") {
            formattedValue = formatCardNumber(value);
        }

        if (name === "expiry") {
            formattedValue = formatExpiry(value);
        }

        if (name === "cvv") {
            formattedValue = formatCVV(value);
        }

        if (name === "name") {
            formattedValue = formatName(value);
        }

        const novosDados = { // como isso funciona?
            ...dados,
            [name]: formattedValue // por que tenho que usar o formattedValue
        }
        setDados(novosDados)

        const erros = validarCampoCard(name, novosDados)

        setErros((prev) => ({ // Como essa parte funciona?
            ...prev,
            [name]: erros
        }))

    }


    function handleSubmit(e) {
        e.preventDefault(); // por qual motivo tenho que usar isso sempre?

        const errosValidados = validarFormularioCard(dados);

        if (Object.keys(errosValidados).length > 0) {
            setErros(errosValidados);
            return;
        }
        setLoading(true);


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

            <form onSubmit={handleSubmit}>
                <Input

                    name="name"
                    placeholder="Nome no cartão"
                    value={dados.name}
                    onChange={handleChange}
                    erro={erros.name}
                    required

                />

               

                <Input
                    name="cardNumber"
                    placeholder="Número do cartão"
                    value={dados.cardNumber}
                    onChange={handleChange}
                    erro={erros.cardNumber}
                />
                <Input
                    name="expiry"
                    placeholder="Validade (MM/AA)"
                    value={dados.expiry}
                    onChange={handleChange}
                    erro={erros.expiry}
                />

                <Input
                    name="cvv"
                    placeholder="CVV"
                    value={dados.cvv}
                    onChange={handleChange}
                    erro={erros.cvv}
                />

                <Button variant="secondary" type="submit" disabled={loading}>  {/* Para que server o disabled? */}
                    {loading ? "Processando....." : "Paga"}
                </Button>


            </form>
        </div>

    );

}

export default Checkout
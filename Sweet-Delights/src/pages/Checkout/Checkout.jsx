import { useState, useEffect } from "react";
import { useCart } from "../../context/CartContext";
import "./Checkout.css"
import { useNavigate } from "react-router-dom";

import Input from "../../components/Input/Input"
import Button from "../../components/Button/Button"

import BackButton from "../../components/BackButton/BackButton";


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
            <div className="checkout-page">
                <div className="checkout-card payment-success">
                    <h1>✅ Pagamento aprovado!</h1>
                    <p>Seu pedido foi realizado com sucesso 🎉</p>
                    {/* Aqui você poderia colocar um botão "Voltar para Loja" */}
                </div>
            </div>
        );
    }




    return (
        <div className="checkout-page">
            <div className="checkout-card">
                <BackButton variant="2" />
                <h1>Checkout</h1>
                <div className="checkout-total">
                    Total: R$ {total.toFixed(2)}
                </div>

                <form onSubmit={handleSubmit} className="checkout-form">
                    <Input
                        label="Nome no cartão"
                        name="name"
                        placeholder="Como está no cartão"
                        value={dados.name}
                        onChange={handleChange}
                        erro={erros.name}
                    />

                    <Input
                        label="Número do cartão"
                        name="cardNumber"
                        placeholder="0000 0000 0000 0000"
                        value={dados.cardNumber}
                        onChange={handleChange}
                        erro={erros.cardNumber}
                    />

                    <div className="input-row">
                        <Input style ={{width: "135px"}}
                            label="Validade"
                            name="expiry"
                            placeholder="MM/AA"
                            value={dados.expiry}
                            onChange={handleChange}
                            erro={erros.expiry}
                        />
                        <Input style ={{width: "135px"}}
                            label="CVV"
                            name="cvv"
                            placeholder="123"
                            value={dados.cvv}
                            onChange={handleChange}
                            erro={erros.cvv}
                        />
                    </div>

                    <Button variant="secondary" type="submit" disabled={loading}>
                        {loading ? "Processando....." : "Pagar Agora"}
                    </Button>
                </form>
            </div>
        </div>

    );

}

export default Checkout
import React from "react";
import './Login.css'
import Input from "../../components/input/input";
import Button from "../../components/Button/Button";


const Login = () => {
    return (
        <div className="container">
            <h1>Login</h1>
            <Input
                label={"Email"}
                type="email"
                placeholder={"seu@email.com"}

            />
            <Input
                label={"Senha"}
                type="password"
                placeholder={"********"}

            />
            <Button variant="primary">Entrar</Button>

            <p className="login-text">
                Não tem uma conta?{" "}
                <a href="/cadastro" className="login-link">
                    Cadastre-se
                </a>
            </p>
        </div>

    )

}

export default Login
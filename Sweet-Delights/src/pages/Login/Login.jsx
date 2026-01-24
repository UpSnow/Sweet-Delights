import React from "react";
import "./Login.css";
import Input from "../../components/input/input";
import Button from "../../components/Button/Button";

const Login = () => {
  return (
    <div className="login-container">
      <img
        src="/src/assets/logo.png"
        alt="Logo"
        className="login-logo"
      />

      <h1 className="login-title">Login</h1>

      <Input
        label="Email"
        type="email"
        placeholder="seu@email.com"
      />

      <Input
        label="Senha"
        type="password"
        placeholder="********"
      />

      <Button className="login-button" variant="primary">
        Entrar
      </Button>

      <p className="login-text">
        Não tem uma conta?{" "}
        <a href="/cadastro" className="login-link">
          Cadastre-se
        </a>
      </p>
    </div>
  );
};

export default Login;

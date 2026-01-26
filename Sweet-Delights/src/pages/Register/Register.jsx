import React from "react";
import "./Register.css";
import Input from "../../components/input/input";
import Button from "../../components/Button/Button";
import LayoutStripes from "../../components/LayoutStripes/LayoutStripes";
import Logo from "../../assets/logo.png";

const Register = () => {
  return (
    <LayoutStripes image={Logo} title="Cadastro">
      <div className="register-form-grid">
        <Input
          label="Nome"
          type="text"
          placeholder="Seu nome completo"
        />

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

        <Input
          label="Confirmar senha"
          type="password"
          placeholder="********"
        />
      </div>

      <Button className="register-button" variant="primary">
        Criar conta
      </Button>

      <p className="register-text">
        Já tem uma conta?{" "}
        <a href="/login" className="register-link">
          Entrar
        </a>
      </p>
    </LayoutStripes>
  );
}
export default Register;

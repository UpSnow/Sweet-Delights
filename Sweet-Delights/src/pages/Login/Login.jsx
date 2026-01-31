import React from "react";
import "./Login.css";
import Input from "../../components/input/input";
import Button from "../../components/Button/Button";
import LayoutStripes from "../../components/LayoutStripes/LayoutStripes";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <LayoutStripes
      image={Logo}
      title="Login"
    >
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
        <Link to="/cadastro" className="login-link">
          Cadastre-se
        </Link >
      </p>
    </LayoutStripes>
  );
};

export default Login;

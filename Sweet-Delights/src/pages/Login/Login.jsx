import React, { useState } from "react";
import "./Login.css";
import Input from "../../components/input/input";
import Button from "../../components/Button/Button";
import LayoutStripes from "../../components/LayoutStripes/LayoutStripes";
import Logo from "../../assets/logo.png";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate, useLocation } from "react-router-dom";
import BackButton from "../../components/BackButton/BackButton";

const Login = () => {

  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const [form, setForm] = useState({
    email: "",
    senha: ""
  });

  // CORREÇÃO 1: Usar colchetes [] e inicializar como string
  const [erros, setErros] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
    // Limpa o erro quando o usuário volta a digitar
    if (erros) setErros("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // CORREÇÃO 2: Verifique se sua função login retorna true ou um objeto
    const success = login(form.email, form.senha);

    if (success) {
      // CORREÇÃO 3: replace: true para não voltar ao login com o botão voltar
      navigate(from, { replace: true });
    } else {
      setErros("Email ou senha inválida");
    }
  };

  const handleBack = () => {
  if (location.state?.from) {
    navigate("/home"); // 🔥 evita loop
  } else {
    navigate(-1); // só volta se não veio de rota protegida
  }
};

  return (
    <div>
      <BackButton/>
      <LayoutStripes image={Logo} title="Login">


        <form className="login-form" onSubmit={handleSubmit}>

          <Input
            name="email"
            label="Email"
            type="email"
            placeholder="seu@email.com"
            value={form.email}
            onChange={handleChange}
          />

          <Input
            name="senha"
            label="Senha"
            type="password"
            placeholder="********"
            value={form.senha}
            onChange={handleChange}
          />

          <Button className="login-button" variant="primary" type="submit">
            Entrar
          </Button>
        </form>

        {/* Exibe o erro apenas se ele existir */}
        {erros && <p style={{ color: "red", marginTop: "10px" }}>{erros}</p>}

        <p className="login-text">
          Não tem uma conta?{" "}
          <Link to="/cadastro" className="login-link">
            Cadastre-se
          </Link>
        </p>
      </LayoutStripes>
    </div>
  );
};

export default Login;
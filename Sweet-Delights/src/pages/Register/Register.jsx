import React, { useState } from "react";
import "./Register.css";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import LayoutStripes from "../../components/LayoutStripes/LayoutStripes";
import Logo from "../../assets/logo.png";

import BackButton from "../../components/BackButton/BackButton";

import { Link, useNavigate } from "react-router-dom";
import { validarCampo, validarFormulario } from "../../utils/validarFormulario";

import { useAuth } from "../../context/AuthContext";

const Register = () => {

  const navigate = useNavigate();


  const {register} = useAuth();

  const [form, setForm] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: ""
  }) 

  const [erros, setErros] = useState({})



  const handlechange = (e) => {

    const { name, value } = e.target

    const novosDados = {
      ...form,
      [name]: value
    }
    setForm(novosDados)


    const errosValidados = validarCampo(name, novosDados)

    setErros((prev) => ({
      ...prev,
      [name]: errosValidados
    }))
  }

  const handleSubmit = (e) => {

    e.preventDefault()
    const errosValidados = validarFormulario(form)

    if (Object.keys(errosValidados).length > 0) { 
      setErros(errosValidados)
      return
    }

    const result = register(form)

    if(!result.success){
      setErros({ email: result.message })
      return
    }

    clean()

    navigate("/login")

  }
  
  const clean = () => {

    setForm({
      nome: "",
      email: "",
      senha: "",
      confirmarSenha: ""
    })
  }


  return (

    <div>
      <BackButton/>
    
    <LayoutStripes image={Logo} title="Cadastro">
      
      <form className="register-form-grid" onSubmit={handleSubmit} >
        <Input
          id="nome"
          label="Nome"
          name="nome"
          type="text"
          value={form.nome}
          onChange={handlechange}
          placeholder="Seu nome completo"
          erro={erros.nome}
        />

        <Input
          id="email"
          name="email"
          label="Email"
          type="email"
          value={form.email}
          onChange={handlechange}
          placeholder="seu@email.com"
          erro={erros.email}
        />

        <Input
          id="senha"
          name="senha"
          label="Senha"
          type="password"
          value={form.senha}
          onChange={handlechange}
          placeholder="********"
          erro={erros.senha}
        />

        <Input
          id="confirmarSenha"
          name="confirmarSenha"
          label="Confirmar senha"
          type="password"
          value={form.confirmarSenha}
          onChange={handlechange}
          placeholder="********"
          erro={erros.confirmarSenha}
        />


        <Button className="register-button" variant="primary" type="submit" >
          Cadastrar
        </Button>
      </form>



      <p className="register-text">
        Já tem uma conta?{" "}
        <Link to="/login" className="register-link">
          Entrar
        </Link >
      </p>
    </LayoutStripes>
    </div>
  );
}
export default Register;

import React, { useState } from "react";
import "./Register.css";
import Input from "../../components/input/input";
import Button from "../../components/Button/Button";
import LayoutStripes from "../../components/LayoutStripes/LayoutStripes";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import validarFormulario from "../../utils/validarFormulario";

const Register = () => {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: ""
  }) // esse é a melhor forma de fazer form?

  const [erros, setErros] = useState({})

  const [touched, setTouched] = useState({})


  function handlechange(e) {

    const { name, value } = e.target // qual é a diferença entre {} [] ou sem nada?

    const novosDados = {
      ...form,
      [name]: value // por que tem que usar o [] nome name já no value não precisa?
    }
    setForm(novosDados)


    const errosValidados = validarFormulario(novosDados)
    setErros(errosValidados) // como isso funciona altomatico?
  }

  function handleBlur(e) { // me explique como funciona e o que faz e para que server ?

    const { name } = e.target

    setTouched({
      ...touched,
      [name]: true
    })
  }

  const handleSubmit = (e) => {

    e.preventDefault()// pra que isso?
    const errosValidados = validarFormulario(form)

    if (Object.keys(errosValidados).length > 0) { // o que essa parte faz? o que seria essa codição?
      setErros(errosValidados)
      return
    }
    clean()





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
          onBlur={handleBlur}
          erro={touched.nome && erros.nome} // o que seria o onBlur?
        />

        <Input
          id="email"
          name="email"
          label="Email"
          type="email"
          value={form.email}
          onChange={handlechange}
          placeholder="seu@email.com"
          onBlur={handleBlur}
          erro={touched.email && erros.email}
        />

        <Input
          id="senha"
          name="senha"
          label="Senha"
          type="password"
          value={form.senha}
          onChange={handlechange}
          placeholder="********"
          onBlur={handleBlur}
          erro={touched.senha && erros.senha}
        />

        <Input
          id="confirmarSenha"
          name="confirmarSenha"
          label="Confirmar senha"
          type="password"
          value={form.confirmarSenha}
          onChange={handlechange}
          placeholder="********"
          onBlur={handleBlur}
          erro={touched.confirmarSenha && erros.confirmarSenha}
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
  );
}
export default Register;

import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

import { validarCampoAddress, validarFormularioAddress } from "../../utils/validarEndereco/addressValidators";

import { formatCep } from "../../utils/validarEndereco/masksAddress";
import { buscarCEP } from "../../api/cep"
import BackButton from "../../components/BackButton/BackButton";

const Address = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    cep: "",
    rua: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: ""
  });

  const [erros, setErros] = useState({});
  const [loadingCep, setLoadingCep] = useState(false);
  const [success, setSuccess] = useState(false);

  const debounceRef = useRef(null); 

  const cepValido = form.cep.replace(/\D/g, "").length === 8;

  const handleChange = (e) => {

    const { name, value } = e.target;

    let formattedValue = value;

    if (name === "cep") {
      formattedValue = formatCep(value)
    }


    const novosDados = {
      ...form,
      [name]: formattedValue
    }

    setForm(novosDados);




    const erro = validarCampoAddress(name, novosDados)


    setErros(prev => ({
      ...prev,
      [name]: erro
    }));


    if (name === "cep") {
      clearTimeout(debounceRef.current);


      debounceRef.current = setTimeout(async () => { //preciso entender essa logica toda e como funciona

        const cleanCep = formattedValue.replace(/\D/g, "");

        if (cleanCep.length !== 8) return;

        setLoadingCep(true);

        setErros(prev => ({
          ...prev,
          cep: ""
        }));

        const data = await buscarCEP(cleanCep); //preciso entender essa logica toda e como funciona

        if (data && !data.erro) {
          const dadosAtualizados = {
            ...novosDados,
            rua: data.logradouro || "",
            bairro: data.bairro || "",
            cidade: data.localidade || "",
            estado: data.uf || ""
          };

          setForm(dadosAtualizados);

          const novosErros = validarFormularioAddress(dadosAtualizados);
          setErros(novosErros);

        } else {
          setErros(prev => ({
            ...prev,
            cep: "CEP não encontrado"
          }));
        }

        setLoadingCep(false);

      }, 500);
    }



  }



  const handleSubmit = (e) => {
    e.preventDefault();

    const errosValidados = validarFormularioAddress(form);

    if (Object.keys(errosValidados).length > 0) {
      setErros(errosValidados);
      return;
    }

    setSuccess(true);
    }

  useEffect(() => {
      if (success) {
        const timer = setTimeout(() => {
          navigate("/checkout"); // muda a rota aqui
        }, 2000);

        return () => clearTimeout(timer);
      }
    }, [success, navigate]);

    if (success) {
      return (
        <div>
          <h1>✅ Endereço salvo!</h1>
          <p>Redirecionando...</p>
        </div>
      );
    }
  

  return (
    <div>
      <BackButton variant="2"/>
      <h1>Endereço</h1>

      <form onSubmit={handleSubmit}>

        <Input
          name="cep"
          placeholder="CEP"
          value={form.cep}
          onChange={handleChange}
          erro={erros.cep}
        />

        {loadingCep && <p>Buscando CEP...</p>}

        <Input
          name="rua"
          placeholder="Rua"
          value={form.rua}
          onChange={handleChange}
          erro={erros.rua}
        />

        <Input
          name="numero"
          placeholder="Número"
          value={form.numero}
          onChange={handleChange}
          erro={erros.numero}
        />

        <Input
          name="bairro"
          placeholder="Bairro"
          value={form.bairro}
          onChange={handleChange}
          erro={erros.bairro}
        />

        <Input
          name="cidade"
          placeholder="Cidade"
          value={form.cidade}
          onChange={handleChange}
          erro={erros.cidade}
          readOnly={cepValido}
        />

        <Input
          name="estado"
          placeholder="Estado"
          value={form.estado}
          onChange={handleChange}
          erro={erros.estado}
          readOnly={cepValido}
        />

        <Button type="submit">
          Salvar endereço
        </Button>

      </form>
    </div>


  )

}

export default Address;
import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import "./Profile.css";
import { useNavigate } from "react-router-dom";

import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import MainScrollContainer from "../../components/MainScrollContainer/MainScrollContainer";
import BackButton from "../../components/BackButton/BackButton";

import { validarCampo, validarFormulario } from "../../utils/validarFormulario";
const Profile = () => {
    const { user, updateUser, deleteUser } = useAuth();

    const [form, setForm] = useState({
        nome: user?.nome || "",
        email: user?.email || "",
        senha: user?.senha || "",
        confirmarSenha: user?.senha || ""
    })
    const [isEditing, setIsEditing] = useState(false);
    const [status, setStatus] = useState({ type: "", message: "" });
    const [erros, setErros] = useState({})

    const navigate = useNavigate();


    const handleChange = (e) => {
        const { name, value } = e.target;

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






    };

    const handleSave = async (e) => {
        e.preventDefault();

        const errosValidados = validarFormulario(form)
        console.log("O que tem dentro de errosValidados:", errosValidados);
        // Verifica se existe pelo menos UMA mensagem de erro que não seja vazia
        const temErroReal = Object.values(errosValidados).some(msg => msg !== "" && msg !== undefined);

        if (temErroReal) {
            setErros(errosValidados)
            return
        }


        const result = updateUser(form)

        setStatus({ type: result.success ? "success" : "error", message: result.message })


        setTimeout(() => setStatus({ type: "", message: "" }), 3000);
    }

    const handleDelete = () => {
        const confirmDelete = window.confirm(
            "ATENÇÃO: Isso apagará sua conta permanentemente. Confirmar?"
        );

        if (confirmDelete) {
            deleteUser();

            // limpa formulário
            setForm({
                nome: "",
                email: "",
                senha: "",
                confirmarSenha: ""
            });

            // redireciona (home ou login)
            navigate("/"); // ou "/login"
        }
    };

    const handleCancel = () => {
        setIsEditing(false)
        setErros({})

        setForm({
            nome: user?.nome || "",
            email: user?.email || "",
            senha: user?.senha || "",
            confirmarSenha: user?.senha || ""
        });

    }

    return (

        <div className="profile-page">
            <div className="profile-card">
                
                <MainScrollContainer height="calc(80vh - 40px)">
                    <BackButton variant="2" className="back-bnt"/>
                    
                    <div className="profile-header">
                        <div className="avatar-circle">
                            {user?.nome?.charAt(0).toUpperCase()}
                        </div>
                        <h1>{isEditing ? "Editando Perfil" : `Olá ${user?.nome}!`}</h1>
                        <p>{user?.email}</p>
                    </div>

                    {status.message && (
                        <div className={`alert ${status.type}`}>{status.message}</div>
                    )}


                    <form onSubmit={handleSave}>

                        <div className="input-group">

                            <Input
                                label="Nome Completo"
                                name="nome"
                                value={form.nome}
                                onChange={handleChange}
                                disabled={!isEditing}
                                erro={erros.nome}
                            />
                        </div>

                        <div className="input-group">
                            <Input
                                label="E-mail"
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={handleChange}
                                disabled={!isEditing}
                                erro={erros.email}
                            />
                        </div>
                        <div className="input-group">
                            <Input
                                label="Senha"
                                name="senha"
                                type="password"
                                value={form.senha}
                                onChange={handleChange}
                                disabled={!isEditing}
                                erro={erros.senha}
                            />
                        </div>
                        <div className="input-group">
                            <Input
                                label="Confirmar Senha"
                                name="confirmarSenha"
                                type="password"
                                value={form.confirmarSenha}
                                onChange={handleChange}
                                disabled={!isEditing}
                                erro={erros.confirmarSenha}
                            />
                        </div>
                        <div className="profile-actions">
                            {!isEditing ? (
                                <Button type="button" className="btn-edit" onClick={() => setIsEditing(true)}>
                                    Editar Dados
                                </Button>
                            ) : (
                                <div>
                                    <Button type="submit" className="btn-save">Salvar</Button>
                                    <Button
                                        type="button"
                                        className="btn-cancel"
                                        onClick={handleCancel}>
                                        Cancelar
                                    </Button>
                                </div>

                            )}

                        </div>

                    </form>

                    <hr />
                    <div className="danger-zone">
                        <h3>Zona de Perigo</h3>
                        <p>Ao excluir sua conta, você perderá todos os seus pedidos e dados.</p>
                        <button onClick={handleDelete} className="btn-delete">Excluir minha conta</button>
                    </div>

                </MainScrollContainer>
            </div>
        </div>

    )



}

export default Profile
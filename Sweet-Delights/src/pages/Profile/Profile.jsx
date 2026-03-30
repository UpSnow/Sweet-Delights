import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import "./Profile.css";
import { useNavigate } from "react-router-dom";

import Input from "../../components/input/input";
import Button from "../../components/Button/Button";
import MainScrollContainer from "../../components/MainScrollContainer/MainScrollContainer";
import BackButton from "../../components/BackButton/BackButton";


const Profile = () => {
    const { user, updateUser, deleteUser } = useAuth();

    const [form, setForm] = useState({
        nome: user?.nome || "",
        email: user?.email || "",
        senha: user?.senha || ""
    })
    const [isEditing, setIsEditing] = useState(false);
    const [status, setStatus] = useState({ type: "", message: "" });

    const navigate = useNavigate();


    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(
            prev => ({ ...prev, [name]: value })
        );
    };

    const handleSave = async (e) => {
        e.preventDefault();

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
                senha: ""
            });

            // redireciona (home ou login)
            navigate("/"); // ou "/login"
        }
    };

    return (
        <MainScrollContainer height="calc(100vh - 40px)">
        <div className="profile-page">
            <div className="profile-card">
                <div className="profile-header">
                    <div className="avatar-circle">
                        {user?.nome?.charAt(0).toUpperCase()}{/* o que isso aqui faz?*/}
                    </div>
                    <h1>{isEditing ? "Editando Perfil" : `Olá ${user?.nome}!`}</h1>
                    <p>{user?.email}</p>
                </div>

                {status.message && (
                    <div className={`alert ${status.type}`}>{status.message}</div>
                )} {/* o que essa parte faz*/}


                <form onSubmit={handleSave}>

                    <div className="input-group">
                        
                        <Input
                            label="Nome Completo"
                            name="nome"
                            value={form.nome}
                            onChange={handleChange}
                            disabled={!isEditing}
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
                        />
                    </div>
                    <div className="input-group">
                        <Input
                            label="senha"
                            name="senha"
                            type="password"
                            value={form.senha}
                            onChange={handleChange}
                            disabled={!isEditing}
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
                                    onClick={() => setIsEditing(false)}>
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


            </div>
        </div>
        </MainScrollContainer>
    )



}

export default Profile
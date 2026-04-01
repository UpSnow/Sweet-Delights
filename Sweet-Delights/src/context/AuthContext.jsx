import { createContext, useContext, useState, useEffect, useMemo, useCallback } from "react";



const AuthContext = createContext();



export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const userStorage = localStorage.getItem("user");

        if (userStorage) {
            setUser(JSON.parse(userStorage))
        }
        setLoading(false)

    }, [])

    const login = useCallback((email, senha) => {

        const users = JSON.parse(localStorage.getItem("users")) || [];

        const userFound = users.find((u) => u.email === email && u.senha === senha)

        if (userFound) {
            setUser(userFound);
            localStorage.setItem("user", JSON.stringify(userFound))
            return true
        }

        return false
    }, [])

    const register = useCallback((newUser) => {

        const users = JSON.parse(localStorage.getItem("users")) || [];

        const exists = users.find((u) => u.email === newUser.email);

        if (exists) {
            return { success: false, message: "Email já cadastrado" }
        }

        const updatedUsers = [...users, newUser];

        localStorage.setItem("users", JSON.stringify(updatedUsers));

        return { success: true }

    }, [])

    const updateUser = useCallback((updatedData) =>{ 
        try{
            const allUsers = JSON.parse(localStorage.getItem("users")) || [];

            if (updatedData.email !== user.email) {
            const emailExists = allUsers.some(u => u.email === updatedData.email);
            if (emailExists) return { success: false, message: "Este e-mail já está em uso." };
        }

            const updatedUsersList = allUsers.map((u) => 
                u.email === user.email ?{...u, ...updatedData}: u
        );

        localStorage.setItem("users", JSON.stringify(updatedUsersList));

        const newUserData = {...user, ...updatedData};

        setUser(newUserData)
        localStorage.setItem("user", JSON.stringify(newUserData));
        return { success: true, message: "Perfil atualizado com sucesso!" };

        } catch(error){
            return { success: false, message: "Erro ao atualizar dados." };
        }
    },[user])

    const logout = useCallback(() => {
        setUser(null)
        localStorage.removeItem("user")

    }, [])

    const deleteUser = useCallback(() => { 
     
        const allUsers = JSON.parse(localStorage.getItem("users")) || [];

      
        const updatedUsers = allUsers.filter(u => u.email !== user?.email);

        
        localStorage.setItem("users", JSON.stringify(updatedUsers));

        
        setUser(null);
        localStorage.removeItem("user");

        alert("Sua conta foi excluída com sucesso!");

    }, [user])

    const isAuthenticated = !!user;

    const value = useMemo(() => ({
        user,
        setUser,
        login,
        register,
        logout,
        isAuthenticated,
        deleteUser,
        updateUser,
        loading
    }), [user, login, register, logout, isAuthenticated, deleteUser,loading, updateUser]);
    return (
        <AuthContext.Provider value={value} > {loading ? (
            <p>Carregando dado...</p>
        ) : (children)}
        </AuthContext.Provider>
    )




}
export const useAuth = () => {

    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth deve ser usado dentro de AuthProvider')
    }

    return context

}

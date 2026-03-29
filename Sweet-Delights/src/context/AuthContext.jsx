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

    const logout = useCallback(() => {
        setUser(null)
        localStorage.removeItem("user")

    }, [])

    const isAuthenticated = !!user;

    const value = useMemo(() => ({
        user,
        setUser,
        login,
        register,
        logout,
        isAuthenticated
    }), [user, login, register, logout, isAuthenticated]);
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

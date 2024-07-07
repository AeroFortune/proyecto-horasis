import { createContext, useContext, useState } from "react";
import axiosInstance from "./axiosIntercept";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [error, setError] = useState(false)

    const getUserData = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axiosInstance.get('/auth/profile');
            setUser(response.data);
            console.log(response.data);
        } catch (error) {
            console.log(error)
            setError(error.response.data.message)
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null)
    }

    return <AuthContext.Provider value={{ user, getUserData, error, logout }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
    return useContext(AuthContext)
}

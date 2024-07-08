import { useEffect } from "react";
import { useAuth } from "./auth"
import { Navigate } from "react-router-dom"

export const PrivateRoute = ({children}) => {

    const token = localStorage.getItem('token');
    const auth = useAuth()

    useEffect(() => {
        if (token){
            auth.getUserData()
        }
    },[])

    if (!token){
        return <Navigate to='/login' />
    }

    

    return children
}

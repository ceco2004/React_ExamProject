import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Navigate } from "react-router-dom";


export default function Logout(){

    const authContext = useContext(AuthContext);
    const accessToken = authContext.accessToken;

    useEffect(() =>{
        authContext.onLogout(accessToken);
    }, [])

   
    return <Navigate to='/' />
}
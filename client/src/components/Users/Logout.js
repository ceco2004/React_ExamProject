import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";


export default function Logout(){
    const authContext = useContext(AuthContext);
    const navigate = useNavigate();
    
    authContext.onLogout(authContext.accessToken);
    useEffect(() => {
        navigate("/");
    }, [])

}
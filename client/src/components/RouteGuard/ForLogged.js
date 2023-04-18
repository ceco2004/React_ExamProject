import { Navigate } from "react-router-dom";

export default function ForLogged({isLogged, redirect}){


    if(!isLogged){
        return <Navigate to="/" replace />;
    }

    return redirect;

}
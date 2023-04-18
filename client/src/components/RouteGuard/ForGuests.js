import { Navigate } from "react-router-dom";

export default function ForGuests({isLogged, redirect}){


    if(isLogged){
        return <Navigate to="/" replace />;
    }

    return redirect;

}
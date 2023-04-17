import { createContext, useState } from "react";
import * as userServices from '../services/userServices';

export const AuthContext = createContext();


export function AuthContextProvider({ children }) {

    let [context, setContext] = useState({});

    async function onLogin(userData){
        userServices.Login(userData).then(result => {
            setContext(result)
        });
    }


    async function onRegister(userData){
        userServices.Register(userData).then(result => {
            setContext(result)
        });
    }


    async function onLogout(){
        await userServices.Logout(context.accessToken);
        setContext({});
    }



    let contextData = {
        ...context,
        onLogin,
        onRegister,
        onLogout

    }


    return (
        <AuthContext.Provider value={contextData} >
            {children}
        </AuthContext.Provider>
    )
}
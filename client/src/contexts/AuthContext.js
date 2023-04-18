import { createContext, useState } from "react";
import * as userServices from '../services/userServices';

export const AuthContext = createContext();


export function AuthContextProvider({ children }) {

    const [context, setContext] = useState({});

    async function onLogin(userData) {
        userServices.login(userData)
        .then(result => {
           
            if(result.error){
                return result;
            }
            setContext(result)
        });
    }


    async function onRegister(userData) {
        userServices.register(userData)
        .then(result => {
            setContext(result)
        });
    }


    async function onLogout(accessToken) {
    
         await userServices.logout(accessToken)
         .then(() => setContext({}));
    }



    const contextData = {
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
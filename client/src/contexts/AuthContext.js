import { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import * as userService from '../services/userService';

export const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    const [auth, setAuth] = useLocalStorage('auth', {});
    const userLogin = (authData) => {
        setAuth(authData);

        userService.create({ budget: authData.budget })
            .then(result => console.log(result));
    };

    const userLogout = () => {
        setAuth({});
    };

    return <AuthContext.Provider value={{
        user: auth,
        userLogin,
        userLogout,
        isAuthenticated: !!auth.accessToken,
    }}>
        {children}
    </AuthContext.Provider>;
};
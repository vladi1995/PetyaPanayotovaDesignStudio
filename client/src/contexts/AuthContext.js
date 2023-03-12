import { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

import * as userService from '../services/userService';

export const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    const [auth, setAuth] = useLocalStorage('auth', {});
    const [userInfo, setUserInfo] = useState({});

    const userLogin = (authData) => {
        setAuth(authData);
        userService.getAll()
            .then(result => setUserInfo(result.filter(x => x._ownerId === authData._id)));
    };

    const userEdit = (userEdittedInfo) => {
        setUserInfo(state => state.map(x => x._id === userEdittedInfo._id ? userEdittedInfo : x));
    };

    const userLogout = () => {
        setAuth({});
        setUserInfo({});
    };

    return <AuthContext.Provider value={{
        user: auth,
        userLogin,
        userLogout,
        userInfo,
        userEdit,
        isAuthenticated: !!auth.accessToken,
    }}>
        {children}
    </AuthContext.Provider >;
};
import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthContextProvider = ({children}) => {
    const [authData, setAuthData] = useState(null);
    const login = (user, token) => {
        setAuthData({user, token});
    };

    const logout = () => {
        setAuthData(null);
    }

    return (
        <AuthContext.Provider value={{authData, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}
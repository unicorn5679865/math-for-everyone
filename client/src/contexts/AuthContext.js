import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

export const AuthContext = createContext(null);

export const AuthContextProvider = ({children}) => {
    const [authData, setAuthData] = useState(JSON.parse(localStorage.getItem("auth")));
    const navigate= useNavigate();

    useEffect(() => {
        localStorage.setItem("auth", JSON.stringify(authData));

    }, [authData]);

    const login = (user) => {
        setAuthData({user});
    };

    const logout = () => {
        navigate("/signin")
        setAuthData(null);
    };

    return (
        <AuthContext.Provider value={{authData, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}
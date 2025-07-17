import { createContext, useState, type ReactNode } from "react";

export const AuthContext = createContext({
    loggedIn: false,
    setLoggedIn: (_loggedIn: boolean) => {}
});

export const AuthContextProvider = ({children}: {children: ReactNode}) => {
    const [loggedIn, setLoggedIn] = useState(sessionStorage.getItem("token") === "123");
    return (
        <AuthContext.Provider value={{loggedIn, setLoggedIn}}>
            {children}
        </AuthContext.Provider>
    )
}
import React from 'react'
import { createContext, useState, useContext, ReactNode } from 'react'

interface User {
    username: string;
    password: string;
}

interface UserContextType {
    isSigned: boolean;
    setUser: (isSigned: boolean) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode}) => {
    const [isSigned, setUser] = useState(false);

    return (
        <UserContext.Provider value={{ isSigned, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    const context = useContext(UserContext);

    if (context === undefined) {
        throw new Error("useUser must be used within a UserProvider");
    }

    return context;
}
"use client";
import React, {
    createContext,
    useContext,
    useState,
    ReactNode,
    useEffect,
    useRef,
} from "react";

import axios from "axios";

const SERVER_URL = "";

const initialUser = {
    id: "",
    email: "",
    password: "",
    name: "",
    surname: "",
    role: "",
    calendly_link: "",
    image: "",
    description: "",
    token: "",
    refreshToken: "",
};

export interface User {
    id: string;
    email: string;
    password: string;
    name: string;
    surname: string;
    role: string;
    calendly_link?: string;
    image: string;
    description: string;
    token: string;
    refreshToken: string;
}

interface UserContextType {
    user: User;
    registerUser: (
        email: string,
        name: string,
        surname: string,
        password: string
    ) => Promise<void>;
    loginUser: (email: string, password: string) => Promise<void>;
    LogoutUser: () => void;
}

export const UserContext = createContext<UserContextType | undefined>(
    undefined
);

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User>(initialUser);

    const registerUser = async (
        email: string,
        name: string,
        surname: string,
        password: string
    ) => {
        console.log("Registering User");
        try {
            //   const res = await axios.post(`${SERVER_URL}` + "/register", {
            //     email: string
            //     password: password,
            //   });
        } catch (err) {
            console.log("error registering", err);
        }
    };

    const loginUser = async (email: string, password: string) => {
        console.log("Logging User");
        try {
            //   const res = await axios.post(`${SERVER_URL}` + "/login", {
            //     username: username,
            //     password: password,
            //   });
            // console.log(data.accessToken);
        } catch (err) {
            console.log("error loggin in", err);
        }
    };

    const LogoutUser = () => {
        setUser(initialUser);
    };

    const valueToShare = {
        user,
        registerUser,
        loginUser,
        LogoutUser,
    };

    return (
        <UserContext.Provider value={valueToShare}>{children}</UserContext.Provider>
    );
};

// Custom hook for using the User context
const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUser must be used within a BooksProvider");
    }
    return context;
};

export { AuthProvider, useUser };
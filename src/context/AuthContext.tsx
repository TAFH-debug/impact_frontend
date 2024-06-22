"use client";
import React, {
    createContext,
    useContext,
    useState,
    ReactNode,
    useEffect,
    useRef,
} from "react";
import { useRouter } from "next/navigation";

import axios from "axios";
import axiosInstance from "@/axiosInstance";


const initialUser = {
    id: "",
    email: "",
    name: "",
    surname: "",
    role: "",
    accessToken: "",
    refreshToken: "",
};

export interface User {
    id: string;
    email: string;
    name: string;
    surname: string;
    role: string;
    calendly_link?: string;
    image?: string;
    description?: string;
    accessToken: string;
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
    const router = useRouter();
    const [user, setUser] = useState<User>(initialUser);

    const registerUser = async (
        email: string,
        name: string,
        surname: string,
        password: string
    ) => {
        console.log("Registering User");
        try {
            const res = await axiosInstance.post("/register", {
                email: email,
                password: password,
                name: name,
                surname: surname,
            });
            setUser({
                id: res.data._id,
                email: email,
                name: name,
                surname: surname,
                role: "user",
                accessToken: res.data.accessToken,
                refreshToken: res.data.refreshToken,
            })
            router.push("/")
            // console.log(res);
        } catch (err) {
            console.log("error registering", err);
        }
    };

    const loginUser = async (email: string, password: string) => {
        console.log("Logging User");
        try {
            const res = await axiosInstance.post("/login", {
                email: email,
                password: password,
            });
            setUser({
                id: res.data.user._id,
                email: email,
                name: res.data.user.name,
                surname: res.data.user.surname,
                role: "user",
                accessToken: res.data.accessToken,
                refreshToken: res.data.refreshToken,
            })
            router.push("/profile")
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

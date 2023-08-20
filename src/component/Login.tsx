"use client";

import { useContext } from "react";
import { AuthContext } from "@/app/auth-provider";


export default function Login() {
    const { setUser } = useContext(AuthContext);

    const handleFetchData = async () => {
        const response = await fetch("https://dummyjson.com/users/1");
        if (response.status == 200) {
            const data = await response.json();
            setUser(data);
        }
    };

    return (
        <button onClick={handleFetchData}>Login Action</button>
    );
}

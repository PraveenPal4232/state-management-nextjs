
"use client";

import { useContext } from "react";
import { AuthContext } from "@/app/auth-provider";

export default function User() {
    const { user } = useContext(AuthContext);
    return (
        <>
            {user && <h2 className="text-xl mb-16">{`Welcome back ${user?.firstName}:)`}</h2>}
        </>
    )
}

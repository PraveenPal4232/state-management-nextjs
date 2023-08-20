"use client";

import { AuthContext } from "@/app/auth-provider";
import Link from "next/link";
import { useContext } from "react";

const userInfo = {
  id: "1",
  name: "Praveen Pal",
  email: "praveenpal4232@gmail.com",
};

export default function Header() {
  const { user, setUser } = useContext(AuthContext);
  return (
    <header className="flex flex-col items-center justify-between p-4 m-4">
      <ul className="flex">
        <li className="p-4">
          <Link href="/">Home</Link>
        </li>
        <li className="p-4">
          <Link href="/about">About Us</Link>
        </li>
        <li className="p-4">
        {user ? (
        <button onClick={() => setUser(null)}>Logout</button>
      ) : (
        <Link href="/login"><button className="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400">Login</button></Link>
      )}
        </li>
      </ul>
     
    </header>
  );
}

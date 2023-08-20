"use client";

import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext<any>({
  user: {},
  setUser: (user: any) => {},
});

export default function ThemeProvider({ children }: any) {
  const [user, setUser] = useState<any>(null);
  const value: any = { user, setUser };
  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
}

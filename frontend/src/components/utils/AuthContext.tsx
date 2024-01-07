"use client";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({});

interface Props {
  children: React.ReactNode;
}

export const AuthContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState<string | undefined>();

  useEffect(() => {
    const user = localStorage.getItem("userToken");
    if (user) {
      setUser(() => user);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);

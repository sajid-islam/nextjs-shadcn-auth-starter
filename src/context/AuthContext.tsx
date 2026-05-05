"use client";
import { createContext, ReactNode, useContext } from "react";

const AuthContext = createContext(null);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  return <AuthContext.Provider value={null}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};

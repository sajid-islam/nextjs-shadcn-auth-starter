"use client";
import api from "@/lib/axios/axios";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface IUser {
  name: string;
  email: string;
  isActive: boolean;
  provider: "email" | "google" | "github" | string;
  verified_email: boolean;
  social_links: [platform: string, link: string];
  createdAt: string;
  updatedAt: string;
}

interface AuthContextType {
  user: IUser | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; message?: string }>;
  register: (
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
    agreedTerms: boolean
  ) => Promise<{ success: boolean; message?: string }>;
}

const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchUser = async () => {
      setIsLoading(true);
      try {
        const res = await api.get("/users/me");
        setUser(res.data);
      } catch {
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUser();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const res = await api.post("/auth/login", { email, password });
      if (!res.data.success) {
        return { success: false, message: res.data.message || "Login failed" };
      }
      const userRes = await api.get("/users/me");
      setUser(userRes.data);
      return { success: true };
    } catch (error: any) {
      return { success: false, message: error.response?.data?.message || "An error occurred" };
    }
  };

  const register = async (
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
    agreedTerms: boolean
  ) => {
    try {
      const res = await api.post("/auth/register", {
        name,
        email,
        password,
        confirmPassword,
        agreedTerms,
      });
      if (!res.data.success) {
        return { success: false, message: res.data.message || "Sign up failed" };
      }
      const userRes = await api.get("/users/me");
      setUser(userRes.data);
      return { success: true };
    } catch (error: any) {
      return { success: false, message: error.response?.data?.message || "An error occurred" };
    }
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};

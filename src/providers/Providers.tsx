"use client";
import AuthProvider from "@/context/AuthContext";
import { ReactNode } from "react";

const Providers = ({ children }: { children: ReactNode }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default Providers;

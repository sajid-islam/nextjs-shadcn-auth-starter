import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Next.js - Shadcn - Auth Starter Application", //PROJECT_SETUP_TODO: Replace Project Title
  description:
    "A modern starter template built with Next.js, shadcn/ui, and authentication-ready architecture.", //PROJECT_SETUP_TODO: Replace Project Description
  icons: {
    icon: "/logo-with-bg.png", //PROJECT_SETUP_TODO: Replace Project Logo
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} h-full antialiased`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}

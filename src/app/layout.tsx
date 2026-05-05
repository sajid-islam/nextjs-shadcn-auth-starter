import Providers from "@/providers/Providers";
import type { Metadata } from "next";
import { Manrope, Newsreader } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
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
    <html
      lang="en"
      className={`${manrope.className} ${newsreader.variable} root-scroller h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

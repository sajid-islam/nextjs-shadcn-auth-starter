import Link from "next/link";
import React from "react";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-background/95 supports-backdrop-filter:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between">
          <div className="flex gap-6 md:gap-10">
            <Link className="flex items-center space-x-2" href="/">
              <span className="inline-block font-bold">Main Site</span>
            </Link>
          </div>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <a
              href="/dashboard"
              className="hover:text-foreground/80 text-foreground/60 transition-colors"
            >
              Dashboard
            </a>
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t py-6 md:px-8 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-muted-foreground text-center text-sm leading-loose md:text-left">
            Built with ❤️ by Sajid
          </p>
        </div>
      </footer>
    </div>
  );
}

"use client";
import { Home } from "lucide-react";
import { useRouter } from "next/navigation";
import type { ReactNode } from "react";

export function AuthPageShell({ children }: { children: ReactNode }) {
  const router = useRouter();
  return (
    <main className="bg-background relative isolate flex min-h-screen items-center justify-center overflow-hidden px-4 py-12">
      <div className="pointer-events-none absolute inset-0">
        <div className="from-primary/20 to-secondary/20 absolute inset-0 bg-linear-to-br via-transparent" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(107, 114, 128, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(107, 114, 128, 0.15) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>
      <div className="relative z-10 w-full max-w-md">
        <button
          onClick={() => router.push("/")}
          className="bg-primary/85 hover:bg-primary absolute top-6 -left-8 rounded-l-md p-1.5 text-white hover:cursor-pointer"
        >
          <Home size={20} />
        </button>
        {children}
      </div>
    </main>
  );
}

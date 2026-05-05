"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import api from "@/lib/axios/axios";
import { AlertCircle, Loader2, Lock, Mail } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await api.post("/auth/login", { email, password });

      if (!res.data.success) {
        setError(res.data.message || "Login failed");
        return;
      }

      router.push("/dashboard");
    } catch (error: any) {
      setError(error.response.data.message || "An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="border-border bg-card rounded-lg border p-6 shadow-sm md:p-8">
      <div className="mb-6">
        <p className="text-primary text-sm font-semibold">Welcome Back</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">Sign In</h1>
        <p className="text-muted-foreground mt-2 text-sm">
          Enter your email and password to access your dashboard
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <div className="relative">
            <Mail className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              required
              className="pl-10"
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <Link href="#" className="text-primary text-xs font-semibold hover:underline">
              Forgot password?
            </Link>
          </div>
          <div className="relative">
            <Lock className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
              required
              className="pr-10 pl-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              disabled={loading}
              className="text-muted-foreground hover:text-foreground absolute top-1/2 right-3 -translate-y-1/2 disabled:cursor-not-allowed"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        {error && (
          <div className="border-destructive/50 bg-destructive/10 text-destructive flex items-start gap-2 rounded-lg border px-3 py-2 text-sm">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
            <p>{error}</p>
          </div>
        )}

        <Button
          type="submit"
          disabled={loading}
          className="h-10 w-full gap-2 rounded-lg font-semibold"
        >
          {loading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Signing in...
            </>
          ) : (
            "Sign In"
          )}
        </Button>
      </form>

      <p className="text-muted-foreground mt-4 text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link href="/sign-up" className="text-primary font-semibold hover:underline">
          Sign up
        </Link>
      </p>
    </section>
  );
}

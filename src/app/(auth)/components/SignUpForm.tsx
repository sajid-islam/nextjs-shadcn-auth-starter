"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import api from "@/lib/axios/axios";
import { AlertCircle, Loader2, Lock, Mail, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function SignUpForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!agreeToTerms) {
      setError("Please agree to the terms and conditions");
      return;
    }

    setLoading(true);

    try {
      const res = await api.post("/auth/register", { name, email, password, confirmPassword });

      if (!res.data.success) {
        setError(res.data.message || "Sign up failed");
        return;
      }

      router.push("/");
    } catch (error: any) {
      setError(error.response?.data.message || "An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="border-border bg-card rounded-lg border p-6 shadow-sm md:p-8">
      <div className="mb-6">
        <p className="text-primary text-sm font-semibold">Get Started</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">Sign Up</h1>
        <p className="text-muted-foreground mt-2 text-sm">
          Create an account to get started with our platform
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <div className="relative">
            <User className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
            <Input
              id="name"
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={loading}
              required
              className="pl-10"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="signup-email">Email Address</Label>
          <div className="relative">
            <Mail className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
            <Input
              id="signup-email"
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
          <Label htmlFor="password">Password</Label>
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

        <div className="space-y-2">
          <Label htmlFor="confirm-password">Confirm Password</Label>
          <div className="relative">
            <Lock className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
            <Input
              id="confirm-password"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              disabled={loading}
              required
              className="pr-10 pl-10"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              disabled={loading}
              className="text-muted-foreground hover:text-foreground absolute top-1/2 right-3 -translate-y-1/2 disabled:cursor-not-allowed"
            >
              {showConfirmPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        <div className="flex items-start gap-2">
          <input
            id="terms"
            type="checkbox"
            checked={agreeToTerms}
            onChange={(e) => setAgreeToTerms(e.target.checked)}
            disabled={loading}
            className="border-input accent-primary mt-1 h-4 w-4 rounded border disabled:cursor-not-allowed disabled:opacity-50"
          />
          <label htmlFor="terms" className="text-muted-foreground text-sm">
            I agree to the{" "}
            <Link href="#" className="text-primary font-semibold hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="#" className="text-primary font-semibold hover:underline">
              Privacy Policy
            </Link>
          </label>
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
              Creating account...
            </>
          ) : (
            "Sign Up"
          )}
        </Button>
      </form>

      <p className="text-muted-foreground mt-4 text-center text-sm">
        Already have an account?{" "}
        <Link href="/sign-in" className="text-primary font-semibold hover:underline">
          Sign in
        </Link>
      </p>
    </section>
  );
}

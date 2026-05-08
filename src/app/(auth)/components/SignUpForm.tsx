"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/context/AuthContext";
import { AlertCircle, Loader2, Lock, Mail, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  showPassword: boolean;
  showConfirmPassword: boolean;
  agreedTerms: boolean;
};

export function SignUpForm() {
  const router = useRouter();
  const { register } = useAuth();

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    showPassword: false,
    showConfirmPassword: false,
    agreedTerms: false,
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const updateField = (field: keyof FormState, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const result = await register(
      form.name,
      form.email,
      form.password,
      form.confirmPassword,
      form.agreedTerms
    );

    if (result.success) {
      router.push("/");
    } else {
      setError(result.message || "Sign up failed");
    }

    setLoading(false);
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
        {/* Name */}
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <div className="relative">
            <User className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
            <Input
              id="name"
              value={form.name}
              placeholder="Abdullah"
              onChange={(e) => updateField("name", e.target.value)}
              disabled={loading}
              required
              className="pl-10"
            />
          </div>
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="signup-email">Email Address</Label>
          <div className="relative">
            <Mail className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
            <Input
              id="signup-email"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={(e) => updateField("email", e.target.value)}
              disabled={loading}
              required
              className="pl-10"
            />
          </div>
        </div>

        {/* Password */}
        <div className="space-y-2">
          <Label>Password</Label>
          <div className="relative">
            <Lock className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
            <Input
              type={form.showPassword ? "text" : "password"}
              value={form.password}
              placeholder="••••••••"
              onChange={(e) => updateField("password", e.target.value)}
              disabled={loading}
              required
              className="pr-10 pl-10"
            />
            <button
              type="button"
              onClick={() => updateField("showPassword", !form.showPassword)}
              className="text-muted-foreground absolute top-1/2 right-3 -translate-y-1/2"
            >
              {form.showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        {/* Confirm Password */}
        <div className="space-y-2">
          <Label>Confirm Password</Label>
          <div className="relative">
            <Lock className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
            <Input
              type={form.showConfirmPassword ? "text" : "password"}
              value={form.confirmPassword}
              placeholder="••••••••"
              onChange={(e) => updateField("confirmPassword", e.target.value)}
              disabled={loading}
              required
              className="pr-10 pl-10"
            />
            <button
              type="button"
              onClick={() => updateField("showConfirmPassword", !form.showConfirmPassword)}
              className="text-muted-foreground absolute top-1/2 right-3 -translate-y-1/2"
            >
              {form.showConfirmPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        {/* Terms */}
        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            checked={form.agreedTerms}
            onChange={(e) => updateField("agreedTerms", e.target.checked)}
          />
          <label className="text-muted-foreground text-sm">
            I agree to the Terms and Privacy Policy
          </label>
        </div>

        {/* Error */}
        {error && (
          <div className="text-destructive flex gap-2 text-sm">
            <AlertCircle className="h-4 w-4" />
            {error}
          </div>
        )}

        {/* Submit */}
        <Button disabled={loading} className="w-full">
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

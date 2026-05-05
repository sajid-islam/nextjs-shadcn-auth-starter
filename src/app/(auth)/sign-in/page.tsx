import type { Metadata } from "next";
import { AuthPageShell } from "../components/AuthPageShell";
import { LoginForm } from "../components/LoginForm";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your account",
};

export default function SignInPage() {
  return (
    <AuthPageShell>
      <LoginForm />
    </AuthPageShell>
  );
}

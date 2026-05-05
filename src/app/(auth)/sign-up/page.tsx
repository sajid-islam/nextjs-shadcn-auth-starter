import type { Metadata } from "next";
import { AuthPageShell } from "../components/AuthPageShell";
import { SignUpForm } from "../components/SignUpForm";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Create a new account",
};

export default function SignUpPage() {
  return (
    <AuthPageShell>
      <SignUpForm />
    </AuthPageShell>
  );
}

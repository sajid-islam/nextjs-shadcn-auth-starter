import Sidebar from "@/components/layout/sidebar/Sidebar";
import React from "react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 overflow-y-auto">{children}</div>
    </main>
  );
}

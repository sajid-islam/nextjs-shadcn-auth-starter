import DashboardNav from "@/components/layout/dashboard-nav/DashboardNav";
import Sidebar from "@/components/layout/sidebar/Sidebar";
import React from "react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="root-scroller flex-1 overflow-y-auto bg-[#F5F9FD]">
        <DashboardNav />
        <div className="p-4">{children}</div>
      </div>
    </main>
  );
}

"use client";
import DashboardNav from "@/components/layout/dashboard-nav/DashboardNav";
import Sidebar from "@/components/layout/sidebar/Sidebar";
import React, { useState } from "react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <main className="flex h-screen overflow-hidden">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className="root-scroller flex-1 overflow-y-auto bg-[#F5F9FD]">
        <DashboardNav setIsOpen={setIsSidebarOpen} />
        <div className="p-4">{children}</div>
      </div>
    </main>
  );
}


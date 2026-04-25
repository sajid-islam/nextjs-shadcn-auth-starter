"use client";
import Image from "next/image";
import SidebarItem from "./SidebarItem";
import { sidebarItems } from "./sidebarItems";

const Sidebar = () => {
  return (
    <aside className="w-80">
      <div className="flex h-screen flex-col bg-[#F0F4F8] px-6">
        {/* Logo and Title */}
        <section className="border-border/50 flex items-center gap-4 py-4">
          <span className="bg-primary flex size-12 items-center justify-center rounded-xl p-2">
            <Image
              src="/logo-with-bg.png"
              className="rounded-full"
              alt="Logo"
              width={100}
              height={100}
              loading="eager"
            />
          </span>
          <div className="flex flex-col">
            <h1 className="text-foreground text-2xl font-bold tracking-tight">Next.js Starter</h1>
            <p className="text-muted-foreground -mt-1 text-sm uppercase">Super Admin</p>
          </div>
        </section>
        {/* Sidebar Menu */}
        <section className="mt-10 flex flex-col gap-2">
          {sidebarItems.map((sidebarItem) => (
            <SidebarItem key={sidebarItem.label} sidebarItem={sidebarItem} />
          ))}
        </section>
      </div>
    </aside>
  );
};

export default Sidebar;

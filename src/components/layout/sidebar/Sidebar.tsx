"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import SidebarItem from "./SidebarItem";
import { sidebarItems } from "./sidebarItems";

const Sidebar = () => {
  const pathname = usePathname();

  const [openItem, setOpenItem] = useState<string | null>(pathname);

  return (
    <aside className="w-72">
      <div className="flex h-screen flex-col bg-[#F0F4F8]">
        {/* Logo and Title */}
        <section className="flex items-center gap-4 px-6 py-4">
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
        <section className="sidebar-scroller mt-2 flex flex-col gap-4 overflow-y-auto px-6">
          {sidebarItems.map((sidebarItem) => (
            <SidebarItem
              key={sidebarItem.label}
              sidebarItem={sidebarItem}
              openItem={openItem}
              setOpenItem={setOpenItem}
            />
          ))}
        </section>
      </div>
    </aside>
  );
};

export default Sidebar;

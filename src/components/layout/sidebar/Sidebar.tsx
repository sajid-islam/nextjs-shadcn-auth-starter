"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import SidebarItem from "./SidebarItem";
import { sidebarItems } from "./sidebarItems";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  const pathname = usePathname();

  const [openItem, setOpenItem] = useState<string | null>(pathname);

  // Close sidebar on mobile when pathname changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname, setIsOpen]);

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 transform bg-[#F0F4F8] transition-transform duration-300 ease-in-out lg:static lg:block lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-screen flex-col bg-[#F0F4F8]">
          {/* Logo and Title */}
          <section className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-4">
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
                <h1 className="text-foreground text-2xl font-bold tracking-tight">
                  Next.js Starter
                </h1>
                <p className="text-muted-foreground -mt-1 text-sm uppercase">Super Admin</p>
              </div>
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
    </>
  );
};

export default Sidebar;

import UserMenu from "@/components/shared/user-menu/UserMenu";
import { PanelLeftOpen } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

const DashboardNav = ({ setIsOpen }: { setIsOpen: Dispatch<SetStateAction<boolean>> }) => {
  return (
    <nav className="sticky top-0 z-40 flex h-16 w-full items-center justify-between bg-white/30 px-5 py-2 shadow-sm backdrop-blur-lg">
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center justify-center rounded-md p-2 hover:bg-gray-100 lg:hidden"
        aria-label="Open Sidebar"
      >
        <PanelLeftOpen className="size-6" />
      </button>
      <div className="hidden lg:block" />
      <UserMenu />
    </nav>
  );
};

export default DashboardNav;

"use client";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { LogOut, Settings, User } from "lucide-react"; // Optional: icons for flair
import Image from "next/image";

const UserMenu = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="transition-opacity outline-none hover:cursor-pointer hover:opacity-80">
          <Image
            src="https://api.dicebear.com/9.x/micah/svg?seed=Emery"
            alt="user photo"
            width={48}
            height={48}
            unoptimized
            className="border-primary h-12 w-12 rounded-full border-2 object-cover"
          />
        </button>
      </PopoverTrigger>

      <PopoverContent className="w-56 p-2" align="end">
        <div className="flex flex-col space-y-1">
          {/* User Header */}
          <div className="px-2 py-1.5">
            <p className="text-sm leading-none font-medium">Emery</p>
            <p className="text-muted-foreground mt-1 text-xs leading-none">emery@example.com</p>
          </div>

          <hr className="-mx-2 my-1 border-slate-200" />

          {/* Menu Items */}
          <button className="flex w-full items-center rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-slate-100">
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </button>

          <button className="flex w-full items-center rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-slate-100">
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </button>

          <hr className="-mx-2 my-1 border-slate-200" />

          <button className="flex w-full items-center rounded-md px-2 py-1.5 text-sm text-red-600 transition-colors hover:bg-red-50">
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default UserMenu;

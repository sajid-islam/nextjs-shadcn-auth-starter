import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

interface Item {
  label: string;
  href: string;
  icon: LucideIcon;
  children?: Item[];
}

interface SidebarItemProps {
  sidebarItem: Item;
}
const SidebarItem: FC<SidebarItemProps> = ({ sidebarItem }) => {
  const { label, href, icon: Icon, children } = sidebarItem;

  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={`flex gap-2 rounded-xl px-6 py-4 text-lg font-medium text-nowrap ${pathname === href ? "text-primary bg-white shadow-sm" : "hover:bg-white hover:shadow-sm"}`}
    >
      <Icon className="size-6" strokeWidth={2.5} />
      <span>{label}</span>
    </Link>
  );
};

export default SidebarItem;

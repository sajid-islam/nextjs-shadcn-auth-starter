import { ChevronDown, ChevronRight, LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, FC, SetStateAction } from "react";

interface Item {
  label: string;
  href: string;
  icon: LucideIcon;
  children?: Item[];
}

interface SidebarItemProps {
  sidebarItem: Item;
  openItem: string | null;
  setOpenItem: Dispatch<SetStateAction<string | null>>;
}

const SidebarItem: FC<SidebarItemProps> = ({ sidebarItem, openItem, setOpenItem }) => {
  const { label, href, icon: Icon, children } = sidebarItem;

  const pathname = usePathname();

  const isOpen = openItem === href || children?.some((item) => openItem === item.href);

  return (
    <div>
      {!children ? (
        // Without Children(Subitem)
        <Link
          href={href}
          onClick={() => setOpenItem(null)}
          className={`flex items-center gap-2 rounded-md px-2 py-1.5 font-medium text-nowrap ${
            pathname === href ? "text-primary bg-white shadow-sm" : "hover:bg-white hover:shadow-sm"
          }`}
        >
          <Icon className="size-5" />
          <span>{label}</span>
        </Link>
      ) : (
        // With Children(Subitem)
        <div>
          <button
            onClick={() => setOpenItem(isOpen ? null : href)}
            className={`flex w-full justify-between rounded-md px-2 py-1.5 font-medium text-nowrap ${
              pathname === href
                ? "text-primary bg-white shadow-sm"
                : "hover:bg-white hover:shadow-sm"
            }`}
          >
            <div className="flex items-center gap-2">
              <Icon className="size-5" />
              <span>{label}</span>
            </div>

            {isOpen ? <ChevronRight size={20} /> : <ChevronDown size={20} />}
          </button>

          {/* Subitems */}
          {isOpen && (
            <div className="my-2 ml-4 flex flex-col gap-2 border-l border-gray-300 px-2">
              {children.map((subItem) => (
                <Link
                  key={subItem.href}
                  href={subItem.href}
                  className={`flex items-center gap-2 rounded-md px-2 py-1.5 font-medium text-nowrap ${
                    pathname === subItem.href
                      ? "text-primary bg-white shadow-sm"
                      : "hover:bg-white hover:shadow-sm"
                  }`}
                >
                  <subItem.icon className="size-5" />
                  <span>{subItem.label}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SidebarItem;

import {
  CirclePlus,
  Clock,
  FileStack,
  FileText,
  Layers,
  LayoutDashboard,
  ScrollText,
  ShieldCheck,
  Users,
} from "lucide-react";

export const sidebarItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "User Management",
    href: "/dashboard/user-management",
    icon: Users,
  },
  {
    label: "Roles & Permissions",
    href: "/dashboard/roles-permissions",
    icon: ShieldCheck,
  },
  {
    label: "Blog",
    icon: FileText,
    href: "#",
    children: [
      {
        label: "Blogs",
        href: "/dashboard/blog/blogs",
        icon: FileStack,
      },
      {
        label: "Create Blog",
        href: "/dashboard/blog/create",
        icon: CirclePlus,
      },
      {
        label: "Categories",
        href: "/dashboard/blog/categories",
        icon: Layers,
      },
    ],
  },
  {
    label: "Logs",
    href: "/dashboard/logs",
    icon: ScrollText,
  },
  {
    label: "Activity",
    href: "/dashboard/activity",
    icon: Clock,
  },
];

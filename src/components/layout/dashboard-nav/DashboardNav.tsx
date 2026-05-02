import UserMenu from "@/components/shared/user-menu/UserMenu";

const DashboardNav = () => {
  return (
    <nav className="sticky top-0 z-40 flex h-16 w-full items-center justify-end bg-white/30 px-5 py-2 shadow-sm backdrop-blur-lg">
      <UserMenu />
    </nav>
  );
};

export default DashboardNav;

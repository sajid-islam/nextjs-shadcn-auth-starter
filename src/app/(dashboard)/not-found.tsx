import { Button } from "@/components/ui/button";
import { ScrollText, ShieldCheck, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const NotFoundPage = () => {
  const suggestions = [
    {
      title: "User Management",
      description: "Manage team members and permissions.",
      icon: <Users className="h-6 w-6 text-purple-600" />,
      iconBgColor: "bg-purple-50",
      href: "/dashboard/user-management",
    },
    {
      title: "Roles & Permissions",
      description: "Define access levels and security roles.",
      icon: <ShieldCheck className="h-6 w-6 text-emerald-600" />,
      iconBgColor: "bg-emerald-50",
      href: "/dashboard/roles-permissions",
    },
    {
      title: "Logs",
      description: "Monitor system changes.",
      icon: <ScrollText className="h-6 w-6 text-amber-600" />,
      iconBgColor: "bg-amber-50",
      href: "/dashboard/logs",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      {/* Split Hero Section */}
      <main className="flex grow items-center justify-center px-6 py-16">
        <div className="grid w-full max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* Left: Illustration */}
          <div className="flex justify-center md:justify-end">
            <Image
              src="/illustrations/not-found.svg"
              alt="404 Illustration"
              width={400}
              height={400}
              className="h-auto w-full max-w-[400px] object-contain"
            />
          </div>

          {/* Right: Text Content */}
          <div className="text-center md:text-left">
            <span className="text-tertiary block text-7xl font-black opacity-50 md:text-8xl">
              404
            </span>
            <h1 className="mb-6 text-4xl leading-tight font-bold text-gray-900 md:text-5xl">
              Lost in Space?
            </h1>
            <p className="mx-auto mb-10 max-w-md text-lg text-gray-500 md:mx-0">
              The page you are looking for doesn&apos;t exist or has been moved. It might have
              drifted into a different atmosphere.
            </p>
            <Link href="/dashboard">
              <Button size="lg" className="bg-tertiary">
                Back to Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </main>

      {/* Suggestions Section */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-10 text-center text-xs font-bold tracking-[0.2em] text-gray-400 uppercase md:text-left">
            Maybe you were looking for...
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {suggestions.map((item, index) => (
              <Link
                href={item.href}
                key={index}
                className="group flex cursor-pointer flex-col gap-5 rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg"
              >
                <div
                  className={`h-12 w-12 ${item.iconBgColor} flex items-center justify-center rounded-2xl transition-transform group-hover:scale-110`}
                >
                  {item.icon}
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-bold text-gray-900">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-500">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFoundPage;

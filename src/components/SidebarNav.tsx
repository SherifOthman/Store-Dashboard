import {
  Boxes,
  LayoutDashboard,
  PackageSearch,
  type LucideIcon,
} from "lucide-react";
import { SidebarLink } from "./SidebarLink";
import { useLocation } from "react-router-dom";

type LinkType = {
  title: string;
  href: string;
  icon: LucideIcon;
};

const links: LinkType[] = [
  {
    title: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Categories",
    href: "/categories",
    icon: Boxes,
  },
  {
    title: "Products",
    href: "/products",
    icon: PackageSearch,
  },
];

export const SidebarNav = () => {
  const location = useLocation();

  return (
    <div className="mt-8 flex flex-col gap-2">
      {links.map((link) => (
        <SidebarLink
          key={link.title}
          to={link.href}
          icon={link.icon}
          selected={location.pathname === link.href}
        >
          {link.title}
        </SidebarLink>
      ))}
    </div>
  );
};

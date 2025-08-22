"use client";
import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import Logo from "./logo";
import { LayoutDashboard, LucideIcon, Package, Weight } from "lucide-react";
import { usePathname } from "next/navigation";
import { Separator } from "../ui/separator";

type MenuItem = {
  title: string;
  url: string;
  icon: LucideIcon;
};

const menuItems: { group: string; links: MenuItem[] }[] = [
  {
    group: "Main",
    links: [{ title: "Dashboard", url: "/", icon: LayoutDashboard }],
  },
  {
    group: "All pages",
    links: [
      { title: "Category", url: "/category", icon: Package },
      { title: "Product", url: "/product", icon: Weight },
    ],
  },
];

export default function AppSidebar() {
  const pathname = usePathname();
  return (
    <Sidebar>
      <SidebarHeader>
        <Logo />
      </SidebarHeader>
      <Separator />
      <SidebarContent>
        {menuItems.map(({ group, links }) => (
          <SidebarGroup key={group}>
            <SidebarGroupLabel>{group}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {links.map((link) => (
                  <SidebarMenuItem key={link.title}>
                    <SidebarMenuButton
                      asChild
                      size="lg"
                      isActive={pathname === link.url}
                    >
                      <Link href={link.url}>
                        <link.icon />
                        <span>{link.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter>User Info (Later)</SidebarFooter>
    </Sidebar>
  );
}

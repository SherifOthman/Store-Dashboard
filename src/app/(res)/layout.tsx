import AppSidebar from "@/components/my-components/app-sidebar";
import Header from "@/components/my-components/header";
import { SidebarProvider } from "@/components/ui/sidebar";
import { cookies } from "next/headers";
import React from "react";

async function Layout({ children }: { children: Readonly<React.ReactNode> }) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";
  return (
    <div>
      <SidebarProvider defaultOpen={defaultOpen}>
        <AppSidebar />
        <div className="flex-1">
          <Header />
          <main className="mx-10 mt-18 ">{children}</main>
        </div>
      </SidebarProvider>
    </div>
  );
}

export default Layout;

import { Outlet } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { SidebarProvider } from "./contexts/SidebarContext";

export const Layout = () => {
  return (
    <SidebarProvider>
      <div className="bg-background text-foreground flex">
        <Sidebar />
        <div className="flex-1 flex-col">
          <Header />
          <main className="p-4">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

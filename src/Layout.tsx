import { Navigate, Outlet } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { SidebarProvider } from "./contexts/SidebarContext";
import { getAuth } from "./utils/Auth";

export const Layout = () => {
  if (!getAuth()) return <Navigate to="/login" replace />;

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

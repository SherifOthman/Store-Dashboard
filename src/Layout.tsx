import { Outlet } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";

export const Layout = () => {
  return (
    <div className="bg-background flex">
      <Sidebar />
      <div className="flex-1 flex-col">
        <Header />
        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

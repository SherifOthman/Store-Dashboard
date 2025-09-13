import { Logo } from "./Logo";
import { cn } from "../utils/cn";
import { SidebarNav } from "./SidebarNav";
import { useSidebar } from "../contexts/SidebarContext";

export const Sidebar = () => {
  const { open } = useSidebar();

  return (
    <aside
      className={cn(
        "bg-sidebar text-sidebar-foreground sticky top-0 z-20 flex h-screen w-64 flex-col overflow-hidden p-2 shadow-md transition-[width] duration-500 dark:shadow-gray-800",
        !open && "w-14",
      )}
    >
      <div
        className={cn(
          open ? "flex w-full items-center justify-between" : "mx-auto",
        )}
      >
        {<Logo logoWithTitle={open} />}
      </div>
      <SidebarNav />
    </aside>
  );
};

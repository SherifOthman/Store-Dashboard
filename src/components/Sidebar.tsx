import { Logo } from "./Logo";
import { cn } from "../utils/cn";
import { SidebarNav } from "./SidebarNav";
import { useSidebar } from "../contexts/SidebarContext";
import { useIsMobile } from "../hooks/useIsMobile";
import { useOutside } from "../hooks/useOutside";
import { useEffect } from "react";

export const Sidebar = () => {
  const isMobile = useIsMobile();
  const { setOpen } = useSidebar();

  useEffect(() => {
    if (isMobile) {
      setOpen(false);
    }
  }, [isMobile, setOpen]);

  return isMobile ? <MobileSidebar /> : <DesktopSidebar />;
};

const DesktopSidebar = () => {
  const { open } = useSidebar();

  return (
    <aside
      className={cn(
        "bg-sidebar text-sidebar-foreground border-foreground/40 sticky top-0 z-20 flex h-screen w-64 flex-col overflow-hidden border-r p-2 transition-[width] duration-500",
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
      <SidebarNav onlyIcons={!open} />
    </aside>
  );
};

const MobileSidebar = () => {
  const { open, setOpen } = useSidebar();

  const ref = useOutside<HTMLDivElement>(() => setOpen(false));

  return (
    <div
      className={cn(
        "fixed z-20 flex h-screen w-dvw",
        !open && "-translate-x-full",
      )}
    >
      <aside
        className={cn(
          "bg-sidebar text-sidebar-foreground border-foreground/40 top-0 z-30 w-[450px] flex-col overflow-hidden border-r bg-white p-2",
        )}
        ref={ref}
      >
        <div>{<Logo logoWithTitle={open} />}</div>
        <SidebarNav onlyIcons={false} />
      </aside>
      <div className="w-full bg-black/80 backdrop-blur-xs"></div>
    </div>
  );
};

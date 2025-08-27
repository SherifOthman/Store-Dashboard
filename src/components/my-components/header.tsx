"use client";
import { useIsMobile } from "@/hooks/use-mobile";
import { SidebarTrigger, useSidebar } from "../ui/sidebar";
import { ModeToggle } from "./mode-toggle";
import { cn } from "@/lib/utils";

function Header() {
  const { open } = useSidebar();
  const isMobile = useIsMobile();
  return (
    <div
      className={cn(
        "flex justify-between bg-sidebar h-[52px] py-2 px-5 items-center fixed right-0 transition-all duration-300 z-50",
        open && "left-64",
        (!open || isMobile) && "left-0"
      )}
    >
      <SidebarTrigger />
      <ModeToggle />
    </div>
  );
}

export default Header;

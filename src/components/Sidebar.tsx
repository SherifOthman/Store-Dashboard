import { ToggleSidebar } from "./ToggleSidebar";
import { useLocalStorage } from "../hooks/useLocalStorge";
import { Logo } from "./Logo";
import { cn } from "../utils/cn";

export const Sidebar = () => {
  const [open, setOpen] = useLocalStorage<boolean>("sidebar", false);

  return (
    <aside
      className={cn(
        "bg-sidebar text-sidebar-foreground sticky top-0 flex h-screen w-64 flex-col p-2 shadow transition-[width] duration-500",
        !open && "w-14",
      )}
    >
      <div
        className={cn(
          open ? "flex w-full items-center justify-between" : "mx-auto",
        )}
      >
        {open && <Logo />}
        <ToggleSidebar
          open={open}
          onClick={() => setOpen((previous) => !previous)}
        />
      </div>

      {/* <a href="//logotyp.us/logo/shop">Shop logo</a> */}
    </aside>
  );
};

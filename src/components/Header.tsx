import { ToggleDarkMode } from "./ToggleDarkMode";
import { ToggleSidebar } from "./ToggleSidebar";

export const Header = () => {
  return (
    <header className="bg-sidebar text-sidebar-foreground sticky top-0 z-10 flex h-12 items-center justify-between px-4 shadow-md dark:shadow-gray-950">
      <ToggleSidebar />
      <ToggleDarkMode />
    </header>
  );
};

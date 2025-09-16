import { ToggleDarkMode } from "./ToggleDarkMode";
import { ToggleSidebar } from "./ToggleSidebar";
import { UserMenue } from "../features/Auth/UserMeneu";

export const Header = () => {
  return (
    <header className="bg-background text-sidebar-foreground border-foreground/40 sticky top-0 z-10 flex items-center justify-between border-b px-4 py-1 shadow">
      <ToggleSidebar />
      <div className="flex items-center space-x-2">
        <ToggleDarkMode />
        <hr className="bg-foreground/80 h-6 w-[1px] rounded" />
        <UserMenue />
      </div>
    </header>
  );
};

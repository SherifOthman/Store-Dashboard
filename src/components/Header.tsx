import { Avatar, MenuTrigger } from "@material-tailwind/react";
import { ToggleDarkMode } from "./ToggleDarkMode";
import { ToggleSidebar } from "./ToggleSidebar";
import { Menu } from "lucide-react";
import { UserMenue } from "../features/Auth/UserMeneu";

export const Header = () => {
  return (
    <header className="bg-sidebar text-sidebar-foreground border-foreground/40 sticky top-0 z-10 flex items-center justify-between border-b px-4 py-1">
      <ToggleSidebar />
      <div>
        <div className="flex space-x-1">
          <UserMenue />
          <ToggleDarkMode />
        </div>
      </div>
    </header>
  );
};

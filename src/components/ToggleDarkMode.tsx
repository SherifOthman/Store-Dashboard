import { Moon, Sun } from "lucide-react";
import { useDarkMode } from "../hooks/useDarkMode";

export const ToggleDarkMode = () => {
  const { isDark, ToggleTheme } = useDarkMode();

  return (
    <button
      onClick={ToggleTheme}
      aria-label="Toggle theme"
      className="text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground cursor-pointer rounded p-1.5 transition-colors"
    >
      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
};

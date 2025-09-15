import { Moon, Sun } from "lucide-react";
import { useDarkMode } from "../hooks/useDarkMode";
import { IconButton } from "@material-tailwind/react";

export const ToggleDarkMode = () => {
  const { isDark, ToggleTheme } = useDarkMode();

  return (
    <IconButton variant="ghost" onClick={ToggleTheme}>
      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </IconButton>
  );
};

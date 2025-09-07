import { Moon, Sun } from "lucide-react";

import { useDarkMode } from "../hooks/useDarkMode";

export const ToggleDarkMode = () => {
  const { isDark, ToggleTheme } = useDarkMode();

  return (
    <button onClick={ToggleTheme} aria-label="Toggle theme">
      {isDark ? <Sun /> : <Moon />}
    </button>
  );
};

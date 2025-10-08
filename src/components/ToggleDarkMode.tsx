import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDarkMode } from "../hooks/useDarkMode";

export const ToggleDarkMode = () => {
  const { isDark, ToggleTheme } = useDarkMode();

  return (
    <Button
      variant="ghost"
      size="xlIcon"
      onClick={ToggleTheme}
      className="rounded-full"
    >
      {isDark ? <Sun /> : <Moon />}
    </Button>
  );
};

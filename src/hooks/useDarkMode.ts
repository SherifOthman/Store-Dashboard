import { useLocalStorage } from "./useLocalStorge";

export const useDarkMode = () => {
  const [theme, setTheme] = useLocalStorage(
    "theme",
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light",
  );

  const isDark = theme === "dark";

  const ToggleTheme = () => {
    document.documentElement.classList.toggle("dark", !isDark);
    document.documentElement.classList.toggle("light", isDark);

    setTheme(isDark ? "light" : "dark");
  };

  return { isDark, ToggleTheme };
};

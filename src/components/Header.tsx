import { ToggleDarkMode } from "./ToggleDarkMode";

export const Header = () => {
  return (
    <header className="sticky top-0 flex h-12 items-center justify-between bg-amber-700">
      <ToggleDarkMode />
    </header>
  );
};

import { ToggleDarkMode } from "./ToggleDarkMode";
import { ToggleSidebar } from "./ToggleSidebar";
import { UserMenu } from "../features/Auth/UserMeneu";
import { useCurrentUser } from "../features/Auth/useCurrentUser";

export const Header = () => {
  const { currentUser } = useCurrentUser();
  const fullName =
    `${currentUser?.firstName || ""} ${currentUser?.lastName || ""}`.trim();

  return (
    <header className="border-foreground/40 bg-background text-foreground sticky top-0 z-10 flex items-center justify-between border-b px-4 py-2 shadow-sm">
      <ToggleSidebar />
      <div className="flex items-center gap-3">
        <ToggleDarkMode />
        <div className="bg-foreground/30 h-6 w-px" />
        <span className="text-sm">Hi,</span>
        <span className="font-medium">{fullName}</span>
        <UserMenu user={currentUser} />
      </div>
    </header>
  );
};

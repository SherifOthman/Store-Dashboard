import { PanelLeftClose, PanelRightClose } from "lucide-react";
import { useSidebar } from "../contexts/SidebarContext";

export const ToggleSidebar = () => {
  const { open, toggle } = useSidebar();

  return (
    <button
      className="text-foreground hover:bg-accent hover:text-accent-foreground cursor-pointer rounded p-1.5 transition-colors"
      onClick={toggle}
    >
      {open ? <PanelLeftClose /> : <PanelRightClose />}
    </button>
  );
};

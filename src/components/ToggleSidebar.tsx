import { PanelLeftClose, PanelRightClose } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSidebar } from "../contexts/SidebarContext";

export const ToggleSidebar = () => {
  const { open, toggle } = useSidebar();

  return (
    <Button
      variant="ghost"
      size="xlIcon"
      onClick={toggle}
      className="rounded-full"
    >
      {open ? <PanelLeftClose /> : <PanelRightClose />}
    </Button>
  );
};

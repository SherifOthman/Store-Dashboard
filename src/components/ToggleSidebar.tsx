import { PanelLeftClose, PanelRightClose } from "lucide-react";
import { useSidebar } from "../contexts/SidebarContext";
import { IconButton } from "@material-tailwind/react";

export const ToggleSidebar = () => {
  const { open, toggle } = useSidebar();

  return (
    <IconButton variant="ghost" onClick={toggle}>
      {open ? <PanelLeftClose /> : <PanelRightClose />}
    </IconButton>
  );
};

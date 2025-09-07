import { PanelLeftClose, PanelRightClose } from "lucide-react";

export const ToggleSidebar = ({
  open,
  onClick,
}: {
  open: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      className="border-border text-popover-foreground/60 cursor-pointer rounded border-2 p-1.5"
      onClick={onClick}
    >
      {open ? <PanelLeftClose /> : <PanelRightClose />}
    </button>
  );
};

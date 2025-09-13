import type { LucideIcon } from "lucide-react";
import { Link, type LinkProps } from "react-router-dom";
import { cn } from "../utils/cn";
import { useSidebar } from "../contexts/SidebarContext";

type SidebarLinkProps = {
  to: string;
  selected?: boolean;
  icon: LucideIcon;
} & LinkProps;

export const SidebarLink = ({
  icon: Icon,
  to,
  selected = false,
  children,
  className,
  ...rest
}: SidebarLinkProps) => {
  const { open } = useSidebar();

  return (
    <Link
      to={to}
      className={cn(
        "text-sidebar-foreground hover:bg-primary hover:text-primary-foreground flex gap-2 rounded p-3 transition-colors duration-300",
        !open && "px-2 py-2",
        selected && "bg-primary text-primary-foreground font-bold",
        className,
      )}
      {...rest}
    >
      <Icon />
      {open && children}
    </Link>
  );
};

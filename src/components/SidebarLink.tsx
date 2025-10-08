import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import { Link, type LinkProps } from "react-router-dom";

type SidebarLinkProps = {
  to: string;
  selected?: boolean;
  icon: LucideIcon;
  onlyIcons: boolean;
} & LinkProps;

export const SidebarLink = ({
  icon: Icon,
  to,
  selected = false,
  children,
  className,
  onlyIcons,
  ...rest
}: SidebarLinkProps) => {
  return (
    <Link
      to={to}
      className={cn(
        "text-sidebar-foreground hover:bg-primary hover:text-primary-foreground flex gap-2 rounded transition-colors duration-300",
        onlyIcons ? "p-2" : "p-3",
        selected && "bg-primary text-primary-foreground font-bold",
        className,
      )}
      {...rest}
    >
      <Icon />
      {!onlyIcons && children}
    </Link>
  );
};

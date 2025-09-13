import React from "react";
import { cn } from "../utils/cn";
import type { LucideIcon } from "lucide-react";

type InputProps = {
  icon?: LucideIcon;
  error?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, icon: Icon, error, ...rest }, ref) => {
    return (
      <div className="relative w-full">
        {Icon && (
          <Icon className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
        )}
        <input
          ref={ref}
          {...rest}
          className={cn(
            "border-border bg-input text-foreground focus:ring-foreground/40 w-full rounded border px-2 py-1.5 outline-none focus:ring",
            Icon && "pl-9",
            error && "border-destructive",
            className,
          )}
        />
      </div>
    );
  },
);

export const ErrorMessage = ({ title }: { title: string | undefined }) => {
  return <p className="text-destructive text-sm">{title ? title : ""}</p>;
};

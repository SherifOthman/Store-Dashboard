import * as React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { LucideIcon } from "lucide-react";

type TextFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
  icon?: LucideIcon;
};

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, error, icon: Icon, ...props }, ref) => {
    const id = React.useId();

    return (
      <div className="mb-6 w-full">
        <Label htmlFor={id} className="mb-1 block text-sm font-semibold">
          {label}
        </Label>

        <div className="relative">
          {Icon && (
            <Icon
              className="text-muted-foreground absolute top-1/2 left-3 -translate-y-1/2"
              size={18}
            />
          )}
          <Input
            id={id}
            ref={ref}
            className={`pl-${Icon ? "10" : "3"} ${error ? "border-destructive focus-visible:ring-destructive" : ""}`}
            {...props}
          />
        </div>

        {error && <p className="text-destructive mt-1 text-sm">{error}</p>}
      </div>
    );
  },
);

TextField.displayName = "TextField";

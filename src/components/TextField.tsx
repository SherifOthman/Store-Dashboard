import { Input, Typography, type InputProps } from "@material-tailwind/react";
import type { LucideIcon } from "lucide-react";
import React from "react";

type TextFieldProps = InputProps & {
  label: string;
  error?: string;
  icon?: LucideIcon;
};

export const TextField = React.forwardRef<typeof Input, TextFieldProps>(
  ({ label, error, icon: Icon, ...props }, ref) => {
    const id = React.useId();

    return (
      <Typography
        as="label"
        htmlFor={id}
        color="default"
        className="mb-6 block space-y-1.5"
      >
        <span className="text-sm font-semibold">{label}</span>
        <Input
          ref={ref}
          {...props}
          id={id}
          isError={Boolean(error)}
          color={error ? "error" : "primary"}
        >
          {Icon && (
            <Input.Icon>
              <Icon className="h-full w-full" />
            </Input.Icon>
          )}
        </Input>
        {error && (
          <Typography type="small" color="error">
            {error}
          </Typography>
        )}
      </Typography>
    );
  },
);

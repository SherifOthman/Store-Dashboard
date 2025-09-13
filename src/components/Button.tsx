import { cn } from "../utils/cn";

const buttonBase =
  "inline-flex items-center cursor-pointer justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

const buttonVariants = {
  variant: {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    destructive:
      "bg-destructive text-destructive-foreground hover:bg-destructive/90",
    outline:
      "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    ghost: "hover:bg-accent hover:text-accent-foreground",
  },
  size: {
    default: "px-4 py-2 h-9",
    sm: "px-3 py-1.5 h-8",
    lg: "px-6 py-3 h-10",
  },
} as const;

type buttonVariantsType = keyof typeof buttonVariants.variant;
type buttonSizesType = keyof typeof buttonVariants.size;

type ButtonProps = {
  variant?: buttonVariantsType;
  size?: buttonSizesType;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  variant = "default",
  size = "default",
  children,
  className,
  ...rest
}: ButtonProps) => {
  const buttonStyle = cn(
    buttonBase,
    buttonVariants.variant[variant],
    buttonVariants.size[size],
    className,
  );

  return (
    <button className={buttonStyle} {...rest}>
      {children}
    </button>
  );
};

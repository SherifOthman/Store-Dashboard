import { Button, Typography } from "@material-tailwind/react";
import type { FallbackProps } from "react-error-boundary";

export const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <div className="bg-background flex h-dvh w-full items-center justify-center">
      <div className="bg-primary flex h-[350px] w-[700px] flex-col items-center justify-center gap-6 rounded-xl">
        <Typography type="h2" className="italic">
          Something went wrong 🤔
        </Typography>
        <Typography color="error" type="h5">
          {error.message}
        </Typography>
        <Button
          variant="solid"
          color="secondary"
          size="lg"
          onClick={resetErrorBoundary}
        >
          Try again
        </Button>
      </div>
    </div>
  );
};

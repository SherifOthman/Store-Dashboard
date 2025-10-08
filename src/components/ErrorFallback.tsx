import { Button } from "@/components/ui/button";
import type { FallbackProps } from "react-error-boundary";

export const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <div className="bg-background flex h-dvh w-full items-center justify-center">
      <div className="bg-primary text-primary-foreground flex h-[350px] w-[700px] flex-col items-center justify-center gap-6 rounded-xl p-8 shadow-lg">
        <h2 className="text-2xl font-semibold italic">
          Something went wrong 🤔
        </h2>
        <p className="text-destructive text-lg font-medium">{error.message}</p>
        <Button variant="secondary" size="lg" onClick={resetErrorBoundary}>
          Try again
        </Button>
      </div>
    </div>
  );
};

import { Typography } from "@material-tailwind/react";

export const NotFound = () => {
  return (
    <div className="bg-background flex h-dvh flex-col items-center justify-center">
      <Typography className="m-0 text-[160px] font-bold" color="default">
        404
      </Typography>
      <Typography type="h3" color="default">
        NOT FOUND
      </Typography>
    </div>
  );
};

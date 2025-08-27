import React from "react";

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-3xl text-foreground">{children}</h1>
    </div>
  );
}
export default Heading;

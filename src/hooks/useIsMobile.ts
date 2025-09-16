import { useEffect, useState } from "react";

export const useIsMobile = (breakpoint = 764) => {
  const [isMobile, setIsMobile] = useState(() => {
    return window.innerWidth <= breakpoint;
  });

  useEffect(() => {
    const triggerIsMobile = () => setIsMobile(window.innerWidth <= breakpoint);
    window.addEventListener("resize", triggerIsMobile);

    return () => window.removeEventListener("resize", triggerIsMobile);
  }, [isMobile, setIsMobile, breakpoint]);

  return isMobile;
};

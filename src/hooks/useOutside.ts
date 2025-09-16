import { useEffect, useRef } from "react";

export function useOutside<T extends HTMLElement>(
  onOutSide: () => void,
  listenCapturing = true,
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      const el = ref.current;

      if (!el) return;

      // Only call the handler if the click is outside the elment
      if (e.target instanceof Node && !ref.current?.contains(e.target))
        onOutSide();
    };

    document.addEventListener("click", handleOutside, listenCapturing);

    return () =>
      document.removeEventListener("click", handleOutside, listenCapturing);
  }, [onOutSide, listenCapturing]);

  return ref;
}

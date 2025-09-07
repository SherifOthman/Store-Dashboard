import { useEffect, useState } from "react";

export const useLocalStorage = <T>(
  key: string,
  initialValue: T,
): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const [value, setValue] = useState<T>(() => {
    const storedValue = localStorage.getItem(key);
    if (!storedValue) return initialValue;

    try {
      return JSON.parse(storedValue);
    } catch {
      return storedValue as unknown as T;
    }
  });

  useEffect(() => {
    if (typeof value === "string") localStorage.setItem(key, value);
    else localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue] as const;
};

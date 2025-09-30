import type { FieldValues, Path, UseFormSetError } from "react-hook-form";
import { type ErrorItem } from "../types/apiTypes";

export function delay(seconds: number) {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}

export function setBackendErrors<T extends FieldValues>(
  setError: UseFormSetError<T>,
  errors?: ErrorItem[],
) {
  if (!errors) return;

  errors.forEach((error) => {
    try {
      setError(error.field as Path<T>, {
        message: error.message,
        type: "maunual",
      });
    } catch {
      console.warn(`Unknown field from backend: ${error.field}`);
    }
  });
}

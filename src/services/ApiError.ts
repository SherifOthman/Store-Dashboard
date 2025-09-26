import type { ErrorItem } from "../types/apiTypes";

export class ApiError extends Error {
  errors: ErrorItem[] | undefined;

  constructor(message?: string, errors?: ErrorItem[]) {
    super(message);
    this.errors = errors;
  }
}

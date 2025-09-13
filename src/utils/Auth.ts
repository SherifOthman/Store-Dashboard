import type { Auth } from "../types/apiTypes";

export const setAuth = (auth: Auth) => {
  localStorage.setItem("auth", JSON.stringify(auth));
};
export const getAuth = () => {
  const storedValue = localStorage.getItem("auth");

  return storedValue ? (JSON.parse(storedValue) as Auth) : null;
};

export const clearAuth = () => localStorage.removeItem("auth");

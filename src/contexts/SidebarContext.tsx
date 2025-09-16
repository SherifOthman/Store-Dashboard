import React, { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorge";

type SidebarContextType = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggle: () => void;
};

const initalState: SidebarContextType = {
  open: false,
  setOpen: () => {},
  toggle: () => {},
};

const SidebarContext = createContext<SidebarContextType>(initalState);

const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useLocalStorage<boolean>("sidebar", false);

  const toggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <SidebarContext.Provider value={{ open, setOpen, toggle }}>
      {children}
    </SidebarContext.Provider>
  );
};

const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context)
    throw new Error("useSidebar must be used within SidebarProvider");

  return context;
};

export { useSidebar, SidebarProvider };

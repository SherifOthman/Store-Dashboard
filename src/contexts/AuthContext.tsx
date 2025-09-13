import React, { createContext, useContext, useEffect, useState } from "react";
import type { User } from "../types/apiTypes";
import * as authService from "../services/authService";
import { useNavigate } from "react-router-dom";

interface AuthContextType {
  user: User | null;
  setUser: (user: User) => void;
  isAuthenticated: boolean;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const refresh = async () => {
      try {
        const res = await authService.refreshToken();
        if (res.data) setUser(res.data?.user);
      } catch {
        setUser(null);
        navigate("login", { replace: true });
      } finally {
        setLoading(false);
      }
    };
    refresh();
  }, [navigate]);

  return (
    <AuthContext.Provider
      value={{ user, setUser, isAuthenticated: !!user, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);

  if (!context) throw new Error("useAuth must be used inside AuthProvider");

  return context;
};

export { AuthProvider, useAuth };

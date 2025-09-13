import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export const ProtectedLayout = () => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return <div>Loading....</div>;

  if (!isAuthenticated) return <Navigate to="/login" replace />;

  return <Outlet />;
};

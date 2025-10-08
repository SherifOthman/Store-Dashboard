import { Navigate } from "react-router-dom";
import { LoginForm } from "../features/Auth/LoginForm";
import { getAccessToken } from "../services/authStorge";

export const Login = () => {
  if (getAccessToken()) return <Navigate to="/" replace />;

  return (
    <main className="bg-background/95 flex h-screen items-center justify-center">
      <div className="bg-background flex w-80 flex-col items-center gap-6 rounded-lg p-8 shadow-lg">
        <h1 className="text-foreground text-2xl font-bold">Welcome Back</h1>
        <LoginForm />
      </div>
    </main>
  );
};

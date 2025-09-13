import { LoginForm } from "../features/Auth/LoginForm";

export const Login = () => {
  return (
    <main className="bg-background text-foreground flex h-dvh items-center justify-center">
      <div className="border-border text-card-foreground bg-card flex h-[300px] w-[300px] flex-col items-center rounded border shadow">
        <h1 className="text-card-foreground mt-4 text-center text-2xl font-bold">
          Welcome Back
        </h1>
        <LoginForm />
      </div>
    </main>
  );
};

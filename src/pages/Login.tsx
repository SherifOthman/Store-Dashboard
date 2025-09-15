import { Navigate } from "react-router-dom";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { LoginForm } from "../features/Auth/LoginForm";
import { getAuth } from "../utils/Auth";

export const Login = () => {
  if (getAuth()) return <Navigate to="/" replace />;

  return (
    <main className="bg-background/95 flex h-dvh items-center justify-center">
      <Card className="bg-background w-[320px] shadow-lg">
        <CardBody className="flex flex-col items-center gap-6 px-8 pt-6 pb-8">
          <Typography color="default" type="h4" className="ont-bold">
            Welcome Back
          </Typography>
          <LoginForm />
        </CardBody>
      </Card>
    </main>
  );
};

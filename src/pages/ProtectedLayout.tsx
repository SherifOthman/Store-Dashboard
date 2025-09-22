import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { refreshToken } from "../services/authService";
import { Loader } from "../components/Loader";

export const PortectedLayout = () => {
  // const [loading, setLoading] = useState(true);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   async function validateAuth() {
  //     if (await refreshToken()) {
  //       // await delay(300); // simulate loading
  //       setLoading(false);
  //     } else {
  //       navigate("/login");
  //     }
  //   }
  //   validateAuth();
  // }, [loading]);

  // if (loading) {
  //   return (
  //     <div className="bg-background h-screen overflow-hidden">
  //       <Loader />;
  //     </div>
  //   );
  // }

  return <Outlet />;
};

import "./styles/global.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Categories } from "./pages/Categories";
import { Products } from "./pages/Products";
import { NotFound } from "./pages/NotFound";
import { Layout } from "./Layout";
import { Login } from "./pages/Login";
import { Profile } from "./pages/Profile";
import { PortectedLayout } from "./pages/ProtectedLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

export const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 1,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<PortectedLayout />}>
            <Route path="/" element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="categories" element={<Categories />} />
              <Route path="products" element={<Products />} />
              <Route path="Profile" element={<Profile />} />
            </Route>
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster

      // position="top-center"
      // reverseOrder={false}
      // gutter={12}
      // containerStyle={{ margin: "8px" }}
      // toastOptions={{
      //   success: {
      //     duration: 3000,
      //   },
      //   error: {
      //     duration: 5000,
      //     style: {},

      //   },
      //   style: {
      //     fontSize: "16px",
      //     maxWidth: "500px",
      //     padding: "16px 24px",
      //     backgroundColor: "#18212f",
      //     color: "var(--color-red-700)",
      //   },
      // }}
      />
    </QueryClientProvider>
  );
};

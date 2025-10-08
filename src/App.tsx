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
import { Providers } from "./Providers";

export const App = () => {
  return (
    <Providers>
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
    </Providers>
  );
};

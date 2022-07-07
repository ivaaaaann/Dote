import { Route, Routes } from "react-router-dom";
import useAuth from "../hooks/auth/useAuth";
import HomePage from "../pages/homePage";
import LoginPage from "../pages/loginPage";

const Router = () => {
  const {} = useAuth();

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default Router;

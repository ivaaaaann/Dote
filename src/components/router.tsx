import { Route, Routes } from "react-router-dom";
import DetailPage from "../pages/detailPage";
import HomePage from "../pages/homePage";
import LoginPage from "../pages/loginPage";
import ResultPage from "../pages/resultPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/voteDetail/:id" element={<DetailPage />} />
      <Route path="/result" element={<ResultPage />} />
    </Routes>
  );
};

export default Router;

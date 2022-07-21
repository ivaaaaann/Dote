import { Route, Routes } from "react-router-dom";
import DetailPage from "../pages/detailPage";
import HomePage from "../pages/homePage";
import LoginPage from "../pages/loginPage";
import ResultDetailPage from "../pages/resultDetailPage";
import ResultPage from "../pages/resultPage";
import CustomRoute from "./common/customRoute/customRoute";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<CustomRoute component={<HomePage />} />} />
      <Route
        path="/login"
        element={<CustomRoute component={<LoginPage />} />}
      />
      <Route
        path="/voteDetail/:id"
        element={<CustomRoute component={<DetailPage />} />}
      />
      <Route
        path="/result"
        element={<CustomRoute component={<ResultPage />} />}
      />
      <Route
        path="/resultDetail/:id"
        element={<CustomRoute component={<ResultDetailPage />} />}
      />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};

export default Router;

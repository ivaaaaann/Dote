import { Route, Routes } from "react-router-dom";
import DetailPage from "../pages/detailPage";
import HomePage from "../pages/homePage";
import ResultDetailPage from "../pages/resultDetailPage";
import ResultPage from "../pages/resultPage";
import CustomRoute from "./common/customRoute/customRoute";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<CustomRoute component={<HomePage />} />} />
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
    </Routes>
  );
};

export default Router;

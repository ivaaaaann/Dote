import { ReactNode } from "react";
import { ACCESS_KEY } from "../../../constants/auth/auth.contant";
import LoginPage from "../../../pages/loginPage";

interface Props {
  component: ReactNode;
}

const CustomRoute = ({ component }: Props) => {
  return localStorage.getItem(ACCESS_KEY) ? <>{component}</> : <LoginPage />;
};

export default CustomRoute;

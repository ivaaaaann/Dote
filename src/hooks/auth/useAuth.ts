import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ACCESS_KEY } from "../../constants/auth/auth.contant";

const useAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem(ACCESS_KEY) === null) {
      navigate("/login");
    }
  }, [navigate]);

  return {};
};

export default useAuth;

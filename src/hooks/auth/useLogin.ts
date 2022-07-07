import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ACCESS_KEY } from "../../constants/auth/auth.contant";
import localStorage from "../../lib/localStorage/localStorage";

const useLogin = () => {
  const navigate = useNavigate();
  const onClickLogin = useCallback(() => {
    try {
      localStorage.setItem(ACCESS_KEY, "true");
      navigate("/");
    } catch (error) {}
  }, [navigate]);

  return {
    onClickLogin,
  };
};

export default useLogin;

import { useNavigate } from "react-router-dom";
import { ACCESS_KEY } from "../../constants/auth/auth.contant";
import localStorage from "../../lib/localStorage/localStorage";
import { useParams } from "../useParmas";
import LoginRepository from "../../repository/login/login.repository";
const useLogin = () => {
  const navigate = useNavigate();
  const code = useParams("code");
  const handleLogin = async () => {
    try {
      if (code) {
        const { token } = await LoginRepository.tryLogin(code);
        localStorage.setItem(ACCESS_KEY, token);
        navigate("/");
      }
    } catch (e) {
      window.alert("Authorization 실패");
      navigate("/");
    }
  };

  return {
    handleLogin,
  };
};

export default useLogin;

import { useNavigate } from "react-router-dom";
import { ACCESS_KEY } from "../../constants/auth/auth.contant";
import localStorage from "../../lib/localStorage/localStorage";
import { useParams } from "../useParmas";
import LoginRepository from "../../repository/login/login.repository";
import { userAtom } from "../../store/user/userStore";
import { useSetRecoilState } from "recoil";

const useLogin = () => {
  const navigate = useNavigate();
  const setUserInfo = useSetRecoilState(userAtom)
  const code = useParams("code");
  const handleLogin = async () => {
    try {
      if (code) {
        const { token, member } = await LoginRepository.tryLogin(code);
        localStorage.setItem(ACCESS_KEY, token);
        setUserInfo(member);
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

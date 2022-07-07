import useLogin from "../../../hooks/auth/useLogin";
import { LoginContainer } from "./style";

const Login = () => {
  const { onClickLogin } = useLogin();

  return (
    <LoginContainer>
      <button onClick={onClickLogin}>로그인</button>
    </LoginContainer>
  );
};

export default Login;

import { useEffect } from "react";
import useLogin from "../../hooks/auth/useLogin";
import { LoginContainer, LoginBtn } from "./style";
import config from "../../config/config.json";
const URL = "http://localhost:3000/login";

const Login = () => {
  const { handleLogin } = useLogin();
  useEffect(() => {
    handleLogin();
  }, [handleLogin]);
  return (
    <LoginContainer>
      {/* <CustomInput
        type="number"
        placeholder="학반번호"
        value={studentNumber}
        setValue={setStudentNumber}
      />
      <CustomInput
        type="text"
        placeholder="이름"
        value={name}
        setValue={setName}
      /> */}
      <a
        href={`http://dauth.b1nd.com/login?client_id=${config.CLIENTID}&redirect_uri=${URL}`}
      >
        <LoginBtn>도담도담 로그인</LoginBtn>
      </a>
    </LoginContainer>
  );
};

export default Login;

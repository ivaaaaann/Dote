import useLogin from "../../hooks/auth/useLogin";
import CustomInput from "../common/input/customInput";
import { LoginContainer, LoginBtn } from "./style";

const Login = () => {
  const { handleLogin, studentNumber, setStudentNumber, name, setName } =
    useLogin();
  return (
    <LoginContainer>
      <CustomInput
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
      />
      <LoginBtn
        type="submit"
        onClick={() => {
          handleLogin();
        }}
      >
        로그인
      </LoginBtn>
    </LoginContainer>
  );
};

export default Login;

import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ACCESS_KEY } from "../../constants/auth/auth.contant";
import localStorage from "../../lib/localStorage/localStorage";
import loginApi from "../../assets/api/loginApi";

const useLogin = () => {
  const [studentNumber, setStudentNumber] = useState<string>("");
  const [name, setName] = useState<string>("");

  const navigate = useNavigate();
  // const handleLogin = useCallback(() => {
  //   try {
  //     console.log(studentNumber, name);
  //     // localStorage.setItem(ACCESS_KEY, "true");
  //     // navigate("/");
  //   } catch (error) { }
  // }, [navigate]);
  const handleLogin = async () => {
    const data = await loginApi(studentNumber, name);
  }
  return {
    handleLogin,
    studentNumber,
    setStudentNumber,
    name,
    setName
  };
};

export default useLogin;

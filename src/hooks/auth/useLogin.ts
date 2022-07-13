import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ACCESS_KEY } from "../../constants/auth/auth.contant";
import localStorage from "../../lib/localStorage/localStorage";

const useLogin = () => {
  const [studentNumber, setStudentNumber] = useState<string>("");
  const [name, setName] = useState<string>("");

  const handleLogin = async () => {
    localStorage.setItem(ACCESS_KEY, "11");
    // const data = await loginApi(studentNumber, name);
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

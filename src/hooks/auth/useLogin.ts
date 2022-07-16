// import { postLoginInfo } from './../../repository/login/login.parms';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ACCESS_KEY } from "../../constants/auth/auth.contant";
import localStorage from "../../lib/localStorage/localStorage";
import { useParams } from '../useParmas';
import LoginRepository from '../../repository/login/login.repository';
const useLogin = () => {
  const navigate = useNavigate();
  const code = useParams('code');
  const handleLogin = async () => {
    if (code) {
      const { token } = await LoginRepository.tryLogin(code);
      localStorage.setItem(ACCESS_KEY, token);
      navigate("/");
    }
  };


  return {
    handleLogin,
  };
};

export default useLogin;

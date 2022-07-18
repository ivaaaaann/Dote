import axios from "axios";
import config from "../../config/config.json";
import { ACCESS_KEY, REQUEST_KEY } from "../../constants/auth/auth.contant";
import { getBearer } from "../../utils/auth/getBearer";

export const customAxios = axios.create({
  baseURL: config.SERVER,
  headers: {
    "Access-Control-Allow-Origin": "*",
    [REQUEST_KEY]: getBearer(localStorage.getItem(ACCESS_KEY)!),
  },
});

customAxios.interceptors.request.use();

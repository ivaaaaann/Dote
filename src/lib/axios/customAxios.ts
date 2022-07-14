import axios from "axios";

export const customAxios = axios.create({
  baseURL: "http://192.168.1.85:8080/api/v1",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

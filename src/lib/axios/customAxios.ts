import axios from "axios";

export const customAxios = axios.create({
  baseURL: "https://test.server.com",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

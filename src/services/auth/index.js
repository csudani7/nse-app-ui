import Axios from "axios";
import { message } from "antd";

const init = {
  cache: "no-cache",
  credentials: "same-origin",
  headers: {
    "content-type": "application/json",
  },
  mode: "cors",
  redirect: "follow",
  referrer: "no-referrer",
  withCredentials: true,
};
const baseAPIUrl = process.env.REACT_APP_API_SERVER;
const axios = Axios.create({
  baseURL: `${baseAPIUrl}/auth`,
  init,
});

export const getUserLogin = async (params) => {
  try {
    const { data, status } = await axios
      .post("/login", params)
      .then((res) => res)
      .catch((error) => error.response);
    if (status === 200 && data?.token) {
      localStorage.setItem("nseAuthToken", data?.token);
      message.success(data?.message);
      return data;
    }
    if (status === 401) {
      message.error("Incorrect email or password");
    }
  } catch (error) {
    message.error("login fail!");
  }
};

export const getUserRegister = async (params) => {
  try {
    const { data, status } = await axios
      .post("/register", params)
      .then((res) => res)
      .catch((error) => error.response);
    if (status === 200 && data?.token) {
      message.success(data?.message);
      return data;
    }
  } catch (error) {
    message.error(error);
  }
};

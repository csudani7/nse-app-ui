import Axios from "axios";
import { message } from "antd";

const axios = Axios.create({
  baseURL: "http://localhost:9000/api/v1/auth",
  withCredentials: true,
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
    } else {
      throw new Error(data?.message || "some thing went wrong!");
    }
  } catch (error) {
    message.error(error);
  }
};

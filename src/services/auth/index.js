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
    const { data, status } = await axios.post("/login", params);

    if (status === 200 && data?.token) {
      localStorage.setItem("nseAuthToken", data?.token);
      message.success(data?.message);
      console.log(data);
      return data;
    }
   
  } catch (error) {
    if(error && error.response ){
    message.error(error.response.data.message);
  }else{
    message.error("Error connecting to our server, pls try again ")
  }
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

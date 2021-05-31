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
  baseURL: baseAPIUrl,
  init,
});

export const addFundToWallet = async (params, token) => {
  try {
    const res = await axios.put(
      "/updateFund",
      { Credit: params },
      {
        headers: { Authorization: token },
      }
    );
    if (res.data.status_code === 201) {
      message.success("Funds Added");
    }
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

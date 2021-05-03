import Axios from "axios";

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

export const addFundToWallet = (params, token) =>
  axios.put("/addFund", params, { headers: { Authorization: token } });

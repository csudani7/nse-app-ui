import Axios from "axios";
import { message } from "antd";
import { initialParams } from "../../utils";

const baseAPIUrl = process.env.REACT_APP_API_SERVER;
const axios = Axios.create({
  baseURL: baseAPIUrl,
  initialParams,
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

import Axios from "axios";
import { initialParams } from "../../utils";

const baseAPIUrl = process.env.REACT_APP_API_SERVER;
const axios = Axios.create({
  baseURL: baseAPIUrl,
  initialParams,
});

export const getUserProfileData = (params) =>
  axios.get("/auth/profile", { headers: { Authorization: params } });

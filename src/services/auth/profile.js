import Axios from "axios";

const axios = Axios.create({
  baseURL: "http://localhost:9000/api/v1",
  withCredentials: true,
});

export const getUserProfileData = (params) =>
  axios.get("/auth/profile", { headers: { Authorization: params } });

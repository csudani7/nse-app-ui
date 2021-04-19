import Axios from "axios";

const axios = Axios.create({
  baseURL: "http://localhost:9000/api/v1",
  withCredentials: true,
});

const token = localStorage.getItem("token");

export const getAllMasterData = () =>
  axios.get("/getData", { headers: { Authorization: token } });

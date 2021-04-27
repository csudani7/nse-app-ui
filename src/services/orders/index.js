import Axios from "axios";

const axios = Axios.create({
  baseURL: "http://localhost:9000/api/v1",
  withCredentials: true,
});

export const getAllMasterData = (params) =>
  axios.get("/getData", { headers: { Authorization: params } });

export const getAllOpenOrders = (params) =>
  axios.get("/getOpenOrder", { headers: { Authorization: params } });

export const getAllExecutedOrder = (params) =>
  axios.get("/getExecutedOrder", { headers: { Authorization: params } });

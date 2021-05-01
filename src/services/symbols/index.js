import Axios from "axios";

const axios = Axios.create({
  baseURL: "http://localhost:9000/api/v1",
  withCredentials: true,
});

export const getAllSymbols = (params) =>
  axios.get("/getData", { headers: { Authorization: params } });

export const storeSymbolDataInServer = (params) =>
  axios.get("/storeData/14", { headers: { Authorization: params } });

export const deleteSymbolDataFromServer = (params) =>
  axios.get("/deleteCollection", { headers: { Authorization: params } });

export const getAllUserAddedSymbols = (params) =>
  axios.get("/getSymbol", { headers: { Authorization: params } });

export const addSymbolToList = (params, token) =>
  axios.post("/addSymbol", params, { headers: { Authorization: token } });

export const deleteSymbolFromList = (symbolId, token) =>
  axios.delete(`/deleteSymbol/${symbolId}`, {
    headers: { Authorization: token },
  });

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

export const getAllSymbols = (params) =>
  axios.get("/getData", { headers: { Authorization: params } });

  // getSymbolFromXTS
export const getSymbolFromXTS = (params) => 
  axios.get('/getSymbolFromXTS', { headers: { Authorization: params } })

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

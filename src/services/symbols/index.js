import Axios from "axios";
import { initialParams } from "../../utils";

const baseAPIUrl = process.env.REACT_APP_API_SERVER;
const axios = Axios.create({
  baseURL: baseAPIUrl,
  initialParams,
});

export const getAllSymbols = (params) =>
  axios.get("/getData", { headers: { Authorization: params } });

export const storeSymbolDataInServer = (params) =>
  axios.get("/storeData/14", { headers: { Authorization: params } });

export const deleteSymbolDataFromServer = (params) =>
  axios.get("/deleteCollection", { headers: { Authorization: params } });

export const getAllUserAddedSymbols = (params) =>
  axios.get("/getSymbol", { headers: { Authorization: params } });

export const addSymbolToList = async (params, token) => {
  const res = await axios.post("/addSymbol", params, {
    headers: { Authorization: token },
  });
  return res.data;
};

export const deleteSymbolFromList = ({ symbolId, token }) =>
  axios.delete(`/deleteSymbol/${symbolId}`, {
    headers: { Authorization: token },
  });

import { useQuery } from "react-query";
import { getSymbolFromXTS } from "../services/symbols";

export default function useGetSymbolFromXTS() {
  const token = localStorage.getItem("nseAuthToken");
  return useQuery("GetSymbolFromXTS", async () => {
    const { data } = await getSymbolFromXTS(token);
    console.log('api res', data);
    return data;
  });
}

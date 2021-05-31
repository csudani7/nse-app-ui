import { useQuery } from "react-query";
import { callMasterAPI } from "../services/xts-connection";

export default function useGetSymbolFromXTS(symbols = null) {
  console.log('ssymbols', symbols);
  return useQuery("getSymbolFromXTS", async () => {
    console.log('calling', symbols);
    if (symbols) {
      const { data } = await callMasterAPI(symbols);
      console.log('api res', data);
      return data;  
    } else {
      return null
    }
    
  });
}

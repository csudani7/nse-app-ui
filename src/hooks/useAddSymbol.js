import { useQuery } from "react-query";
import { addSymbolToList } from "../services/symbols";

export default function useAddSymbol(params) {
  const token = localStorage.getItem("nseAuthToken");
  return useQuery(["addSymbol", params], async () => {
    const { data  } = await addSymbolToList(params, token);
    return data;
  });
}

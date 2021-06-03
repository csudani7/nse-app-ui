import { useMutation } from "react-query";
import { addSymbolToList } from "../services/symbols";

export default function useAddSymbolMutation(params) {
  const token = localStorage.getItem("nseAuthToken");
  return useMutation(["addSymbol", params], async () => {
    return await addSymbolToList(params, token);
  });
}

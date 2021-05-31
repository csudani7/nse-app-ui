import { useMutation } from "react-query";
import { deleteSymbolFromList } from "../services/symbols";

export default function useDeleteSymbol(params) {
  const token = localStorage.getItem("nseAuthToken");
  return useMutation(["deleteSymbol", params], async () => {
    const { data } = await deleteSymbolFromList(params, token);
    return data;
  });
}

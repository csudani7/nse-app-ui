import { useMutation, useQuery } from "react-query";
import { addSymbolToList } from "../services/symbols";

export default function useAddSymbolMutation(params) {
  const token = localStorage.getItem("nseAuthToken");
  return useMutation(["addSymbol", params], async () => {
    return await addSymbolToList(params, token);
  });
}

// export default function useAddSymbol(params) {
//   const token = localStorage.getItem("nseAuthToken");
//   return useQuery(["addSymbol", params], async () => {
//     const { data } = await addSymbolToList(params, token);
//     return data;
//   });
// }

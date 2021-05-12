import { useMutation, useQuery } from "react-query";
import { addSymbolToList } from "../services/symbols";

export const useAddSymbolMutation = (params) => {
  const token = localStorage.getItem('nseAuthToken')
  return useMutation(params, {
    onSuccess: data => {
      console.log("success");
      console.log(data);
      const message = "success"
      console.log(message)
    },
    onError: () => {
      alert("there was an error")
    },
    onSettled: () => {
      // queryClient.invalidateQueries('create');
    }
  });
}

export default function useAddSymbol(params) {
  const token = localStorage.getItem("nseAuthToken");
  return useQuery(["addSymbol", params], async () => {
    const { data  } = await addSymbolToList(params, token);
    return data;
  });
}

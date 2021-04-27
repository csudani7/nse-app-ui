import { useQuery } from "react-query";
import { addFundToWallet } from "../services/funds";

export default function useAddFunds(params) {
  const token = localStorage.getItem("nseAuthToken");
  return useQuery(["addFunds", params], async () => {
    const { data } = await addFundToWallet(params, token);
    return data;
  });
}

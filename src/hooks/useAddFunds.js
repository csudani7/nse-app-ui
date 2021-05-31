import { useMutation } from "react-query";
import { addFundToWallet } from "../services/funds";

export default function useAddFunds(params) {
  const token = localStorage.getItem("nseAuthToken");
  return  useMutation(["addFunds", params], async () => {
   return await addFundToWallet(params, token);
  });
}
import { useMutation } from "react-query";
import { requestUserLogin } from "../services/auth";

export default function useUserLogin(params) {
  return useMutation(["userLogin", params], async () => {
    return await requestUserLogin(params);
  });
}

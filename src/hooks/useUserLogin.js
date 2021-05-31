import { useMutation } from "react-query";
import { getUserLogin } from "../services/auth";

export default function useUserLogin(params) {
  return useMutation(["userLogin", params], async () => {
    return await getUserLogin(params);
  });
}

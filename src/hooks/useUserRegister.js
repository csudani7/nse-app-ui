import { useMutation } from "react-query";
import { requestUserRegister } from "../services/auth";

export default function useUserRegister(params) {
  return useMutation(["userRegister", params], async () => {
    return await requestUserRegister(params);
  });
}

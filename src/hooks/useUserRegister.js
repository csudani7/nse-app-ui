import { useMutation } from "react-query";
import { getUserRegister } from "../services/auth";

export default function useUserRegister(params) {
  return useMutation(["userRegister", params], async () => {
    return await getUserRegister(params);
  });
}

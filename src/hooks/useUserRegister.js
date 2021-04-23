import { useQuery } from "react-query";
import { getUserRegister } from "../services/auth";

export default function useUserRegister(params) {
  return useQuery(["userRegister", params], async () => {
    return await getUserRegister(params);
  });
}

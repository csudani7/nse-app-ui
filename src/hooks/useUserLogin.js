import { useQuery } from "react-query";
import { getUserLogin } from "../services/auth";

export default function useUserLogin(params) {
  return useQuery(["userLogin", params], async () => {
    return await getUserLogin(params);
  });
}

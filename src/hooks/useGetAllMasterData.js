import { useQuery } from "react-query";
import { getAllMasterData } from "../services/orders";

export default function useGetAllMasterData() {
  const token = localStorage.getItem("token");
  return useQuery("allMasterData", async () => {
    const { data } = await getAllMasterData(token);
    return data;
  });
}

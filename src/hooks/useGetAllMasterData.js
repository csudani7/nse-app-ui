import { useQuery } from "react-query";
import { getAllMasterData } from "../services/orders";

export default function useGetAllMasterData() {
  return useQuery("allMasterData", async () => {
    const data = await getAllMasterData();
    return data;
  });
}

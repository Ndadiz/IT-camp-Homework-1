import { useQuery } from "@tanstack/react-query";
import { fetchTasks } from "@shared/api/tasks";
import type { Card } from "@entities/model/tasks";
export const useGetTasks = () => {
  return useQuery<Card[], Error>({
    queryKey: ['tasks'],
    queryFn: fetchTasks,
  });
};
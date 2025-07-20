import { useQuery } from "@tanstack/react-query";
import { fetchOne } from "@shared/api/tasks";

export const getOne = (id:number) => { 
    return useQuery({
    queryKey: ['task', id],
    queryFn: () => fetchOne(id),
  });
};

import Delete from "@shared/ui/assets/icons/DeleteBtn.svg?react";
import { useMutation } from "@tanstack/react-query";
import { deleteTask } from "@shared/api/tasks";
import { queryClient } from "app/App";
interface DeleteBtnProps {
  id: number;
}
/**
 * 
 * @param id {number}
 * @description Добавляет кнопку удаления задачи, также обрабатывает удаление
 * 
 */
export default function DeleteBtn({ id }: DeleteBtnProps) {
  const deleteMutation = useMutation({
    mutationFn: deleteTask,
    onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['tasks'] });
  }
  })
  const handleRemove = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    deleteMutation.mutate(id)
  };
  return (
    <button className="delete-btn" aria-label="close" onClick={handleRemove}>
      <Delete className="delete-svg" />
    </button>
  );
}

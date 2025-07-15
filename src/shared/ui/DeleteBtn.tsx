import Delete from "@shared/ui/assets/icons/minus-circle-svgrepo-com.svg?react";
import { removeTask } from "app/stores/mainStore";

interface DeleteBtnProps {
  id: string;
}

export default function DeleteBtn({ id }: DeleteBtnProps) {
  const handleRemove = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    removeTask(id);
  };
  return (
    <button className="delete-btn" onClick={handleRemove}>
      <Delete className="delete-svg" />
    </button>
  );
}

import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import { EditTaskForm } from "@features/edit-task/ui/EditTaskForm";
import { Section } from "@shared/ui/Section";
import type { Card } from "@entities/model/tasks";
import { updateTask, addTask } from "app/stores/mainStore";
import {getTasksFromStorage} from "@shared/lib/getTasks"

const Container = styled.div`
  width: 600px;
  margin: 0 auto;
  border: 2px solid #ccc;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  
  @media (max-width: 900px) {
    width: 300px;
  }
`;

/**
 * @description Обрабатывает данные полученные из EditTaskForm
 */

export function TaskEditor() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const items = getTasksFromStorage();
  const taskId = id ? parseInt(id) : "new";
  const currentTask = items[taskId];
  
  /**
   * @description Получает id последней задачи
   * @returns lastKey
   */

  const getLastId = () => {
    const keys = Object.keys(items);
    const lastKey = keys[keys.length - 1];
    return lastKey ? parseInt(lastKey) + 1 : 1;
  }

  /**
   * @description Вносит изменения или добавляет новую задачу на основе данных полученных из EditTaskForm
   * @param changes 
   */
  
  const handleSave = (changes: Partial<Card>) => {
    if (taskId == "new"){
    addTask({
      id: getLastId().toString(),
      task: changes as Card
    })
    }else{
      const updatedTask = {
      ...currentTask,
      ...changes
    };
    updateTask({
      id: id ?? '',
      task: updatedTask
    })
  }
    navigate("/");
  };


  return (
    <Section>
      <Container>
        <EditTaskForm 
          task={currentTask}
          onSave={handleSave}
          onCancel={() => navigate("/")}
        />
      </Container>
    </Section>
  );
}
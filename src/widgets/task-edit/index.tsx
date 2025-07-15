import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import { useTasks } from "@shared/lib/tasks-context/index";
import { EditTaskForm } from "@features/edit-task/ui/EditTaskForm";
import { Section } from "@shared/ui/Section";
import type { Card } from "@entities/model/tasks"

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
export function TaskEditor() {
  const { items, setItems } = useTasks();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const taskId = parseInt(id ?? "0");
  const task = items[taskId];

  const handleSave = (updatedTask: Partial<Card>) => {
    setItems((prev) => ({
      ...prev,
      [taskId]: {
        ...prev[taskId],
        ...updatedTask
      },
    }));
    navigate("/");
  };

  if (!task) {
    return <div>Task not found</div>;
  }

  return (
    <Section>
      <Container>
        <EditTaskForm task={task} onSave={handleSave} onCancel={() => navigate("/")} />
      </Container>
    </Section>
  );
}

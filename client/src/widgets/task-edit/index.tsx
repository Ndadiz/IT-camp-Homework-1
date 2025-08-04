import styled from "styled-components";
import { useParams, useNavigate } from "react-router";
import { EditTaskForm } from "@features/edit-task/ui/EditTaskForm";
import { Section } from "@shared/ui/Section";
import type { Card } from "@entities/model/tasks";
import { getOne } from "@pages/task/api/getOne";
import { useMutation } from "@tanstack/react-query";
import { createTask, updateTask } from "@shared/api/tasks";
import ServerStatus from "@shared/ui/ServerStatus";

const Container = styled.div`
  width: 600px;
  margin: 0 auto;
  background-color: #000;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 900px) {
    width: 300px;
  }
`;
export function TaskEditor() {
  const navigate = useNavigate();
  const { id } = useParams<{ id?: string }>();

  const createMutation = useMutation({
    mutationFn: createTask,
    onSuccess: () => navigate("/"),
  });

  const updateMutation = useMutation<
    Card,
    Error,
    { id: number; task: Partial<Card> }
  >({
    mutationFn: ({ id, task }) => updateTask(id, task),
    onSuccess: () => navigate("/"),
  });

  if (id === undefined) {
    const handleSave = (changes: Partial<Card>) => {
      createMutation.mutate(changes as Omit<Card, "id">);
    };

    return (
      <Section>
        <Container>
          <EditTaskForm task={undefined} onSave={handleSave} />
        </Container>
      </Section>
    );
  }

  const parsedId = parseInt(id);
  const { data: currentTask, isLoading, error } = getOne(parsedId);

  if (isLoading) return <ServerStatus>Loading...</ServerStatus>;
  if (error) return <ServerStatus>Error: {error.message}</ServerStatus>;

  const handleSave = (changes: Partial<Card>) => {
    updateMutation.mutate({ id: parsedId, task: changes });
  };

  return (
    <Section>
      <Container>
        <EditTaskForm task={currentTask} onSave={handleSave} />
      </Container>
    </Section>
  );
}

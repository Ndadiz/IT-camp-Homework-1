import styled from "styled-components";
import {
  EditMode,
  Select,
  TextArea,
  Option,
  Button,
} from "@admiral-ds/react-ui";
import type { ChangeEvent } from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import type { Status, Category, Priority } from "../data/tasks";
import { useTasks } from "../context/TasksContext.tsx";
import { Section } from "../componets/TaskItem.tsx";

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


function TaskDetails() {
  const { items, setItems } = useTasks();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const taskId = parseInt(id ?? "0");
  const task = items[taskId];
  const [title, setTitle] = useState(task.title || "");
  const [description, setDescription] = useState(task.description || "");
  const [category, setCategory] = useState(task.category);
  const [status, setStatus] = useState(task.status);
  const [priority, setPriority] = useState(task.priority);

  const handleSave = () => {
    setItems((prev) => ({
      ...prev,
      [taskId]: {
        ...prev[taskId],
        title,
        description,
        category,
        status,
        priority,
      },
    }));
    navigate("/");
  };
  return (
    <Section>
    <Container>
      <EditMode
        onChange={(e) => setTitle(e.currentTarget.value)}
        value={title}
      />
      <TextArea
        value={description}
        onChange={(e) => setDescription(e.currentTarget.value)}
      />

      <Select value={category} onChange={(e: ChangeEvent<HTMLSelectElement>) => setCategory(e.target.value as Category)}>
        <Option value="Bug">Bug</Option>
        <Option value="Feature">Feature</Option>
        <Option value="Documentation">Documentation</Option>
        <Option value="Refactor">Refactor</Option>
        <Option value="Test">Test</Option>
      </Select>

      <Select value={status} onChange={(e: ChangeEvent<HTMLSelectElement>) => setStatus(e.target.value as Status)}>
        <Option value="To Do">To Do</Option>
        <Option value="In Progress">In Progress</Option>
        <Option value="Done">Done</Option>
      </Select>

      <Select value={priority} onChange={(e: ChangeEvent<HTMLSelectElement>) => setPriority(e.target.value as Priority)}>
        <Option value="Low">Low</Option>
        <Option value="Medium">Medium</Option>
        <Option value="High">High</Option>
      </Select>

      <Button appearance="primary" onClick={handleSave}>
        Save
      </Button>
      <Button appearance="secondary" onClick={() => navigate("/")}>
        Cancel
      </Button>
    </Container>
    </Section>
  );
}

export default TaskDetails;

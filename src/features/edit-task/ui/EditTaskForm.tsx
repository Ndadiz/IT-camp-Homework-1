import { useState } from "react";
import { EditMode, Select, TextArea, Option, Button } from "@admiral-ds/react-ui";
import type { Category, Status, Priority } from "@entities/model/tasks";
import type { Card } from "@entities/model/tasks"

type Props = {
  task: Card;
  onSave: (data: Partial<Card>) => void;
  onCancel: () => void;
};

export function EditTaskForm({ task, onSave, onCancel }: Props) {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [category, setCategory] = useState(task.category);
  const [status, setStatus] = useState(task.status);
  const [priority, setPriority] = useState(task.priority);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <EditMode value={title} onChange={(e) => setTitle(e.currentTarget.value)} />
      <TextArea value={description} onChange={(e) => setDescription(e.currentTarget.value)} />

      <Select value={category} onChange={(e) => setCategory(e.target.value as Category)}>
        <Option value="Bug">Bug</Option>
        <Option value="Feature">Feature</Option>
        <Option value="Documentation">Documentation</Option>
        <Option value="Refactor">Refactor</Option>
        <Option value="Test">Test</Option>
      </Select>

      <Select value={status} onChange={(e) => setStatus(e.target.value as Status)}>
        <Option value="To Do">To Do</Option>
        <Option value="In Progress">In Progress</Option>
        <Option value="Done">Done</Option>
      </Select>

      <Select value={priority} onChange={(e) => setPriority(e.target.value as Priority)}>
        <Option value="Low">Low</Option>
        <Option value="Medium">Medium</Option>
        <Option value="High">High</Option>
      </Select>

      <Button appearance="primary" onClick={() => onSave({ title, description, category, status, priority })}>
        Save
      </Button>
      <Button appearance="secondary" onClick={onCancel}>
        Cancel
      </Button>
    </div>
  );
}

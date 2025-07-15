import {
  EditMode,
  Select,
  TextArea,
  Option,
  Button,
} from "@admiral-ds/react-ui";
import type { Category, Status, Priority } from "@entities/model/tasks";
import type { Card } from "@entities/model/tasks";
import { createStore, createEvent } from "effector";
import { useUnit } from "effector-react";
import React from "react";

type Props = {
  task?: Card;
  onSave: (data: Partial<Card>) => void;
  onCancel: () => void;
};

// Создаем события и сторы вне компонента
const title = createEvent<string>();
const description = createEvent<string>();
const category = createEvent<Category>();
const status = createEvent<Status>();
const priority = createEvent<Priority>();
const setTitleError = createEvent<string>();

const $title = createStore("");
const $description = createStore("");
const $category = createStore<Category>("Bug");
const $status = createStore<Status>("To Do");
const $priority = createStore<Priority>("Medium");
const $titleError = createStore("");

// Привязываем обработчики
$title.on(title, (_, value) => value);
$description.on(description, (_, value) => value);
$category.on(category, (_, value) => value);
$status.on(status, (_, value) => value);
$priority.on(priority, (_, value) => value);
$titleError.on(setTitleError, (_, value) => value);
export function EditTaskForm({ task, onSave, onCancel }: Props) {
  React.useEffect(() => {
    title(task?.title ?? "");
    description(task?.description ?? "");
    category(task?.category ?? "Bug");
    status(task?.status ?? "To Do");
    priority(task?.priority ?? "Medium");
  }, [task]);

  const titleValue = useUnit($title);
  const descriptionValue = useUnit($description);
  const categoryValue = useUnit($category);
  const statusValue = useUnit($status);
  const priorityValue = useUnit($priority);
  const titleError = useUnit($titleError);
  return (
    <form style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <label>
        <h4 style={{ display: "inline" }}>Title:</h4>
        <span style={{ color: "red" }}>*</span>
        <EditMode
          value={titleValue}
          onChange={(e) => title(e.currentTarget.value)}
        />
        {titleError && <p style={{ color: "red" }}>{titleError}</p>}
      </label>
      <label>
        <h4>Description:</h4>
        <TextArea
          value={descriptionValue}
          onChange={(e) => description(e.currentTarget.value)}
        />
      </label>
      <label>
        <h4>Category:</h4>
        <Select
          value={categoryValue}
          onChange={(e) => category(e.target.value as Category)}
        >
          <Option value="Bug">Bug</Option>
          <Option value="Feature">Feature</Option>
          <Option value="Documentation">Documentation</Option>
          <Option value="Refactor">Refactor</Option>
          <Option value="Test">Test</Option>
        </Select>
      </label>
      <label>
        <h4>Status:</h4>
        <Select
          value={statusValue}
          onChange={(e) => status(e.target.value as Status)}
        >
          <Option value="To Do">To Do</Option>
          <Option value="In Progress">In Progress</Option>
          <Option value="Done">Done</Option>
        </Select>
      </label>
      <label>
        <h4>Priority:</h4>
        <Select
          value={priorityValue}
          onChange={(e) => priority(e.target.value as Priority)}
        >
          <Option value="Low">Low</Option>
          <Option value="Medium">Medium</Option>
          <Option value="High">High</Option>
        </Select>
      </label>
      <Button
        appearance="primary"
        onClick={(e) => {
          e.preventDefault();

          const currentTitle = $title.getState();
          if (!currentTitle.trim()) {
            setTitleError("Title is required");
            return;
          }

          onSave({
            title: currentTitle,
            description: $description.getState(),
            category: $category.getState(),
            status: $status.getState(),
            priority: $priority.getState(),
          });
        }}
      >
        Save
      </Button>
      <Button appearance="secondary" onClick={onCancel}>
        Cancel
      </Button>
    </form>
  );
}

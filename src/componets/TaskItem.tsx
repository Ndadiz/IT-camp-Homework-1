import styled from "styled-components";
import { Tags, Tag, Button, Divider } from "@admiral-ds/react-ui";
import { useNavigate } from "react-router-dom";
import { useTasks } from "../context/TasksContext.tsx";
import type { Priority } from "../data/tasks";

export const Section = styled.section`
  padding: 25px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 20px;
  @media (max-width: 900px) {
  flex-wrap:wrap;}
`;

const Flex = styled.div`
  display: flex;
  gap: 16px;
  padding: 16px;
  justify-content: center;
  @media (max-width: 900px) {
    flex-direction: column;}
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
  min-height: 300px;
`;

const getTagKind = (value: string) => {
  switch (value) {
    case "High":
    case "To Do":
      return "danger";
    case "Medium":
    case "In Progress":
      return "orange";
    default:
      return "success";
  }
};

function TaskItem() {
  const { items } = useTasks();
  const navigate = useNavigate();
  const priorities: Priority[] = ["High", "Medium", "Low"];

  return (
    <Section>
      {priorities.map((priority) => {
        const tasks = Object.entries(items).filter(
          ([, item]) => item.priority === priority
        );
        if (tasks.length === 0){
          return (
            <div key={priority} className="task__container">
              <h2 className="task__title">Priority: {priority}</h2>
              <Divider />
              <p>No tasks with {priority} priority</p>
            </div>
          );
        }
        else{
        return (
          <div key={priority} className="task__container">
            <div className="task__head">
              <h2 className="task__title">Priority: {priority}</h2>
              <Divider />
            </div>
            <Flex>
              {tasks.map(([id, item]) => (
                <Item key={id}>
                  <h3>{item.title}</h3>
                  {item.description && <p>{item.description}</p>}
                  <Tags>
                    <Tag>{item.category}</Tag>
                    <Tag kind={getTagKind(item.status)}>{item.status}</Tag>
                    <Tag kind={getTagKind(item.priority)}>{item.priority}</Tag>
                  </Tags>
                  <Button appearance="primary" onClick={() => navigate(`/task/${id}`)}>
                    Edit
                  </Button>
                </Item>
              ))}
            </Flex>
          </div>
        );
      }
      })}
    </Section>
  );
}

export default TaskItem;

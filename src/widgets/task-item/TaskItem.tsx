import styled from "styled-components";
import { Tags, Tag, Divider } from "@admiral-ds/react-ui";
import { useNavigate } from "react-router-dom";
import { useTasks } from "@shared/lib/tasks-context";
import type { Priority } from "@entities/model/tasks";
import { Section } from "@shared/ui/Section";

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
  cursor:pointer;
  
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
                <Item key={id} onClick={() => navigate(`/task/${id}`)}>
                  <h3>{item.title}</h3>
                  {item.description && <p>{item.description}</p>}
                  <Tags>
                    <Tag>{item.category}</Tag>
                    <Tag kind={getTagKind(item.status)}>{item.status}</Tag>
                    <Tag kind={getTagKind(item.priority)}>{item.priority}</Tag>
                  </Tags>
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

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
  flex-direction: column;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap:10px;
  padding: 1rem;
  cursor:pointer;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  transition: 300ms ease;
  &:hover {
    transform: scale(1.1);
  }
`;

const TaskBody = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-between;
`
const AddLink = styled.a`
  text-align:center;
  text-decoration:none;
  color:grey;
`
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
          <TaskBody>
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
            <AddLink href="">Add Task</AddLink>
            </TaskBody>
          </div>
        );
      }
      })}
    </Section>
  );
}

export default TaskItem;

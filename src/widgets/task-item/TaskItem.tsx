import styled from "styled-components";
import { Tags, Tag, Divider } from "@admiral-ds/react-ui";
import { useNavigate } from "react-router-dom";
import { Section } from "@shared/ui/Section";
import DeleteBtn from "@shared/ui/DeleteBtn";
import { useUnit } from "effector-react";
import { $tasks } from "app/stores/mainStore";
import type { Priority } from "@entities/model/tasks";
import { Link } from "react-router-dom";

const Flex = styled.div`
  display: flex;
  gap: 16px;
  padding: 16px;
  justify-content: center;
  flex-direction: column;
`;

const Item = styled.div`
  max-width: 300px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 1rem;
  cursor: pointer;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: 300ms ease;

  &:hover {
    transform: scale(1.1);
    .delete-btn {
      display: block;
    }
  }
`;

const TaskBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const AddLink = styled(Link)`
  text-align: center;
  text-decoration: none;
  color: grey;
`;
const Date = styled.div`
  text-align:right;
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
/**
 * 
 * @description Выводит карточки, сортируя их по приоритету
 * 
 */
function TaskItem() {
  const tasks = useUnit($tasks);
  const navigate = useNavigate();
  const priorities: Priority[] = ["High", "Medium", "Low"];

  return (
    <Section>
      {priorities.map((priority) => {
        const filteredTasks = Object.entries(tasks).filter(
          ([, item]) => item.priority === priority
        );

        return (
          <div key={priority} className="task__container">
            <div className="task__head">
              <h2 className="task__title">Priority: {priority}</h2>
              <Divider />
            </div>
            <TaskBody>
              <Flex>
                {filteredTasks.length === 0 ? (
                  <p style={{textAlign:'center'}}>No tasks with {priority} priority</p>
                ) : (
                  filteredTasks.map(([id, item]) => (
                    <Item key={id} onClick={() => navigate(`/task/${id}`)}>
                      <DeleteBtn id={id} />
                      <h3>{item.title}</h3>
                      {item.description && <p>{item.description}</p>}
                      <Tags>
                        <Tag>{item.category}</Tag>
                        <Tag kind={getTagKind(item.status)}>{item.status}</Tag>
                        <Tag kind={getTagKind(item.priority)}>{item.priority}</Tag>
                      </Tags>
                      <Date>{item.date}</Date>
                    </Item>
                  ))
                )}
              </Flex>
              <AddLink to="/task/new">Add Task</AddLink>
            </TaskBody>
          </div>
        );
      })}
    </Section>
  );
}

export default TaskItem;

import styled from "styled-components";
import { Tags, Tag } from "@admiral-ds/react-ui";
import { useNavigate } from "react-router-dom";
import DeleteBtn from "@shared/ui/DeleteBtn";
import type { Card } from "@entities/model/tasks";

const Item = styled.div`
  max-width: 300px;
  position: relative;
  display: flex;
  gap: 10px;
  padding: 1rem;
  cursor: pointer;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: 300ms ease;
  flex-direction:column;

  &:hover {
    transform: scale(1.1);
  }
`;

const Date = styled.div`
  text-align: right;
  color: grey;
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
interface TaskItemProps {
  task: Card;
}
/**
 *
 * @description Выводит карточки
 *
 */
function TaskItem( {task}:TaskItemProps ) {
  const navigate = useNavigate();
  return (
              <Item onClick={() => navigate(`/task/${task.id}`)}>
                <DeleteBtn id={task.id} />
                <h3>{task.title}</h3>
                {task.description && <p>{task.description}</p>}
                <Tags>
                  <Tag>{task.category}</Tag>
                  <Tag kind={getTagKind(task.status)}>{task.status}</Tag>
                  <Tag kind={getTagKind(task.priority)}>{task.priority}</Tag>
                </Tags>
                <Date>{task.date}</Date>
              </Item>
  );
}

export default TaskItem;

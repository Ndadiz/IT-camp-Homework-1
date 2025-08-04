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
  font-family: 'HelveticNowBold', sans-serif;
  flex-direction:column;
  color: #fff;
`;

const Date = styled.div`
  text-align: right;
  color: #FFFFFF;
`;
const MyTag = styled(Tag)`
  background-color: #D9D9D9;
  font-family: 'HelveticNowBold', sans-serif;
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
  return (  <div className="task-container">
                <img src="/icons/knife.png" className="knife" alt="" />
                <Item onClick={() => navigate(`/task/${task.id}`)}>
                  <DeleteBtn id={task.id} />
                  <h3>{task.title}</h3>
                  {task.description && <p>{task.description}</p>}
                  <Tags>
                    <MyTag>{task.category}</MyTag>
                    <MyTag kind={getTagKind(task.status)}>{task.status}</MyTag>
                    <MyTag kind={getTagKind(task.priority)}>{task.priority}</MyTag>
                  </Tags>
                  <Date>{task.date}</Date>
                </Item>
              </div>
  );
}

export default TaskItem;

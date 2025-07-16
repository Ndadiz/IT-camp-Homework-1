import TaskItem from '@widgets/task-item/TaskItem';

/**
 * 
 * @description Отображает виджет задач
 * 
 */
function TaskList() {
  return (
    <>
    <h1 style={{textAlign:"center"}}>Task List</h1>
    <TaskItem />
    </>
  );
}

export default TaskList;
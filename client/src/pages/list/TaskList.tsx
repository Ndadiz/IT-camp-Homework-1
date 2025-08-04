import { useState, useMemo } from "react";
import styled from "styled-components";
import TaskFilter from "@widgets/task-filter";
import TaskItem from "@widgets/task-item/TaskItem";
import { useGetTasks } from "./api/getTasks";
import ServerStatus from "@shared/ui/ServerStatus";
import { Section } from "@shared/ui/Section";
import type { Card } from "@entities/model/tasks";


const TaskBody = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px;
  @media (max-width: 900px) {
    display: flex;
    justify-content: center;
  }
`;

export type Filter = {
  sort: string;
  query: string;
};

export type SortKey = keyof Card;

function TaskList() {
  const [filter, setFilter] = useState<Filter>({ sort: "", query: "" });
  const { data: tasksData, isLoading, error } = useGetTasks();

  const tasks: Card[] = useMemo(() => {
    return Array.isArray(tasksData)
      ? tasksData
      : Object.values(tasksData || {});
  }, [tasksData]);

  const sortedTasks = useMemo(() => {
    if (filter.sort) {
      return [...tasks].sort((a, b) => {
        const aValue = a[filter.sort as SortKey];
        const bValue = b[filter.sort as SortKey];
        return typeof aValue === "string" && typeof bValue === "string"
          ? aValue.localeCompare(bValue)
          : 0;
      });
    }
    return tasks;
  }, [filter.sort, tasks]);

  const sortedAndSearchedTasks = useMemo(() => {
    return sortedTasks.filter((task) =>
      task.title.toLowerCase().includes(filter.query.toLowerCase())
    );
  }, [filter.query, sortedTasks]);

  if (isLoading) return <ServerStatus className="Loading"><img src="/icons/Loading.png" alt="" /></ServerStatus>;
  if (error) return <ServerStatus className="Loading">Error: {error.message}</ServerStatus>;

  return (
    <>
    <div className="heading__container">
      <div className="heading">Task List</div>
    </div>
      <TaskFilter filter={filter} setFilter={setFilter} />
      <Section>
        <TaskBody>
            {sortedAndSearchedTasks.length === 0 ? (
              <p
                style={{
                  textAlign: "center",
                  fontSize: "35px",
                  fontWeight: " 500",
                }}
              >
                No tasks
              </p>
            ) : (
              sortedAndSearchedTasks.map((task) => (
                <TaskItem key={task.id} task={task} />
              ))
            )}
        </TaskBody>
      </Section>
    </>
  );
}

export default TaskList;

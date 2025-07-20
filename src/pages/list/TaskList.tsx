import { useState, useMemo } from "react";
import styled from "styled-components";
import TaskFilter from "@widgets/task-filter";
import TaskItem from "@widgets/task-item/TaskItem";
import { useGetTasks } from "./api/getTasks";
import ServerStatus from "@shared/ui/ServerStatus";
import { Section } from "@shared/ui/Section";
import type { Card } from "@entities/model/tasks";

const Flex = styled.div`
  display: flex;
  gap: 16px;
  padding: 16px;
  flex-wrap: wrap;
  justify-content: center;
`;

const TaskBody = styled.div`
  display: flex;
  justify-content: space-between;
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

  if (isLoading) return <ServerStatus>Loading...</ServerStatus>;
  if (error) return <ServerStatus>Error: {error.message}</ServerStatus>;

  return (
    <>
      <h1 style={{ textAlign: "center", padding: "25px 0" }}>Task List</h1>
      <TaskFilter filter={filter} setFilter={setFilter} />
      <Section>
        <TaskBody>
          <Flex>
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
          </Flex>
        </TaskBody>
      </Section>
    </>
  );
}

export default TaskList;

import React from "react";
import MyInput from "@shared/ui/MyInput";
import MySelect from "@shared/ui/MySelect";
import type { Filter } from "@pages/list/TaskList";
import { Link } from "react-router-dom";
import styled from "styled-components";
import classes from "./filter.module.css";
import AddBtn from "@shared/ui/assets/icons/AddBtn.svg?react";

const AddLink = styled(Link)`
  text-align: center;
}
`;

type Props = {
  filter: Filter;
  setFilter: React.Dispatch<React.SetStateAction<Filter>>;
};

export default function TaskFilter({ filter, setFilter }: Props) {
  return (
    <div className={classes.filterContainer}>
      <MyInput
        placeholder="Search"
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />
      <MySelect
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        defaultValue="Sorting for"
        options={[
          {
            value: "title",
            name: "Title",
          },
          {
            value: "description",
            name: "Description",
          },
          {
            value: "category",
            name: "Category",
          },
          {
            value: "status",
            name: "Status",
          },
          {
            value: "priority",
            name: "Priority",
          },
          {
            value: "date",
            name: "Date",
          },
        ]}
      />
          <AddLink to="/task/new"><AddBtn className={classes.AddBtn} /></AddLink>
    </div>
  );
}

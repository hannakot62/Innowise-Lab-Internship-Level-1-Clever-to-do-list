import React from "react";
import { DayInterface } from "../../hooks/useDays";
import Day from "../Day/Day";

const AllDays = ({
  days,
  unselectAll,
}: {
  days: Array<DayInterface>;
  unselectAll: Function;
}) => {
  let daysToRender: any = [];
  days.map((i) => {
    daysToRender.push(
      <Day
        key={i.day}
        slctd={i.selected}
        day={i.day}
        tasksDoneQuantity={i.tasksDoneQuantity}
        tasksUndoneQuantity={i.tasksUndoneQuantity}
        unselectAll={unselectAll}
      />
    );
  });
  return <div className={"days-container"}>{daysToRender}</div>;
};

export default AllDays;

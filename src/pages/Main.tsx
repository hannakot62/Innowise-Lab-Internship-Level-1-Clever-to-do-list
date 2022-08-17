import React, { useEffect, useState } from "react";
import Task from "../components/Task/Task";
import Day from "../components/Day/Day";
// let days = [
//   { slctd: false, day: 2, tasksDoneQuantity: 1, tasksUndoneQuantity: 0 },
//   { slctd: false, day: 17, tasksDoneQuantity: 2, tasksUndoneQuantity: 0 },
//   { slctd: false, day: 18, tasksDoneQuantity: 1, tasksUndoneQuantity: 0 },
//   { slctd: false, day: 19, tasksDoneQuantity: 3, tasksUndoneQuantity: 9 },
//   { slctd: false, day: 20, tasksDoneQuantity: 0, tasksUndoneQuantity: 0 },
// ];
const Main = (props: any) => {
  const [days, setDays] = useState([
    { slctd: false, day: 2, tasksDoneQuantity: 1, tasksUndoneQuantity: 0 },
    { slctd: false, day: 17, tasksDoneQuantity: 2, tasksUndoneQuantity: 0 },
    { slctd: false, day: 18, tasksDoneQuantity: 1, tasksUndoneQuantity: 0 },
    { slctd: false, day: 19, tasksDoneQuantity: 3, tasksUndoneQuantity: 9 },
    { slctd: false, day: 20, tasksDoneQuantity: 0, tasksUndoneQuantity: 0 },
  ]);
  const [daystopush, setDaystopush] = useState();
  function unselectAll() {
    let a: any = [];
    days.forEach((i) => {
      a.push({
        slctd: false,
        day: i.day,
        tasksDoneQuantity: i.tasksDoneQuantity,
        tasksUndoneQuantity: i.tasksUndoneQuantity,
      });
    });
    setDays(a);

    console.log("new days");
    console.log(a);
  }
  let daysToPush: any = [];
  days.map((i: any) => {
    daysToPush.push(
      <Day
        key={i.day}
        slctd={i.slctd}
        day={i.day}
        tasksDoneQuantity={i.tasksDoneQuantity}
        tasksUndoneQuantity={i.tasksUndoneQuantity}
        unselectAll={unselectAll}
      />
    );
  });
  useEffect(() => {
    daysToPush = [];
    days.map((i: any) => {
      daysToPush.push(
        <Day
          key={i.day}
          slctd={i.slctd}
          day={i.day}
          tasksDoneQuantity={i.tasksDoneQuantity}
          tasksUndoneQuantity={i.tasksUndoneQuantity}
          unselectAll={unselectAll}
        />
      );
    });
  }, [days]);

  // useEffect(() => {
  //   setDaystopush(daysToPush);
  // }, [daysToPush]);
  return (
    <div>
      <div className={"days-container"}>
        {/*// @ts-ignore*/}
        {daysToPush}
        {/*<Day day={2} tasksDoneQuantity={1} tasksUndoneQuantity={0} />*/}
        {/*<Day day={17} tasksDoneQuantity={2} tasksUndoneQuantity={0} />*/}
        {/*<Day day={18} tasksDoneQuantity={1} tasksUndoneQuantity={0} />*/}
        {/*<Day day={19} tasksDoneQuantity={3} tasksUndoneQuantity={9} />*/}
        {/*<Day day={20} tasksDoneQuantity={0} tasksUndoneQuantity={0} />*/}
      </div>
      <Task />
      <Task />
      <Task />
    </div>
  );
};

export default Main;

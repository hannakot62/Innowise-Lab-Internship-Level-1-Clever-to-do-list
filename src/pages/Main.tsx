import React, { useEffect, useState } from "react";
import Task from "../components/Task/Task";
import Day from "../components/Day/Day";
import MainBottomButtons from "../components/UI/buttons/MainBottomButtons/MainBottomButtons";
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
    <div className={"main-page-container"}>
      <div className={"days-container"}>
        {daysToPush}
        {/*<Day day={2} tasksDoneQuantity={1} tasksUndoneQuantity={0} />*/}
        {/*<Day day={17} tasksDoneQuantity={2} tasksUndoneQuantity={0} />*/}
        {/*<Day day={18} tasksDoneQuantity={1} tasksUndoneQuantity={0} />*/}
        {/*<Day day={19} tasksDoneQuantity={3} tasksUndoneQuantity={9} />*/}
        {/*<Day day={20} tasksDoneQuantity={0} tasksUndoneQuantity={0} />*/}
      </div>
      <h1 style={{ width: "100%", alignSelf: "left" }}>Tasks:</h1>
      <div className={"buttons-task-container"}>
        <MainBottomButtons
          style={{
            background: "#231203",
            color: "#fff4e9",
            border: "0.2rem solid #231203",
          }}
        >
          {/*<svg width="24" height="24" fill="none" viewBox="0 0 24 24">*/}
          {/*  <circle*/}
          {/*    cx="12"*/}
          {/*    cy="12"*/}
          {/*    r="3.25"*/}
          {/*    stroke="currentColor"*/}
          {/*    strokeLinecap="round"*/}
          {/*    strokeLinejoin="round"*/}
          {/*    strokeWidth="1.5"*/}
          {/*  ></circle>*/}
          {/*  <path*/}
          {/*    stroke="currentColor"*/}
          {/*    strokeLinecap="round"*/}
          {/*    strokeLinejoin="round"*/}
          {/*    strokeWidth="1.5"*/}
          {/*    d="M12 2.75V4.25"*/}
          {/*  ></path>*/}
          {/*  <path*/}
          {/*    stroke="currentColor"*/}
          {/*    strokeLinecap="round"*/}
          {/*    strokeLinejoin="round"*/}
          {/*    strokeWidth="1.5"*/}
          {/*    d="M17.25 6.75L16.0659 7.93416"*/}
          {/*  ></path>*/}
          {/*  <path*/}
          {/*    stroke="currentColor"*/}
          {/*    strokeLinecap="round"*/}
          {/*    strokeLinejoin="round"*/}
          {/*    strokeWidth="1.5"*/}
          {/*    d="M21.25 12.0001L19.75 12.0001"*/}
          {/*  ></path>*/}
          {/*  <path*/}
          {/*    stroke="currentColor"*/}
          {/*    strokeLinecap="round"*/}
          {/*    strokeLinejoin="round"*/}
          {/*    strokeWidth="1.5"*/}
          {/*    d="M17.25 17.2501L16.0659 16.066"*/}
          {/*  ></path>*/}
          {/*  <path*/}
          {/*    stroke="currentColor"*/}
          {/*    strokeLinecap="round"*/}
          {/*    strokeLinejoin="round"*/}
          {/*    strokeWidth="1.5"*/}
          {/*    d="M12 19.75V21.25"*/}
          {/*  ></path>*/}
          {/*  <path*/}
          {/*    stroke="currentColor"*/}
          {/*    strokeLinecap="round"*/}
          {/*    strokeLinejoin="round"*/}
          {/*    strokeWidth="1.5"*/}
          {/*    d="M7.9341 16.0659L6.74996 17.25"*/}
          {/*  ></path>*/}
          {/*  <path*/}
          {/*    stroke="currentColor"*/}
          {/*    strokeLinecap="round"*/}
          {/*    strokeLinejoin="round"*/}
          {/*    strokeWidth="1.5"*/}
          {/*    d="M4.25 12.0001L2.75 12.0001"*/}
          {/*  ></path>*/}
          {/*  <path*/}
          {/*    stroke="currentColor"*/}
          {/*    strokeLinecap="round"*/}
          {/*    strokeLinejoin="round"*/}
          {/*    strokeWidth="1.5"*/}
          {/*    d="M7.93405 7.93423L6.74991 6.75003"*/}
          {/*  ></path>*/}
          {/*</svg>*/}
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M18.25 15.7499C17.2352 16.2904 16.23 16.25 15 16.25C10.9959 16.25 7.75 13.0041 7.75 9.00001C7.75 7.77001 7.70951 6.76474 8.25 5.74994C5.96125 6.96891 4.75 9.2259 4.75 12C4.75 16.004 7.99594 19.25 12 19.25C14.7741 19.25 17.031 18.0387 18.25 15.7499Z"
            ></path>
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M16 4.75C16 6.95914 14.9591 9 12.75 9C14.9591 9 16 11.0409 16 13.25C16 11.0409 17.0409 9 19.25 9C17.0409 9 16 6.95914 16 4.75Z"
            ></path>
          </svg>
        </MainBottomButtons>
        <MainBottomButtons>
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M12 5.75V18.25"
            ></path>
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M18.25 12L5.75 12"
            ></path>
          </svg>
        </MainBottomButtons>
      </div>
      <Task />
      <Task />
      <Task />
    </div>
  );
};

export default Main;

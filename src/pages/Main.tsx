import React, { useEffect, useState } from "react";
import Task from "../components/Task/Task";
import Day from "../components/Day/Day";
import MainBottomButtons from "../components/UI/buttons/MainBottomButtons/MainBottomButtons";
import { daysInCurrentMonth } from "../logic/dateOperations";
import Sun from "../components/UI/pics/Sun";
import Moon from "../components/UI/pics/Moon";
import Plus from "../components/UI/pics/Plus";
import MyBtn from "../components/UI/buttons/MyBtn";
import SignOutStyle from "../components/UI/buttons/ChangeThemeButton/ChangeThemeButton.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";
import DoorOpen from "../components/UI/pics/DoorOpen";
import { removeUser } from "../store/slices/userSlice";
const Main = (props: any) => {
  const [selectedDay, setSelectedDay] = useState(new Date().getDate());
  const [daystopush, setDaystopush] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = !!useSelector((state: any) => state.user.id);
  const [days, setDays] = useState([
    {
      slctd: selectedDay,
      day: 2,
      tasksDoneQuantity: 1,
      tasksUndoneQuantity: 0,
    },
    {
      slctd: selectedDay,
      day: 17,
      tasksDoneQuantity: 2,
      tasksUndoneQuantity: 0,
    },
    {
      slctd: selectedDay,
      day: 18,
      tasksDoneQuantity: 1,
      tasksUndoneQuantity: 0,
    },
    {
      slctd: selectedDay,
      day: 19,
      tasksDoneQuantity: 3,
      tasksUndoneQuantity: 9,
    },
    {
      slctd: selectedDay,
      day: 25,
      tasksDoneQuantity: 0,
      tasksUndoneQuantity: 0,
    },
  ]);
  function unselectAll(selectedDay: number) {
    let a: any = [];
    days.forEach((i) => {
      a.push({
        slctd: selectedDay,
        day: i.day,
        tasksDoneQuantity: i.tasksDoneQuantity,
        tasksUndoneQuantity: i.tasksUndoneQuantity,
      });
    });
    setSelectedDay(selectedDay);
    setDays(a);
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
  let daaays = daysInCurrentMonth();

  function handleSignOut() {
    dispatch(removeUser());
    navigate("/hello");
  }

  return isAuth ? (
    <div className={"main-page-container"}>
      <MyBtn
        id="sign-out-btn"
        className={SignOutStyle.ChangeThemeButton}
        onClick={handleSignOut}
      >
        Sign Out
        <DoorOpen />
      </MyBtn>
      <div className={"days-container"}>{daysToPush}</div>
      <h1 style={{ width: "100%", alignSelf: "left" }}>Tasks:</h1>
      <div className={"buttons-task-container"}>
        <MainBottomButtons
          style={{
            background: "#231203",
            color: "#fff4e9",
            border: "0.2rem solid #231203",
          }}
        >
          {/*<Sun/>*/}
          <Moon />
        </MainBottomButtons>
        <MainBottomButtons>
          {" "}
          <Link className={"link"} to="/newtask">
            <Plus />
          </Link>
        </MainBottomButtons>
      </div>
      <div className={"tasks"}>
        {/*<h1>chill</h1>*/}
        <Task id={1} />
        <Task id={2} />
        <Task id={3} />
      </div>
    </div>
  ) : (
    <h1>What are you looking for? :)</h1>
  );
};

export default Main;

import React, { useEffect, useState } from "react";
import Day from "../components/Day/Day";
import MainBottomButtons from "../components/UI/buttons/MainBottomButtons/MainBottomButtons";
import { daysInCurrentMonth } from "../logic/dateOperations";
import Sun from "../components/UI/pics/Sun";
import Moon from "../components/UI/pics/Moon";
import Plus from "../components/UI/pics/Plus";
import MyBtn from "../components/UI/buttons/MyBtn";
import SignOutStyle from "../components/UI/buttons/ChangeThemeButton/ChangeThemeButton.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import DoorOpen from "../components/UI/pics/DoorOpen";
import { removeUser } from "../store/slices/userSlice";
import TasksList from "../components/TasksList/TasksList";
import { useDays } from "../hooks/useDays";

const Main = () => {
  const [selectedDay, setSelectedDay] = useState(new Date().getDate());
  console.log("selected day in main ", selectedDay);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useSelector((state: any) => state.theme.theme);
  const isAuth = !!useSelector((state: any) => state.user.id);
  // const daysToRender = useDays(); //надо вернуть дні і забрать все таскі для текуўего юзера
  const [days, setDays] = useState(useDays());
  function unselectAll(selectedDay: number) {
    let a: any = [];
    days.forEach((i) => {
      a.push({
        selected: selectedDay,
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
        slctd={i.selected}
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
          slctd={i.selected}
          day={i.day}
          tasksDoneQuantity={i.tasksDoneQuantity}
          tasksUndoneQuantity={i.tasksUndoneQuantity}
          unselectAll={unselectAll}
        />
      );
    });
  }, [days]);

  function handleSignOut() {
    dispatch(removeUser());
    navigate("/");
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
      <h1 className={"tasks-header"}>Tasks:</h1>
      <div className={"buttons-task-container"}>
        <MainBottomButtons theme={1}>
          {theme === "light" ? <Moon /> : <Sun />}
        </MainBottomButtons>

        <MainBottomButtons>
          <Link className={"link"} to="/newtask">
            <Plus />
          </Link>
        </MainBottomButtons>
      </div>
      <TasksList selectedDay={selectedDay} />
    </div>
  ) : (
    <h1>What are you looking for? :)</h1>
  );
};

export default Main;

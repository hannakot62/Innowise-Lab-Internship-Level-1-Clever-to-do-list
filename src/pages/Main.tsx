import React, { useEffect, useLayoutEffect, useMemo, useState } from "react";
import Day from "@/components/Day/Day";
import MainBottomButtons from "@/components/UI/buttons/MainBottomButtons/MainBottomButtons";
import Sun from "@/components/UI/pics/Sun";
import Moon from "@/components/UI/pics/Moon";
import Plus from "@/components/UI/pics/Plus";
import MyBtn from "@/components/UI/buttons/MyBtn";
import SignOutStyle from "@/components/UI/buttons/ChangeThemeButton/ChangeThemeButton.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import DoorOpen from "@/components/UI/pics/DoorOpen";
import { removeUser } from "@/store/slices/userSlice";
import TasksList from "@/components/TasksList/TasksList";
import { useDays } from "@/hooks/useDays";
import { DayInterface } from "@/hooks/useDays";
import { changeTheme } from "@/store/slices/themeSlice";
import Lottie from "lottie-react";
import loaderLight from "@/assets/loader/loaderLight.json";
import loaderDark from "@/assets/loader/loaderDark.json";
import { Alert } from "@mui/material";

const Main = () => {
  const [selectedDay, setSelectedDay] = useState(new Date().getDate());
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useSelector((state: any) => state.theme.theme);
  const isAuth = useSelector((state: any) => state.user.id);
  const email = useSelector((state: any) => state.user.email);
  const tasks = useSelector((state: any) => state.tasks.tasks);
  const isLoading = useSelector((state: any) => state.loading.isLoading);
  const error = useSelector((state: any) => state.error.error);
  let daysLoaded: Array<DayInterface> = [];
  daysLoaded = useDays(selectedDay);
  const [days, setDays] = useState(useDays(selectedDay));

  useEffect(() => {
    setDays(daysLoaded);
  }, [tasks]);

  function unselectAll(selectedDay: number) {
    let a: Array<DayInterface> = [];
    setSelectedDay(selectedDay);
    days.forEach((i) => {
      a.push({
        selected: selectedDay,
        day: i.day,
        tasksDoneQuantity: i.tasksDoneQuantity,
        tasksUndoneQuantity: i.tasksUndoneQuantity,
      });
    });
    setDays(a);
  }

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
  useEffect(() => {
    daysToRender = [];
    days.map((i: any) => {
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
  }, [tasks, days]);

  function handleSignOut() {
    dispatch(removeUser());
    navigate("/");
  }
  function handleChangeTheme() {
    dispatch(changeTheme());
  }

  return isAuth ? (
    <div className={"main-page-container"}>
      <MyBtn
        id="sign-out-btn"
        className={
          theme == "light"
            ? SignOutStyle.ChangeThemeButtonlight
            : SignOutStyle.ChangeThemeButtondark
        }
        onClick={handleSignOut}
      >
        Sign Out
        <DoorOpen />
      </MyBtn>

      <div className={"days-container"}>{daysToRender}</div>

      <h1 className={"tasks-header"}>Tasks:</h1>
      <div className={"buttons-task-container"}>
        <MainBottomButtons theme={1} onClick={handleChangeTheme}>
          {theme === "light" ? <Moon /> : <Sun />}
        </MainBottomButtons>

        <MainBottomButtons>
          <Link className={"link"} to="/newtask">
            <Plus />
          </Link>
        </MainBottomButtons>
      </div>

      {isLoading ? (
        <Lottie
          className={"loader"}
          animationData={theme == "light" ? loaderLight : loaderDark}
          loop={true}
        />
      ) : (
        <TasksList selectedDay={selectedDay} />
      )}

      {error && (
        <Alert className={"my-alert"} variant="filled" severity="error">
          Oops, something went wrong :(
        </Alert>
      )}
    </div>
  ) : (
    <h1>What are you looking for? :)</h1>
  );
};

export default Main;

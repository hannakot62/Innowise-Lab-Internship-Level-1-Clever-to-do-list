import { useSelector } from "react-redux";
import { daysInCurrentMonth } from "../logic/dateOperations";

interface Day {
  selected: number;
  day: number;
  tasksDoneQuantity: number;
  tasksUndoneQuantity: number;
}
export function useDays() {
  let days: Array<Day> = [];
  //не чітать, а подгрузіть таскі по юзер id
  const allTasks = useSelector((state: any) => state.tasks.tasks);
  const daysInCurrentMonthQuantity = daysInCurrentMonth();
  const currentDay = new Date().getDate();
  for (
    let iterDay = currentDay;
    iterDay <= daysInCurrentMonthQuantity;
    iterDay++
  ) {
    //насчет дня конечно не точно
    let tasksForDay = allTasks.filter((task: any) => task.day === iterDay);
    console.log(tasksForDay);
    // console.log(+tasksForDay[0].done);
    let done = tasksForDay.length
      ? tasksForDay.filter((task: any) => task.done).length
      : 0;
    let undone = tasksForDay.length
      ? tasksForDay.filter((task: any) => !task.done).length
      : 0;
    days.push({
      selected: currentDay,
      day: iterDay,
      tasksDoneQuantity: done,
      tasksUndoneQuantity: undone,
    });
  }
  return days;
}

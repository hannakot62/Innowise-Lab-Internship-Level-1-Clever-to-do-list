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
  console.log(allTasks);
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
    let done = tasksForDay ? +tasksForDay.find((task: any) => task.done) : 0;
    let undone = tasksForDay ? +tasksForDay.find((task: any) => !task.done) : 0;
    days.push({
      selected: currentDay,
      day: iterDay,
      tasksDoneQuantity: done,
      tasksUndoneQuantity: undone,
    });
  }
  console.table(days);
  return days;
}

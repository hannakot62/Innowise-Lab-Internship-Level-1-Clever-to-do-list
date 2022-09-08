import style from "@/components/Day/Day.module.css";

export function dayStyle(selected: boolean, theme: string) {
  return selected
    ? theme == "light"
      ? style.selectedlight
      : style.selecteddark
    : theme == "light"
    ? style.mainContainerlight
    : style.mainContainerdark;
}
export function isDayToday(day: Date) {
  let currentDate = new Date();
  return (
    day.getDate() === currentDate.getDate() &&
    day.getMonth() === currentDate.getMonth() &&
    day.getFullYear() === currentDate.getFullYear()
  );
}

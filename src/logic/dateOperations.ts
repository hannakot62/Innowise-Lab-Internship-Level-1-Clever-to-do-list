export function daysInCurrentMonth(): number {
  return (
    32 - new Date(new Date().getFullYear(), new Date().getMonth(), 32).getDate()
  );
}

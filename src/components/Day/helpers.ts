import style from '@/components/Day/Day.module.css'

export function dayStyle(selected: boolean) {
    return selected ? style.selected : style.mainContainer
}
export function isDayToday(day: Date) {
    const currentDate = new Date()
    return (
        day.getDate() === currentDate.getDate() &&
        day.getMonth() === currentDate.getMonth() &&
        day.getFullYear() === currentDate.getFullYear()
    )
}

import React, { useContext, useEffect, useState } from 'react'
import Day from '@/components/Day/Day'
import {
    MainBottomButtons,
    Sun,
    Moon,
    Plus,
    MyBtn,
    DoorOpen
} from '@/components/UI'
import SignOutStyle from '@/components/UI/buttons/ChangeThemeButton/ChangeThemeButton.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '@/store/slices/userSlice'
import TasksList from '@/components/TasksList/TasksList'
import { useDays } from '@/hooks/useDays'
import { DayInterface } from '@/hooks/useDays'
import Lottie from 'lottie-react'
import loaderLight from '@/assets/loader/loaderLight.json'
import loaderDark from '@/assets/loader/loaderDark.json'
import { Alert } from '@mui/material'
import { setLastDay } from '@/store/slices/lastDaySlice'
import { ThemeContext } from '@/theme-context/context'

const Main = () => {
    const [selectedDay, setSelectedDay] = useState(new Date())
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { theme } = useContext(ThemeContext)
    const { themeToggler } = useContext(ThemeContext)

    const isAuth = useSelector((state: any) => state.user.id)
    const tasks = useSelector((state: any) => state.tasks.tasks)
    const isLoading = useSelector((state: any) => state.loading.isLoading)
    const error = useSelector((state: any) => state.error.error)
    const lastDay = useSelector((state: any) => state.lastDay.lastDay)
    const nextMonthStart = new Date(lastDay)
    let daysLoaded: Array<DayInterface> = []
    daysLoaded = useDays(selectedDay, nextMonthStart)
    const [days, setDays] = useState(useDays(selectedDay, nextMonthStart))

    useEffect(() => {
        setDays(daysLoaded)
    }, [tasks, lastDay])

    function handleScroll(e: any) {
        const end =
            Math.ceil(e.target.scrollWidth) - Math.ceil(e.target.scrollLeft) ===
            Math.ceil(e.target.clientWidth)
        if (end) {
            dispatch(
                setLastDay(
                    new Date(nextMonthStart).setMonth(
                        nextMonthStart.getMonth() + 1
                    )
                )
            )
        }
    }
    function unselectAll(selectedDay: Date) {
        const a: Array<DayInterface> = []
        setSelectedDay(selectedDay)
        days.forEach(i => {
            a.push({
                selected: selectedDay,
                day: i.day,
                tasksDoneQuantity: i.tasksDoneQuantity,
                tasksUndoneQuantity: i.tasksUndoneQuantity
            })
        })
        setDays(a)
    }

    let daysToRender: any = []
    days.map(i => {
        daysToRender.push(
            <Day
                key={i.day.toLocaleDateString()}
                slctd={i.selected}
                day={i.day}
                tasksDoneQuantity={i.tasksDoneQuantity}
                tasksUndoneQuantity={i.tasksUndoneQuantity}
                unselectAll={unselectAll}
            />
        )
    })
    useEffect(() => {
        daysToRender = []
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
            )
        })
    }, [tasks, days])

    function handleSignOut() {
        dispatch(removeUser())
        navigate('/')
    }
    function handleChangeTheme() {
        themeToggler()
    }

    return isAuth ? (
        <div className={'main-page-container'}>
            <MyBtn
                id="sign-out-btn"
                className={SignOutStyle.ChangeThemeButton}
                onClick={handleSignOut}
            >
                Sign Out
                <DoorOpen />
            </MyBtn>
            <div className={'days-container'} onScroll={e => handleScroll(e)}>
                {daysToRender}
            </div>
            <h1 className={'tasks-header'}>Tasks:</h1>
            <div className={'buttons-task-container'}>
                <MainBottomButtons theme={1} onClick={handleChangeTheme}>
                    {theme === 'light' ? <Moon /> : <Sun />}
                </MainBottomButtons>

                <MainBottomButtons>
                    <Link className={'link'} to="/newtask">
                        <Plus />
                    </Link>
                </MainBottomButtons>
            </div>

            {isLoading ? (
                <Lottie
                    className={'loader'}
                    animationData={theme == 'light' ? loaderLight : loaderDark}
                    loop={true}
                />
            ) : (
                <TasksList selectedDay={selectedDay} />
            )}

            {error && (
                <Alert className={'my-alert'} variant="filled" severity="error">
                    Oops, something went wrong :(
                </Alert>
            )}
        </div>
    ) : (
        <h1>What are you looking for? :)</h1>
    )
}

export default Main

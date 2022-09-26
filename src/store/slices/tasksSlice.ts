import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    tasks: []
}
const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        setTasks(state, action) {
            state.tasks = action.payload
        },
        removeTasks(state) {
            state.tasks = []
        },
        taskDoneUndone(state, action) {
            const taskIndex = state.tasks.findIndex(
                (task: any) => task.id === action.payload
            )
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            state.tasks[taskIndex].done = !state.tasks[taskIndex].done
        }
    }
})

export const { setTasks, removeTasks, taskDoneUndone } = tasksSlice.actions
export default tasksSlice.reducer

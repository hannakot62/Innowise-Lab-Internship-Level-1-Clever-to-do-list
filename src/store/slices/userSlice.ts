import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    email: getUserFromLS() ? getUserFromLS().email : null,
    id: getUserFromLS() ? getUserFromLS().id : null
}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            setUserToLS({ email: action.payload.email, id: action.payload.id })
            state.email = action.payload.email
            state.id = action.payload.id
        },
        removeUser(state) {
            deleteUserFromLS()
            state.email = null
            state.id = null
        }
    }
})

export const { setUser, removeUser } = userSlice.actions
export default userSlice.reducer

export function setUserToLS(user: any) {
    localStorage.setItem('todoUser', JSON.stringify(user))
}
export function getUserFromLS() {
    if (localStorage.getItem('todoUser')) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return JSON.parse(localStorage.getItem('todoUser'))
    }
}

export function deleteUserFromLS() {
    localStorage.removeItem('todoUser')
}

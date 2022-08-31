import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: getThemeFromLS() ? deleteThemeFromLS() : "light",
};
const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme(state) {
      deleteThemeFromLS();
      state.theme = state.theme == "light" ? "dark" : "light";
      setThemeToLS(state.theme);
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;

export function setThemeToLS(theme: string) {
  localStorage.setItem("todoTheme", theme);
}
export function getThemeFromLS() {
  if (localStorage.getItem("todoUser")) {
    return localStorage.getItem("todoTheme");
  }
}

export function deleteThemeFromLS() {
  localStorage.removeItem("todoTheme");
}

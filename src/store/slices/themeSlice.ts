import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: getThemeFromLS() ? getThemeFromLS() : "light",
};
const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme(state) {
      let theme = document.getElementsByTagName("html")[0];
      deleteThemeFromLS();
      // @ts-ignore
      theme.classList.toggle(state.theme, false);
      state.theme = state.theme == "light" ? "dark" : "light";
      theme.classList.toggle(state.theme, true);
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
  if (localStorage.getItem("todoTheme")) {
    return localStorage.getItem("todoTheme");
  } else return null;
}

export function deleteThemeFromLS() {
  localStorage.removeItem("todoTheme");
}

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

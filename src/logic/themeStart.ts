export function themeStart() {
  const themeFromLS = localStorage.getItem("todoTheme")
    ? localStorage.getItem("todoTheme")
    : "light";
  const main = document.getElementsByTagName("html")[0];
  // @ts-ignore
  main.classList.add(themeFromLS);
}

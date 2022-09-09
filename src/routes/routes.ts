import SignIn from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";
import Main from "@/pages/Main";
import NewTask from "@/pages/NewTask";
import EditTask from "@/pages/EditTask";

export const myRoutes = [
  { path: "/signin", component: SignIn },
  { path: "/signup", component: SignUp },
  { path: "/todos", component: Main },
  { path: "/newtask", component: NewTask },
  { path: "/edittask", component: EditTask },
];

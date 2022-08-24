import { useSelector } from "react-redux";

export function useAuth() {
  // @ts-ignore
  const { email, id } = useSelector((state) => state.user);
  return {
    isAuth: !!email,
    email,
    id,
  };
}

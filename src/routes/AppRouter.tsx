import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { myRoutes } from "@/routes/routes";
import EntryPage from "@/pages/EntryPage";
import { useSelector } from "react-redux";
import { getUserFromLS } from "@/store/slices/userSlice";

const AppRouter = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!getUserFromLS()) {
      navigate("/");
    } else {
      navigate("/todos");
    }
  }, [useSelector((state: any) => state.user)]);

  return (
    <Routes>
      {myRoutes.map((route) => (
        <Route
          key={Date.now()}
          path={route.path}
          element={<route.component />}
        />
      ))}
      <Route path="/*" element={<EntryPage />} />
    </Routes>
  );
};

export default AppRouter;
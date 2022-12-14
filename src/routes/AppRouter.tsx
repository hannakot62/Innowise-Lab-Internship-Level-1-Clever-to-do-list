import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { myRoutes } from "@/routes/routes";
import EntryPage from "@/pages/EntryPage";
import { useSelector } from "react-redux";
import { getUserFromLS } from "@/store/slices/userSlice";
import { themeStart } from "@/logic/themeStart";

const AppRouter = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!getUserFromLS()) {
      navigate("/");
    } else {
      navigate("/todos");
    }
  }, [useSelector((state: any) => state.user)]);

  useEffect(() => {
    themeStart();
  }, []);

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

import React from "react";
import { Route, Routes } from "react-router-dom";
import { myRoutes } from "../index";
import EntryPage from "../pages/EntryPage";

const AppRouter = () => {
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

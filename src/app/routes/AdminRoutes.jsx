import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";

import AdminHeader from "../components/Admin/AdminHeader";
import AdminSideBar from "../components/Admin/AdminSideBar";

const AdminRoutes = () => {
  return (
    <div>
      <AdminHeader />
      <AdminSideBar />
      <div className="md:ml-64 pt-20 h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminRoutes;

import React from "react";
import { Link, Outlet } from "react-router-dom";
import SidebarAdmin from "./components/SidebarAdmin";

const DashboardAdmin = () => {
  return (
    <div className="flex min-h-screen">
      <SidebarAdmin />
      <main className="flex-1 bg-gray-50 p-10">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardAdmin;

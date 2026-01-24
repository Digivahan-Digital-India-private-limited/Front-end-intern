import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const AdminPannel = () => {
  return (
    <main className="w-full min-h-screen flex lg:flex-row flex-col justify-between items-center">
      <Sidebar />

      {/* Right content area */}
      <section className="flex-1 w-full">
        <Outlet />
      </section>
    </main>
  );
};

export default AdminPannel;

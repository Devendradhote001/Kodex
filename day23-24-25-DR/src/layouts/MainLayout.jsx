import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

const MainLayout = () => {
  console.log("main layout rendering...");
  return (
    <div className="h-screen grid grid-cols-[1fr_7fr]">
      <Navbar />
      <div className="p-6 h-full overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;

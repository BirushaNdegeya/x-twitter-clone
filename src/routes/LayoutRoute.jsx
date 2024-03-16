import React from "react";
import Sidebar from "../components/Sidebar";
import Trends from '../components/Trends';
import { Outlet } from "react-router-dom";

const LayoutRoute = () => {
   return (
      <main role="main" className="wrapper flex">
         <Sidebar />
         <Outlet />
         <Trends />
      </main>
   );
};

export default LayoutRoute;
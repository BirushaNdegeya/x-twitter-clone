import React from "react";
import Sidebar from "../components/Sidebar";
import Trends from '../components/Trends';
import { Outlet } from "react-router-dom";

/**
 * UI Definition of Route
 * @returns {React.JSX.Element}
 */

const LayoutRoute = () => {
   return (
      <main role="main" className='flex justify-center'>
         <Sidebar />
         <Outlet />
         <Trends />
      </main>
   );
};

export default LayoutRoute;
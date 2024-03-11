import React from "react";
import Button from "./buttons/Button";
import SidebarAction, { SidebarTitle } from "./sidebar/SidebarAction";

const Sidebar = () => {
   return (
      <div className="sidebar">
         <div className="header">
            <SidebarTitle />
         </div>
         <h1>Side bar</h1>
         <SidebarAction />
         <Button titre='Tweet' />
      </div>
   );
};

export default Sidebar;
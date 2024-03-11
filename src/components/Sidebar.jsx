import React from "react";
import Button from "./buttons/Button";
import SidebarAction from "./sidebar/SidebarAction";

const Sidebar = () => {
   return (
      <div className="sidebar">
         <h1>Side bar</h1>
         <SidebarAction />
         <Button titre='Tweet' />
      </div>
   );
};

export default Sidebar;
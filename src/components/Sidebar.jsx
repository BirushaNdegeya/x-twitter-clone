import React from "react";
import Button from "./buttons/Button";

const Sidebar = () => {
   return (
      <div className="sidebar">
         <h1>Side bar</h1>
         <Button titre='Tweet' />
      </div>
   );
};

export default Sidebar;
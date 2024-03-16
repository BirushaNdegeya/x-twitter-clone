import React from "react";

const SidebarAction = ({ icon, title }) => {
   return (
      <div className="tweet-action flex">
         <img src={icon} alt="my icon" />
         <h4>{title}</h4>
      </div>
   );
};

export default SidebarAction;
import React from "react";

const SidebarAction = ({ icon, title }) => {
   return (
      <div className="flex gap-2 m-2 p-2 hover:bg-[#202327] rounded-md">
         <img
            src={icon}
            alt="photo icon"
         />
         <h4>{title}</h4>
      </div>
   );
};

export default SidebarAction;
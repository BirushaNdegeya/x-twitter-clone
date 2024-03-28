import React from "react";

const SidebarAction = ({ icon, title }) => {
   return (
      <div className="flex gap-2 md:gap-4 lg:gap-6 ">
         <img
            src={icon}
            alt="photo icon"
         />
         <h4 className="text-md font-medium">{title}</h4>
      </div>
   );
};

export default SidebarAction;
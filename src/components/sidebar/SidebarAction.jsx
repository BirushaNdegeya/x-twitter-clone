import React from "react";

const SidebarAction = ({ icon, title }) => {
   return (
      <div className="flex gap-2 md:gap-4 items-center lg:gap-6 ">
         <img
            src={icon}
            alt="photo icon"
            className='h-8 w-8'
         />
         <h4 className="text-md font-medium hidden md:block">{title}</h4>
      </div>
   );
};

export default SidebarAction;
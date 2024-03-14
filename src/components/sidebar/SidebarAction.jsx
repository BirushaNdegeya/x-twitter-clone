import React from "react";

export const ProfileDetails = () => {
   return (
      <div>
         <h1>photo</h1>
      </div>
   )
}

const SidebarAction = ({ icon, title }) => {
   return (
      <div className="tweet-action">
         <img src={icon} alt="my icon" />
         <h4>{title}</h4>
      </div>
   );
};

export default SidebarAction;
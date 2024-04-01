import React from "react";
import { useNavigate } from "react-router-dom";

/**
 * Sibebar Profile UI Component
 * @param {object} props
 * @returns {React.JSX.Element}
 */

const SidebarProfile = ({ profURl, privURL, morURL }) => {
   const navigate = useNavigate();
   const navigateToProfile = () => {
      navigate('/profile');
   };
   return (
      <div
         onClick={navigateToProfile}
         className="hidden md:flex items-center gap-1 hover:bg-[#202327] justify-between px-6 py-2 rounded-full hover:cursor-pointer text-[12px]"
      >
         <img
            src={profURl}
         />
         <div className="flex flex-col">
            <div
               className="flex items-center">
               <p>Bradley Ortiz</p>
               <img
                  src={privURL}
                  className="h-3 w-3"
               />
            </div>
            <div>@Bradley ...</div>
         </div>
         <img src={morURL} />
      </div>
   );
};

export default SidebarProfile;
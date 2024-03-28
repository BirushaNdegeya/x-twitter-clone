import React from "react";

/**
 * Sibebar Profile UI Component
 * @param {object} props
 * @returns {React.JSX.Element}
 */

const SidebarProfile = ({ profURl, privURL, morURL }) => {
   return (
      <div
         className="flex items-center gap-1 hover:bg-[#202327] justify-between px-6 py-2 rounded-full hover:cursor-pointer"
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
               />
            </div>
            <div>@Bradley ...</div>
         </div>
         <img src={morURL} />
      </div>
   );
};

export default SidebarProfile;
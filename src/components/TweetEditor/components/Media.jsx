import React from "react";

/**
 * Media UI Component
 * @param {object} props
 * @returns {React.JSX.Element}
 */

const Media = ({ children }) => {
   return (
      <div className="p-2 hover:bg-[#202327] rounded-[50%]">
         {children}
      </div>
   );
};

export default Media;
import React from "react";

/**
 * Media UI Component
 * @param {object} props
 * @returns {React.JSX.Element}
 */

const Media = ({ imgURL }) => {
   return (
      <img
         className="hover:cursor-pointer"
         src={imgURL}
      />
   );
};

export default Media;
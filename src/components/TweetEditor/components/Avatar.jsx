import React from "react";

/**
 * Avatar UI Component
 * @param {object} props
 * @returns {React.JSX.Element}
 */

const Avatar = ({ imgURL }) => {
   return (
      <img 
         src={imgURL} 
         alt="Profile Photo" 
      />
   );
};

export default Avatar;
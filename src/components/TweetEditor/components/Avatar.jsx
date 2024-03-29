import React from "react";
import { useNavigate } from "react-router-dom";

/**
 * Avatar UI Component
 * @param {object} props
 * @returns {React.JSX.Element}
 */

const Avatar = ({ imgURL }) => {
   const navigate = useNavigate();
   const goToProfile = () => {
      navigate('/profile');
   };
   return (
      <img 
         onClick={goToProfile}
         className="hover:cursor-pointer"
         src={imgURL} 
         alt="Profile Photo" 
      />
   );
};

export default Avatar;
import React from "react";
import { useNavigate } from "react-router-dom";

/**
 * Tweet Avatar UI Component
 * @param {object} props
 * @returns {React.JSX.Element} 
 */

const TweetAvatar = ({ userImage, linkName }) => {
   const navigate = useNavigate();
   const navigateProfilePost = () => {
      navigate(`/profile/${linkName}`);
   }
   return (
      <img
         onClick={navigateProfilePost}
         src={userImage}
         className='hover:cursor-pointer'
      />
   );
};

export default TweetAvatar;
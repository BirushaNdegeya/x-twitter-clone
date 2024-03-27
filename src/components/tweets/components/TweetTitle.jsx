import React from "react";
import { verified } from '../../../data/ImagesIcons';
import { useNavigate } from "react-router-dom";

/**
 * Tweet Title UI Component
 * @param {object} props
 * @returns {React.JSX.Element}
 */

const TweetTitle = ({ linkId, userName, userTwitter, connectedHours }) => {
   const navigate = useNavigate();
   const navigateProfilePost = () => {
      navigate(`/profile/${linkId}`);
   }
   return (
      <div
         onClick={navigateProfilePost}
         className="flex items-center gap-3 mb-2 cursor-pointer"
      >
         <p>{userName}</p>
         <img src={verified} />
         <p>{userTwitter}</p>
         <p>{connectedHours}</p>
      </div>
   );
};

export default TweetTitle;
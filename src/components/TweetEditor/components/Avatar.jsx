import React from "react";

const Avatar = ({ imgURL }) => {
   return (
      <div className="avatar">
         <img src={imgURL} alt="Profile Photo" />
      </div>
   );
};

export default Avatar;
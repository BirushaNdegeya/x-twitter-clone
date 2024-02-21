import React from "react";

const PublishAvatar = ({ imgURL}) =>  {
   return (
      <div className="avatar">
         <img src={imgURL} alt="Profile Photo" />
      </div>
   );
};

export default PublishAvatar;
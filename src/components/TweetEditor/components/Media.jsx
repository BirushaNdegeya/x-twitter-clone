import React from "react";

const Media = ({ imgURL }) => {
   return (
      <i>
         <img src={imgURL}  />
      </i>
   );
};

export default Media;
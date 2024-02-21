import React from "react";

const MagicHeaderLogo = ( { imgURL }) => {
   return (
      <i className="top-tweets">
         <img src={imgURL} />
      </i>
   );
};

export default MagicHeaderLogo;
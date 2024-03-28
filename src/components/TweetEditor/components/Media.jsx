import React from "react";

/**
 * Media UI Component
 * @param {object} props
 * @returns {React.JSX.Element}
 */

const Media = ({ imgURL }) => {
   return (
      <img
         src={imgURL}
      />
   );
};

export default Media;
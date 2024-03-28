import React from "react";

/**
 * Tweet Image UI Component
 * @param {object} props
 * @returns {React.JSX.Element}
 */

const TweetImage = ({ imgURl }) => {
   return (
      <img
         src={imgURl}
         className="w-full h-auto mb-2"
      />
   );
};

export default TweetImage;
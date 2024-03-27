import React from "react";

/**
 * Top Tweets UI Component
 * @param {object} props
 * @returns {React.JSX.Element}
 */

const TopTweets = ({ imgURL }) => {
   return (
      <img src={imgURL}
         className="h-auto w-6"
      />
   );
};

export default TopTweets;